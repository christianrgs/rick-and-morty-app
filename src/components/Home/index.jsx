import React, { useMemo, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import useViewport from '../../hooks/useViewPort';
import CharactersList from '../CharactersList';
import Pagination from '../Pagination';

import CHARACTERS_QUERY from '../../graphql/queries/characters';
import logo from '../../assets/logo.svg';
import loadingCard from '../../assets/loading-card.svg';

import { LogoWrapper, Form, LoadingWrapper } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);

  const { isMobile } = useViewport();

  const [loadCharacters, query] = useLazyQuery(CHARACTERS_QUERY, {
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

  const handlePaginate = useCallback(
    (newPage) => {
      setPage(newPage);
      query.refetch({ ...query.variables, page: newPage });

      window.scrollTo(0, 0);
    },
    [query],
  );

  return (
    <>
      <LogoWrapper>
        <img src={logo} alt="Rick and Morty logo" />
      </LogoWrapper>
      <Form data-testid="form-search-characters" onSubmit={onSubmit}>
        <input
          data-testid="input-search-characters"
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
      <CharactersList characters={characters} />
      <Pagination
        pagination={pagination}
        handlePaginate={handlePaginate}
        pagesInfo={{ previousPage, nextPage, page, totalPages }}
      />
    </>
  );
}

export default Home;
