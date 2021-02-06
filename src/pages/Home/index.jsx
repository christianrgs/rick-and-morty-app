import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import { LogoWrapper, Form, CharactersList } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <LogoWrapper>
        <img src={logo} alt="Rick and Morty logo" />
      </LogoWrapper>
      <Form>
        <input
          placeholder="Search caracters"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </Form>
      <CharactersList>
        <li>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div>
            <strong>Rick Sanchez</strong>
            <span>Human</span>
          </div>
        </li>
      </CharactersList>
    </>
  );
}

export default Home;
