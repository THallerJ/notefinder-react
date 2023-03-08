import NoteButton from './NoteButton';
import useAppDispatch from '../../../hooks/useAppDispatch';
import type { Accidental } from '../types/Accidental';
import { checkAnswer } from '../../../redux/guitarSlice';
import type { Note } from '../../../types/Note';

type CreateNoteButtonsProps = {
  accidental: Accidental;
};

const CreateNoteButtons = ({ accidental }: CreateNoteButtonsProps) => {
  const dispatch = useAppDispatch();

  type NoteButtonType = { txt: [string, string?]; note: Note };
  const notes: NoteButtonType[] = [
    { txt: ['C'], note: 'C' },
    { txt: ['C#', 'Db'], note: 'C_SHARP' },
    { txt: ['D'], note: 'D' },
    { txt: ['D#', 'Eb'], note: 'D_SHARP' },
    { txt: ['E'], note: 'E' },
    { txt: ['F'], note: 'F' },
    { txt: ['F#', 'Gb'], note: 'F_SHARP' },
    { txt: ['G'], note: 'G' },
    { txt: ['G#', 'Ab'], note: 'G_SHARP' },
    { txt: ['A'], note: 'A' },
    { txt: ['A#', 'Bb'], note: 'A_SHARP' },
    { txt: ['B'], note: 'B' },
  ];

  const getButtonText = (note: NoteButtonType): string => {
    if (note.txt.length === 1 || accidental === 'SHARP') return note.txt[0];
    if (accidental === 'BOTH') return `${note.txt[0]}/${note.txt[1]}`;
    if (accidental === 'FLAT') return note?.txt[1] as string;
    return '';
  };

  return (
    <>
      {notes.map((n, i) => {
        const txt = getButtonText(n);
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
