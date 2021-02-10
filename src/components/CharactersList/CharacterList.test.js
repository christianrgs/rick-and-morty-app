import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import characters from '../../__mocks__/charactersList';

import CharactersList from './index';

describe('Character List', () => {
  afterEach(cleanup);

  test('should be able to render characters list', () => {
    render(<div id="modal-root" />);

    const component = render(<CharactersList characters={characters} />);

    expect(component).toMatchSnapshot();
  });

  test('should be able to render character card', () => {
    render(<div id="modal-root" />);

    render(<CharactersList characters={characters} />);

    const cardOfRick = screen.getByTestId('card-1');

    expect(cardOfRick).toBeTruthy();
  });

  test('should be able open modal clicking in the character card', () => {
    render(<div id="modal-root" />);

    render(<CharactersList characters={characters} />);

    const characterCardButton = screen.getByTestId('card-1-button');

    fireEvent.click(characterCardButton);

    const modalOfRick = screen.getByTestId('modal-1');

    expect(modalOfRick).toBeTruthy();
  });
});
