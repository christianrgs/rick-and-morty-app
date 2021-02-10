import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';

import Home from '../Home/index';
import Pagination from './index';

import charactersQueryMock from '../../__mocks__/charactersQueryMock';

describe('Pagination', () => {
  afterEach(cleanup);
  window.scrollTo = jest.fn();

  test('should be able to render pagination component', () => {
    const component = render(
      <Pagination
        pagination={[1, 2, 3, 4, 5]}
        pagesInfo={{ page: 1, previousPage: 0, nextPage: 2, totalPages: 25 }}
        handlePaginate={() => {}}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  test('should be able to page the next page by clicking on the next button', async () => {
    render(<div id="modal-root" />);

    render(
      <MockedProvider mocks={charactersQueryMock} addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    const input = screen.getByTestId('input-search-characters');
    const form = screen.getByTestId('form-search-characters');

    userEvent.type(input, 'rick');
    fireEvent.submit(form);

    await waitFor(async () => {
      const nextButton = screen.getByTestId('paginate-button-next');

      fireEvent.click(nextButton);

      const rickOfPageTwo = screen.getByTestId('card-218');

      expect(rickOfPageTwo).toBeTruthy();
    });
  });

  test('should be able to page the previous page by clicking on the previous button', async () => {
    render(<div id="modal-root" />);

    render(
      <MockedProvider mocks={charactersQueryMock} addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    const input = screen.getByTestId('input-search-characters');
    const form = screen.getByTestId('form-search-characters');

    userEvent.type(input, 'rick');
    fireEvent.submit(form);

    await waitFor(async () => {
      const paginateThreeButton = screen.getByTestId('paginate-button-3');

      fireEvent.click(paginateThreeButton);

      const previousButton = screen.getByTestId('paginate-button-previous');

      fireEvent.click(previousButton);

      const rickOfPageTwo = screen.getByTestId('card-218');

      return expect(rickOfPageTwo).toBeTruthy();
    });
  });

  test('should be able to page to some page by clicking on the numeric page button', async () => {
    render(<div id="modal-root" />);

    render(
      <MockedProvider mocks={charactersQueryMock} addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    const input = screen.getByTestId('input-search-characters');
    const form = screen.getByTestId('form-search-characters');

    userEvent.type(input, 'rick');
    fireEvent.submit(form);

    await waitFor(async () => {
      const paginateThreeButton = screen.getByTestId('paginate-button-3');

      fireEvent.click(paginateThreeButton);

      const rickOfPageThree = screen.getByTestId('card-299');

      return expect(rickOfPageThree).toBeTruthy();
    });
  });
});
