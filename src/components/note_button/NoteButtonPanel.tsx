import { useState } from 'react';
import NoteButton from './NoteButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import { checkAnswer } from '../../redux/guitarSlice';
import { NoteEnum } from '../../utils/enum';
import Dropdown from '../Dropdown';
import NoteButtonSetting from './NoteButtonSetting';

const NoteButtonPanel = () => {
  enum NoteTypeEnum {
    SHARP,
    FLAT,
    BOTH,
  }
  const [noteType, setNoteType] = useState(NoteTypeEnum.BOTH);
  const dispatch = useAppDispatch();

  type Note = { txt: [string, string?]; enum: NoteEnum };
  const notes: Note[] = [
    { txt: ['C'], enum: NoteEnum.C },
    { txt: ['C#', 'Db'], enum: NoteEnum.C_SHARP },
    { txt: ['D'], enum: NoteEnum.D },
    { txt: ['D#', 'Eb'], enum: NoteEnum.D_SHARP },
    { txt: ['E'], enum: NoteEnum.E },
    { txt: ['F'], enum: NoteEnum.F },
    { txt: ['F#', 'Gb'], enum: NoteEnum.F_SHARP },
    { txt: ['G'], enum: NoteEnum.G },
    { txt: ['G#', 'Ab'], enum: NoteEnum.G_SHARP },
    { txt: ['A'], enum: NoteEnum.A },
    { txt: ['A#', 'Bb'], enum: NoteEnum.A_SHARP },
    { txt: ['B'], enum: NoteEnum.B },
  ];

  const getButtonText = (note: Note): string => {
    if (note.txt.length === 1 || noteType === NoteTypeEnum.SHARP)
      return note.txt[0];
    if (noteType === NoteTypeEnum.BOTH) return `${note.txt[0]}/${note.txt[1]}`;
    if (noteType === NoteTypeEnum.FLAT) return note?.txt[1] as string;
    return '';
  };

  return (
    <form className="flex flex-row">
      {notes.map((note, i) => {
        const txt = getButtonText(note);
        return (
          <NoteButton
            key={txt}
            note={txt}
            accidental={note.txt.length > 1}
            leftRounded={i === 0}
            rightRounded={i === notes.length - 1}
            onClick={() => dispatch(checkAnswer(note.enum))}
          />
        );
      })}
      <div className="ml-3 self-end">
        <Dropdown
          button={<NoteButtonSetting />}
          content={
            <div className="flex flex-col font-medium text-gray-300">
              <h6>Both</h6>
              <h6>Sharps</h6>
              <h6>Flats</h6>
            </div>
          }
        />
      </div>
    </form>
  );
};

export default NoteButtonPanel;
