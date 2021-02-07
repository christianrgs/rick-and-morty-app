import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  img {
    width: 240px;
    margin: 0 auto;
    display: block;

    @media (min-width: 500px) {
      width: auto;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 47px;

  @media (min-width: 768px) {
    margin-top: 74px;
  }

  input {
    width: 196px;
    height: 42px;
    padding: 0 10px;
    border: 2px solid #ffffff;
    border-radius: 8px;
    color: #ffffff;
    background: transparent;
    font-weight: bold;

    &:focus {
      border-color: #cbd736;
    }

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

    :focus {
      border-color: #cbd736;
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  list-style: none;
  margin-top: 47px;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 101px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CharacterCardWrapper = styled.li`
  font-family: 'Seravek';

  ${(props) =>
    props.isDead &&
    css`
      img {
        filter: grayscale(100%);
      }
    `}

  button {
    display: block;
    position: relative;
    margin: 0 auto;
    border: 2px solid #606060;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    transition: border 0.4s, box-shadow 0.4s;

    &:focus {
      border-color: #cbd736;
      box-shadow: 0px 6px 7px rgba(203, 215, 54, 0.25);
    }

    &:hover {
      border-color: #cbd736;
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
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 77px;

  ul {
    li {
      display: inline-block;

      & + li {
        margin-left: 51px;
      }
    }
  }
`;

export const PaginationButton = styled.button`
  font-size: 20px;
  color: #606060;
  background: transparent;
  border: none;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: #cbd736;
    `}
`;

export const ArrowButton = styled.button`
  border: none;
  background: transparent;
  margin-left: 48px;

  &:first-child {
    margin-left: 0px;
    margin-right: 48px;

    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    display: inline-block;
    vertical-align: sub;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;

      svg {
        path {
          stroke: #606060;
        }
      }
    `}
`;
