import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';
import Modal from '../Modal';
import { CharactersListWrapper } from './styles';

function CharactersList(props) {
  const { characters } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCharacter, setModalCharacter] = useState(null);

  const html = document.querySelector('html');

  const handleOpenModal = useCallback(
    (character) => {
      setModalCharacter(character);
      setIsModalOpen(true);

      html.classList.add('has-no-scroll');
    },
    [html.classList],
  );

  if (characters.length) {
    return (
      <>
        <CharactersListWrapper data-testid="characters-list">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </CharactersListWrapper>
        <Modal
          isOpen={isModalOpen}
          character={modalCharacter}
          setModalCharacter={setModalCharacter}
          setIsModalOpen={setIsModalOpen}
        />
      </>
    );
  }

  return <></>;
}

CharactersList.defaultProps = {
  characters: [],
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      episode: PropTypes.arrayOf(
        PropTypes.shape({
          air_date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      origin: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
          }),
        ),
      }).isRequired,
      location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
          }),
        ),
      }).isRequired,
    }),
  ),
};

export default CharactersList;
