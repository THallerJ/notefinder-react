import { select } from 'd3';
import { useCallback, useState } from 'react';
import { ReactComponent as FretboardSvg } from '../../assets/fretboard.svg';
import useAppDispatch from '../../hooks/useAppDispatch';
import useUserGuess from '../../hooks/useUserGuess';
import { updateNote } from '../../redux/guitarSlice';
import Dropdown from '../forms/Dropdown';
import useUpdateNote from './hooks/useUpdateNote';
import ToggleStringButton from './components/ToggleStringButton';
import ToggleStringsSetting from '../settings/ToggleStringsSetting';
import ScaleSlider from './components/ScaleSlider';
import useFretboardScaleClass from './hooks/useFretboardScaleClass';

const Fretboard = () => {
  const drawnNoteId = 'drawnNote';
  const dispatch = useAppDispatch();
  const [scale, setScale] = useState<string>('100');
  // tailwind class used for scaling the fretboard
  const scaleClass = useFretboardScaleClass({ scale });

  const resetNoteColor = (): void => {
    select(`#${drawnNoteId}`).attr('fill', 'cyan');
  };

  const onCorrect = useCallback((): void => {
    select(`#${drawnNoteId}`).attr('fill', 'green');
  }, []);

  const onCorrectDelay = useCallback(() => {
    dispatch(updateNote());
    resetNoteColor();
  }, [dispatch]);

  // Note that the note will flash red when opening the page
  // in development mode. This is caused by strict mode and
  // is not an issue in production.
  const onIncorrect = useCallback((): void => {
    select(`#${drawnNoteId}`).attr('fill', 'red');
  }, []);

  const onIncorrectDelay = useCallback((): void => {
    resetNoteColor();
  }, []);

  useUserGuess({ onCorrect, onIncorrect, onCorrectDelay, onIncorrectDelay });
  useUpdateNote();

  return (
    <div>
      <div className="hidden md:block">
        <Dropdown
          button={<ToggleStringButton />}
          content={<ToggleStringsSetting id="body" />}
          left
        />
      </div>
      <FretboardSvg className={`min-w-full ${scaleClass}`} />
      <div className="mt-8 flex h-2 w-full items-center justify-center">
        <ScaleSlider setScale={setScale} />
      </div>
    </div>
  );
};

export default Fretboard;
