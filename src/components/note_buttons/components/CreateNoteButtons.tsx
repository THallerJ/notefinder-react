import NoteButton from './NoteButton';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { checkAnswer } from '../../../redux/guitarSlice';
import useAppSelector from '../../../hooks/useAppSelector';

const CreateNoteButtons = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.prefs.notes);
  const accidental = useAppSelector((state) => state.prefs.accidental);

  const getButtonText = (note: [string, string?]): string => {
    if (note.length === 1 || accidental === 'SHARP') return note[0];
    if (accidental === 'BOTH') return `${note[0]}/${note[1]}`;
    if (accidental === 'FLAT') return note?.[1] as string;
    return '';
  };

  return (
    <>
      {notes.map((n, i) => {
        const txt = getButtonText(n.txt);
        return (
          <NoteButton
            key={`${txt}NoteButton`}
            note={txt}
            isNatural={n.txt.length === 1}
            leftRounded={i === 0}
            rightRounded={i === notes.length - 1}
            onClick={() => dispatch(checkAnswer(n.note))}
          />
        );
      })}
    </>
  );
};

export default CreateNoteButtons;
