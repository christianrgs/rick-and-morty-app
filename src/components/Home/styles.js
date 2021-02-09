import styled from 'styled-components';

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
