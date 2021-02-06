import React, { useMemo, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { debounce } from 'lodash';

import CharacterCard from './CharacterCard';

import GET_CHARACTERS from '../../graphql/queries/characters.gql';
import logo from '../../assets/logo.svg';
import loadingCard from '../../assets/loading-card.svg';

import { LogoWrapper, Form, LoadingWrapper, CharactersList } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [loadCharacters, query] = useLazyQuery(GET_CHARACTERS);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(
    debounce(
      (value) => loadCharacters({ variables: { page: 1, name: value } }),
      500,
    ),
    [],
  );

  const characters = useMemo(() => query?.data?.characters?.results ?? [], [
    query,
  ]);

  const onChange = (event) => {
    setInputValue(event.target.value);
    delayedQuery(event.target.value);
  };

  return (
    <>
      <LogoWrapper>
        <img src={logo} alt="Rick and Morty logo" />
      </LogoWrapper>
      <Form>
        <input
          placeholder="Search caracters"
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </Form>
      {query.loading && (
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
            <CharacterCard key={character.id} character={character} />
          ))}
      </CharactersList>
    </>
  );
}

export default Home;
