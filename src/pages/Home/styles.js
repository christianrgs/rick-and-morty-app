import styled from 'styled-components';

export const LogoWrapper = styled.div`
  text-align: center;
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
