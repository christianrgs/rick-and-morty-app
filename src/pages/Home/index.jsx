import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import { LogoWrapper, Form } from './styles';

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
    </>
  );
}

export default Home;
