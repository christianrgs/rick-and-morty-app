import React from 'react';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';

import Home from './index';

import charactersQueryMock from '../../__mocks__/charactersQueryMock';

describe('Home component', () => {
  window.scrollTo = jest.fn();
  afterEach(cleanup);

  test('should be to render list after graphql query', async () => {
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

    await waitFor(() => {
      const charactersList = screen.getByTestId('characters-list');

      return expect(charactersList.children.length).toBe(1);
    });
  });

  test('should be to reset page state after search new character', async () => {
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

    await waitFor(() => {
      const charactersList = screen.getByTestId('characters-list');

      return expect(charactersList.children.length).toBe(1);
    });

    const nextButton = screen.getByTestId('paginate-button-next');

    fireEvent.click(nextButton);

    await waitFor(() => {
      const rickOfPageTwo = screen.getByTestId('card-218');

      return expect(rickOfPageTwo).toBeTruthy();
    });

    userEvent.clear(input);
    userEvent.type(input, 'morty');

    fireEvent.submit(form);

    await waitFor(() => {
      const cardOfMorty = screen.getByTestId('card-2');

      return expect(cardOfMorty).toBeTruthy();
    });
  });
});
