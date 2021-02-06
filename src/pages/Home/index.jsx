import React, { useMemo, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import CharacterCard from './CharacterCard';

import GET_CHARACTERS from '../../graphql/queries/characters.gql';
import logo from '../../assets/logo.svg';
import loadingCard from '../../assets/loading-card.svg';
import Arrow from '../../assets/arrow';

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
  const [loadCharacters, query] = useLazyQuery(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
  });

  const isLoading = useMemo(
    () => query.networkStatus === 1 || query.networkStatus === 2,
    [query],
  );

  const characters = useMemo(() => query?.data?.characters?.results ?? [], [
    query,
  ]);

  const previousPage = useMemo(() => query?.data?.characters?.info?.prev ?? 0, [
    query,
  ]);

  const nextPage = useMemo(() => query?.data?.characters?.info?.next ?? 0, [
    query,
  ]);

  const totalPages = useMemo(() => query?.data?.characters?.info?.pages ?? 0, [
    query,
  ]);

  const pages = useMemo(() => {
    const maxSlice = totalPages - 5;
    const initialSlice = previousPage > maxSlice ? maxSlice : previousPage;
    const nextSlice = (nextPage || totalPages) + 3;

    if (totalPages) {
      const showPageOptions = Array(totalPages)
        .fill(1)
        .map((_, index) => index + 1)
        .slice(initialSlice, nextSlice);

      return showPageOptions;
    }

    return [];
  }, [nextPage, previousPage, totalPages]);

  const handleSearch = useCallback(
    (name, pageParam) => {
      loadCharacters({ variables: { name, page: pageParam } });
    },
    [loadCharacters],
  );

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePaginate = (newPage) => {
    setPage(newPage);
    query.refetch({ ...query.variables, page: newPage });

    window.scrollTo(0, 0);
  };

  const paginateWithArrow = (type) => {
    const newPage = type === 'prev' ? previousPage : nextPage;

    handlePaginate(newPage);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length) {
      if (page > 1) {
        setPage(1);
      }

      handleSearch(inputValue, 1);
    }
  };

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
      <CharactersList role="navigation">
        {!!characters.length &&
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </CharactersList>
      {!!pages.length && (
        <PaginationWrapper>
          <ArrowButton
            type="button"
            disabled={!previousPage}
            onClick={() => paginateWithArrow('prev')}
          >
            <Arrow />
          </ArrowButton>
          <ul>
            {pages.map((pageOption) => (
              <li key={`pagination-item-${pageOption}`}>
                <PaginationButton
                  type="button"
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
