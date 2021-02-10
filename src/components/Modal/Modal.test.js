import React from 'react';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import characters from '../../__mocks__/charactersList';

import Modal from './index';
import CharactersList from '../CharactersList/index';

describe('Modal', () => {
  afterEach(cleanup);

  test('should be able to render modal of character', () => {
    render(<div id="modal-root" />);

    const component = render(
      <Modal
        isOpen
        character={characters[0]}
        setModalCharacter={() => {}}
        setIsModalOpen={() => {}}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  test('should be able to close modal clicking in the close button', async () => {
    render(<div id="modal-root" />);

    render(<CharactersList characters={characters} />);

    const characterCardButton = screen.getByTestId('card-1-button');

    fireEvent.click(characterCardButton);

    await waitFor(() => {
      const modalOpened = screen.getByTestId('modal-1');

      return expect(modalOpened).toBeTruthy();
    });

    const closeButton = screen.getByTestId('modal-close-button');

    fireEvent.click(closeButton);

    expect(screen.getByTestId('modal-closed')).toBeTruthy();
  });
});
