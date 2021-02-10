import React from 'react';
import PropTypes from 'prop-types';

import { CharacterCardWrapper } from './styles';

function CharacterCard(props) {
  const { character, handleOpenModal } = props;

  return (
    <CharacterCardWrapper
      data-testid={`card-${character?.id}`}
      isDead={character.status === 'Dead'}
    >
      <button
        type="button"
        data-testid={`card-${character?.id}-button`}
        aria-label={character.name}
        onClick={() => handleOpenModal(character)}
      >
        <img src={character.image} alt={character.name} />
        <div>
          <strong>{character.name}</strong>
          <span>{character.species}</span>
        </div>
      </button>
    </CharacterCardWrapper>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default CharacterCard;
