import { useState } from 'react';
import SettingsButton from './components/SettingsButton';
import Dropdown from '../forms/Dropdown';
import type { Accidental } from '../../types/Accidental';
import SettingsContent from '../settings/SettingsContent';
import CreateNoteButtons from './components/CreateNoteButtons';
import useNoteButtonData from './hooks/useNoteButtonData';
import useMd from '../../hooks/useMd';

const UserInput = () => {
  const [accidentalPref, setAccidentalPref] = useState<Accidental>('BOTH');
  const { state: noteButtonState, dispatch: noteButtonDispatch } =
    useNoteButtonData();
  const md = useMd();

  const renderSettingsDropdown = () => {
    if (md) {
      return (
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
      );
    }

    return null;
  };

  return (
    <form
      className="container mx-auto grid w-fit grid-cols-3 gap-1
        md:flex md:flex-row md:justify-center md:gap-0 md:bg-transparent"
    >
      <CreateNoteButtons
        accidentalPref={accidentalPref}
        noteButtonData={noteButtonState}
      />
      {renderSettingsDropdown()}
    </form>
  );
};

export default UserInput;
