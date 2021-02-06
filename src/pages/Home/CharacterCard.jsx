import React from 'react';
import PropTypes from 'prop-types';

import { CharacterCardWrapper } from './styles';

function CharacterCard(props) {
  const { character } = props;

  return (
    <CharacterCardWrapper isDead={character.status === 'Dead'}>
      <button type="button" aria-label={character.name} onClick={() => {}}>
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
};

export default CharacterCard;
