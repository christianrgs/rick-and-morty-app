import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  img {
    margin: 0 auto;
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 74px;

  input {
    width: 196px;
    height: 42px;
    padding: 0 10px;
    border: 2px solid #ffffff;
    border-radius: 8px;
    color: #ffffff;
    background: transparent;
    font-weight: bold;

    &::placeholder {
      color: #9f9f9f;
    }
  }

  button {
    width: 84px;
    height: 42px;
    margin-left: 16px;
    border: 2px solid #ffffff;
    border-radius: 8px;
    color: #ffffff;
    background: transparent;
    font-weight: bold;
    transition: background-color 0.2s;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(23px);

  div {
    text-align: center;

    img {
      animation: walking 2s linear infinite alternate-reverse;
    }

    span {
      display: block;
      font-size: 24px;
      color: #ffffff;
      margin-top: 36px;
    }
  }

  @keyframes walking {
    0% {
      transform: rotate(350deg);
    }
    50% {
      transform: rotate(370deg);
    }
    100% {
      transform: rotate(350deg);
    }
  }
`;

export const CharactersList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 101px;
`;

export const CharacterCardWrapper = styled.li`
  width: 224px;
  height: 224px;
  position: relative;
  overflow: hidden;
  font-family: 'Seravek';
  margin-bottom: 24px;
  border: 2px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  transition: border 0.4s, box-shadow 0.4s;

  ${(props) =>
    props.isDead &&
    css`
      img {
        filter: grayscale(100%);
      }
    `}

  &:hover {
    border: 2px solid #cbd736;
    box-shadow: 0px 6px 7px rgba(203, 215, 54, 0.25);

    img {
      filter: grayscale(0%);
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: filter 0.4s;
  }

  div {
    width: 100%;
    height: 54px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 7px 10px 10px 13px;
    background-color: rgba(27, 27, 27, 0.8);
    backdrop-filter: blur(23px);

    strong {
      display: block;
      font-size: 20px;
      color: #ffffff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: block;
      font-size: 12px;
      color: #ffffff;
    }
  }
`;
