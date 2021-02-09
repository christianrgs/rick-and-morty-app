import { useMemo } from 'react';
import { startsWithVowel } from '../utils/index';

const useModalCharacterInfos = (character) => {
  const isUnknown = useMemo(() => character?.gender === 'unknown', [character]);

  const statusText = useMemo(() => {
    const pronoum = character?.gender === 'Female' ? 'She' : 'He';

    switch (character?.status) {
      case 'Alive':
        return `${pronoum} is alive and well.`;
      case 'Dead':
        return `${pronoum} is dead.`;
      default:
        return `It can’t be told if ${
          isUnknown ? '' : pronoum.toLowerCase()
        } is alive or dead.`;
    }
  }, [character, isUnknown]);

  const lastSeen = useMemo(() => {
    return character?.episode.slice(-1).pop().air_date;
  }, [character]);

  const aboutText = useMemo(() => {
    const speciesIsVowel = startsWithVowel(
      character?.species.toLowerCase() ?? 'a',
    );

    return `${character?.name} is ${
      isUnknown
        ? `${speciesIsVowel ? 'an' : 'a'}`
        : `a ${character?.gender.toLowerCase()}`
    } ${character?.species.toLowerCase()}. ${statusText} Last seen in ${lastSeen}.`;
  }, [character, statusText, lastSeen, isUnknown]);

  const originResidents = useMemo(
    () => character?.origin?.residents?.length ?? 0,
    [character],
  );

  const locationResidents = useMemo(
    () => character?.location?.residents?.length ?? 0,
    [character],
  );

  return { aboutText, originResidents, locationResidents };
};

export default useModalCharacterInfos;
