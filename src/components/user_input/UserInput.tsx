import { useState } from 'react';
import SettingsButton from './components/SettingsButton';
import Dropdown from '../form/Dropdown';
import type { Accidental } from './types/Accidental';
import SettingsContent from './components/SettingsContent';
import CreateNoteButtons from './components/CreateNoteButtons';
import useNoteButtonData from './hooks/useNoteButtonData';

//  <form className="flex flex-row justify-center">
const UserInput = () => {
  const [accidentalPref, setAccidentalPref] = useState<Accidental>('BOTH');
  const { state: noteButtonState, dispatch: noteButtonDispatch } =
    useNoteButtonData();

  return (
    <form
      className="container mx-auto grid w-max grid-cols-3 place-items-center gap-1 bg-gray-700
         md:flex md:flex-row md:justify-center md:gap-0 md:bg-transparent"
    >
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
