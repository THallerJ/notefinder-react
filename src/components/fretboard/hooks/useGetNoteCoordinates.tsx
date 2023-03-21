import { useEffect, useState, useCallback } from 'react';
import { select } from 'd3';
import useAppSelector from '../../../hooks/useAppSelector';
import type { GuitarString } from '../../../types/GuitarString';

const useGetNoteCoordinates = () => {
  const [coord, setCoord] = useState<number[]>([]);
  const currentNote = useAppSelector((state) => state.guitar.guitarCoord);
  const isLeftHanded = useAppSelector((state) => state.prefs.isLeftHanded);

  const getCoordinates = (id: string): DOMRect => {
    return (select(`#${id}`).node() as SVGGraphicsElement).getBBox();
  };

  const convertStrLeftHand = (gtrStr: GuitarString): GuitarString => {
    switch (gtrStr) {
      case 'HIGH_E':
        return 'LOW_E';
      case 'B':
        return 'A';
      case 'G':
        return 'D';
      case 'D':
        return 'G';
      case 'A':
        return 'B';
      case 'LOW_E':
        return 'HIGH_E';
      default:
        return 'HIGH_E';
    }
  };

  const getNoteCoordinates = useCallback(
    (fret: number, str: GuitarString): { x: number; y: number } => {
      const currFret = getCoordinates(`fret${fret}`);
      const prevFret = getCoordinates(`fret${fret - 1}`);
      const gtrStr = getCoordinates(
        isLeftHanded ? convertStrLeftHand(str) : str
      );

      // x-coordinate is in the middle of the current fret and previous fret
      const x = (currFret.x + prevFret.x) / 2;
      // find the x-coordinate as a percentage of the x-axis
      // ex: if fretboardLength = 100 and x = 40, then ratio = 0.40
      const ratio = (x - gtrStr.x) / gtrStr.width;
      // since the guitar strings have a higher y-coordinate on one end of the
      // fretboard than the other, the ratio is used find appropriate y-coordinate
      // for a corresponding x-coordinate
      const y = gtrStr.y + gtrStr.height * ratio - ratio * 0.6;

      return { x, y };
    },
    [isLeftHanded]
  );

  useEffect(() => {
    const coordinates = getNoteCoordinates(currentNote.fret, currentNote.str);
    setCoord([coordinates.x, coordinates.y]);
  }, [currentNote, getNoteCoordinates]);

  return coord;
};

export default useGetNoteCoordinates;
