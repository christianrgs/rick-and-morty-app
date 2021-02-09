import styled, { css } from 'styled-components';

import residentsIcon from '../../assets/residents-icon.svg';

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
