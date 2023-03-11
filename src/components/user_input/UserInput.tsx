import { useState } from 'react';
import SettingsButton from './components/SettingsButton';
import Dropdown from '../form/Dropdown';
import type { Accidental } from './types/Accidental';
import SettingsContent from './components/SettingsContent';
import CreateNoteButtons from './components/CreateNoteButtons';
import useNoteButtonData from './hooks/useNoteButtonData';

const UserInput = () => {
  const [accidentalPref, setAccidentalPref] = useState<Accidental>('BOTH');
  const { state: noteButtonState, dispatch: noteButtonDispatch } =
    useNoteButtonData();

  return (
    <form className="flex flex-row">
      <CreateNoteButtons
        accidentalPref={accidentalPref}
        noteButtonData={noteButtonState}
      />
      <div className="ml-3 self-end">
        <Dropdown
          right
          button={<SettingsButton />}
          content={
            <SettingsContent
              setAccidental={setAccidentalPref}
              dispatch={noteButtonDispatch}
            />
          }
        />
      </div>
    </form>
  );
};

export default UserInput;
