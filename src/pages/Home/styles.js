import styled, { css } from 'styled-components';

import residentsIcon from '../../assets/residents-icon.svg';

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

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  padding: 0 13px 14px 12px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in, visibility 0.3s ease-in;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  @media (min-width: 1024px) {
    align-items: center;
    padding: 20px 15px 20px 100px;
  }

  @media (min-width: 1300px) and (min-height: 1000px) {
    padding: 0;
  }

  main {
    display: flex;
    width: 100%;
    height: calc(100% - 150px);
    border: 1px solid #161616;
    box-sizing: border-box;
    background: #000000;
    filter: drop-shadow(0px 4px 79px #000000);
    border-radius: 16px;
    transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s;
    flex-direction: column;
    padding-bottom: 20px;

    @media (min-width: 1024px) {
      width: 1034px;
      height: 100%;
      max-height: 799px;
      flex-direction: row;
      padding-bottom: 0;
    }

    section {
      &.left {
        width: 100%;
        height: 59px;
        margin-bottom: 59px;

        div.glass-wrapper {
          height: 100%;
          width: 100%;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
        }

        button {
          position: absolute;
          left: 0;
          top: -130px;
          color: #ffffff;
          background: transparent;
          border: 0;
          box-sizing: border-box;
          border-radius: 8px;
          padding: 10px 22px;
          font-size: 0;
        }

        @media (min-width: 768px) {
          height: 150px;
        }

        @media (min-width: 1024px) {
          position: relative;
          width: 389px;
          height: 100%;
          margin-bottom: 0;
          padding-top: 0;

          div.glass-wrapper {
            border-radius: 16px 0 0 16px;
          }

          button {
            left: 20px;
            top: 20px;
            border: 2px solid #ffffff;
            font-size: 16px;

            svg {
              display: none;
            }
          }
        }
      }

      &.right {
        flex: 1;
        padding: 0 28px 0 21px;
        overflow-y: auto;

        article {
          margin-bottom: 41px;

          & + article {
            margin-bottom: 43px;

            h4 {
              margin-bottom: 17px;
            }
          }

          h4 {
            font-size: 13px;
            letter-spacing: 0.65em;
            font-weight: normal;
            color: #cbd736;
            margin-bottom: 9px;
          }

          h5 {
            font-size: 20px;
            font-weight: normal;
            color: #ffffff;
            text-transform: capitalize;
          }

          h6 {
            font-size: 16px;
            font-weight: normal;
            color: #d3d3d3;
            margin-bottom: 7px;
          }

          p {
            font-size: 16px;
            color: #d3d3d3;
          }

          span {
            font-size: 12px;
            color: #8c8c8c;

            &:last-of-type {
              font-size: 14px;

              &::before {
                content: '';
                display: inline-block;
                background: url(${residentsIcon}) no-repeat;
                width: 12px;
                height: 10px;
                margin-right: 11px;
              }
            }
          }
        }

        @media (min-width: 768px) {
          padding: 50px 75px 0 71px;

          article {
            margin-bottom: 63px;

            & + article {
              margin-bottom: 56px;
            }

            h5 {
              font-size: 28px;
            }

            h6 {
              font-size: 18px;
              margin-bottom: 12px;
            }

            span {
              font-size: 14px;
            }
          }
        }
      }

      @media (min-width: 1024px) {
        padding-top: 71px;
      }
    }
  }
`;

export const ImageBackground = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => `#000000 url(${props.url}) no-repeat center`};
  background-size: cover;
  filter: blur(25px);

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }
`;

export const CharacterCardModal = styled.div`
  font-family: 'Seravek';
  display: block;
  position: absolute;
  width: 178px;
  height: 173px;
  top: -85px;
  left: 50%;
  border: 2px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  transform: translateX(-50%);

  img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 35%;
    transform: translateY(-50%);
  }

  div {
    width: 100%;
    height: 54px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 7px 10px 10px 13px;
    background: #1b1b1b;

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

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 401px;
    height: calc(100% - 144px);
    top: 83px;
    left: -77px;
    transform: none;

    img {
      width: auto;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
