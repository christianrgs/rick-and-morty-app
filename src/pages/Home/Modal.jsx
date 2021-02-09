import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import useModalCharacterInfos from '../../hooks/useModalCharacterInfos';

import CloseIcon from '../../assets/CloseIcon';
import { ModalWrapper, ImageBackground, CharacterCardModal } from './styles';

function Modal(props) {
  const { isOpen, character, handleCloseModal } = props;

  const html = document.querySelector('html');
  const modalRoot = document.getElementById('modal-root');

  const {
    aboutText,
    originResidents,
    locationResidents,
  } = useModalCharacterInfos(character);

  const getPlanetOrDimensionText = useCallback(({ type, text }) => {
    return !text || text === 'unknown' ? `Unknown ${type}` : text;
  }, []);

  useEffect(() => {
    if (isOpen) {
      html.classList.add('has-no-scroll');
    } else if (html.classList.contains('has-no-scroll')) {
      html.classList.remove('has-no-scroll');
    }
  }, [isOpen, html]);

  const renderLocalContent = useCallback(
    (localType, amountOfResidents) => {
      return (
        <>
          <span>
            {getPlanetOrDimensionText({
              type: 'Planet',
              text: character?.[localType]?.type,
            })}
          </span>
          <h5>{character?.[localType].name}</h5>
          <h6>
            {getPlanetOrDimensionText({
              type: 'Dimension',
              text: character?.[localType]?.dimension,
            })}
          </h6>
          {!!amountOfResidents && <span>{amountOfResidents} residents </span>}
        </>
      );
    },
    [character, getPlanetOrDimensionText],
  );

  return createPortal(
    <ModalWrapper isOpen={isOpen}>
      <main>
        <section className="left">
          <div className="glass-wrapper">
            {!!character?.image && <ImageBackground url={character?.image} />}
          </div>
          <button type="button" onClick={() => handleCloseModal()}>
            <CloseIcon />
            Close
          </button>
          <CharacterCardModal>
            {!!character?.image && (
              <img src={character?.image} alt={character?.name} />
            )}
            <div>
              <strong>{character?.name}</strong>
              <span>{character?.species}</span>
            </div>
          </CharacterCardModal>
        </section>
        <section className="right">
          <article>
            <h4>ABOUT</h4>
            <p>{aboutText}</p>
          </article>
          <article>
            <h4>ORIGIN</h4>
            {renderLocalContent('origin', originResidents)}
          </article>
          <article>
            <h4>LOCATION</h4>
            {renderLocalContent('location', locationResidents)}
          </article>
        </section>
      </main>
    </ModalWrapper>,
    modalRoot,
  );
}

Modal.defaultProps = {
  character: null,
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  character: PropTypes.oneOfType([
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
            id: PropTypes.string.isRequired,
          }),
        ),
      }).isRequired,
      location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
          }),
        ),
      }).isRequired,
    }),
    PropTypes.oneOf([null]).isRequired,
  ]),
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
