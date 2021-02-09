import styled, { css } from 'styled-components';

export const CharactersListWrapper = styled.ul`
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
