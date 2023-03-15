import NoteButton from './NoteButton';
import useAppDispatch from '../../../hooks/useAppDispatch';
import type { Accidental } from '../../../types/Accidental';
import { checkAnswer } from '../../../redux/guitarSlice';
import type { NoteButtonData } from '../types/NoteButtonData';

type CreateNoteButtonsProps = {
  accidentalPref: Accidental;
  noteButtonData: NoteButtonData[];
};

const CreateNoteButtons = ({
  accidentalPref,
  noteButtonData: buttonNotes,
}: CreateNoteButtonsProps) => {
  const dispatch = useAppDispatch();

  const getButtonText = (note: NoteButtonData): string => {
    if (note.txt.length === 1 || accidentalPref === 'SHARP') return note.txt[0];
    if (accidentalPref === 'BOTH') return `${note.txt[0]}/${note.txt[1]}`;
    if (accidentalPref === 'FLAT') return note?.txt[1] as string;
    return '';
  };

  return (
    <>
      {buttonNotes.map((n, i) => {
        const txt = getButtonText(n);
        return (
          <NoteButton
            key={`${txt}NoteButton`}
            note={txt}
            isNatural={n.txt.length === 1}
            leftRounded={i === 0}
            rightRounded={i === buttonNotes.length - 1}
            onClick={() => dispatch(checkAnswer(n.note))}
          />
        );
      })}
    </>
  );
};

export default CreateNoteButtons;
