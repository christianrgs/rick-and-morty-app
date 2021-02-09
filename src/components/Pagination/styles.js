import styled, { css } from 'styled-components';

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
