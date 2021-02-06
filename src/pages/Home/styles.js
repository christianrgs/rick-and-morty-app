import styled from 'styled-components';

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

export const CharactersList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 101px;

  li {
    position: relative;
    overflow: hidden;
    font-family: 'Seravek';
    border: 2px solid #606060;
    box-sizing: border-box;
    border-radius: 8px;

    & + li {
      margin-left: 24px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
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
      }

      span {
        display: block;
        font-size: 12px;
        color: #ffffff;
      }
    }
  }
`;
