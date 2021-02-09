import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import useViewport from '../../hooks/useViewPort';
import CharacterCard from './CharacterCard';
import Modal from './Modal';

import GET_CHARACTERS from '../../graphql/queries/characters.gql';
import logo from '../../assets/logo.svg';
import loadingCard from '../../assets/loading-card.svg';
import Arrow from '../../assets/Arrow';

import {
  LogoWrapper,
  Form,
  LoadingWrapper,
  CharactersList,
  PaginationWrapper,
  PaginationButton,
  ArrowButton,
} from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCharacter, setModalCharacter] = useState(null);

  const { isMobile } = useViewport();

  const [loadCharacters, query] = useLazyQuery(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
  });

  const isLoading = useMemo(
    () => query.networkStatus === 1 || query.networkStatus === 2,
    [query],
  );

  const { characters, previousPage, nextPage, totalPages } = useMemo(
    () => ({
      characters: query?.data?.characters?.results ?? [],
      previousPage: query?.data?.characters?.info?.prev ?? 0,
      nextPage: query?.data?.characters?.info?.next ?? 0,
      totalPages: query?.data?.characters?.info?.pages ?? 0,
    }),
    [query],
  );

  const pagination = useMemo(() => {
    if (totalPages) {
      const maxSliceDesktop = totalPages > 5 ? totalPages - 5 : 0;
      const maxSlice = isMobile ? 1 : maxSliceDesktop;
      const initialSlice =
        !isMobile && previousPage > maxSlice ? maxSlice : previousPage;
      const nextSlice = isMobile ? page : (nextPage || totalPages) + 3;

      const showPageOptions = Array(totalPages)
        .fill(1)
        .map((_, index) => index + 1)
        .slice(initialSlice, nextSlice);

      return showPageOptions;
    }

    return [];
  }, [isMobile, totalPages, previousPage, page, nextPage]);

  const handleSearch = useCallback(
    (name, pageParam) => {
      loadCharacters({ variables: { name, page: pageParam } });
    },
    [loadCharacters],
  );

  const onChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handlePaginate = useCallback(
    (newPage) => {
      setPage(newPage);
      query.refetch({ ...query.variables, page: newPage });

      window.scrollTo(0, 0);
    },
    [query],
  );

  const paginateWithArrow = useCallback(
    (type) => {
      const newPage = type === 'prev' ? previousPage : nextPage;

      handlePaginate(newPage);
    },
    [previousPage, nextPage, handlePaginate],
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (inputValue.length) {
        if (page > 1) {
          setPage(1);
        }

        handleSearch(inputValue, 1);
      }
    },
    [inputValue, page, setPage, handleSearch],
  );

  const handleOpenModal = useCallback((character) => {
    setModalCharacter(character);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalCharacter(null);
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <LogoWrapper>
        <img src={logo} alt="Rick and Morty logo" />
      </LogoWrapper>
      <Form onSubmit={onSubmit}>
        <input
          aria-label="Search caracters"
          placeholder="Search caracters"
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </Form>
      {isLoading && (
        <LoadingWrapper>
          <div>
            <img src={loadingCard} alt="loading card" />
            <span>Loading</span>
          </div>
        </LoadingWrapper>
      )}
      <CharactersList>
        {!!characters.length &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleOpenModal={handleOpenModal}
            />
          ))}
      </CharactersList>
      <Modal
        isOpen={isModalOpen}
        character={modalCharacter}
        handleCloseModal={handleCloseModal}
      />
      {!!pagination.length && (
        <PaginationWrapper>
          <ArrowButton
            type="button"
            aria-label="Previous page"
            disabled={!previousPage}
            onClick={() => paginateWithArrow('prev')}
          >
            <Arrow />
          </ArrowButton>
          <ul>
            {pagination.map((pageOption) => (
              <li key={`pagination-item-${pageOption}`}>
                <PaginationButton
                  type="button"
                  aria-label={`Page ${pageOption}`}
                  disabled={page === pageOption}
                  onClick={() => handlePaginate(pageOption)}
                >
                  {pageOption}
                </PaginationButton>
              </li>
            ))}
          </ul>
          <ArrowButton
            type="button"
            aria-label="Next page"
            disabled={page >= totalPages}
            onClick={() => paginateWithArrow('next')}
          >
            <Arrow />
          </ArrowButton>
        </PaginationWrapper>
      )}
    </>
  );
}

export default Home;
