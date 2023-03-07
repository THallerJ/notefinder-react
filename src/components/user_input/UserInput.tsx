import { useState } from 'react';
import SettingsButton from './components/SettingsButton';
import Dropdown from '../form/Dropdown';
import type { Accidental } from './types/Accidental';
import SettingsContent from './components/SettingsContent';
import CreateNoteButtons from './components/CreateNoteButtons';

const UserInput = () => {
  const [accidental, setAccidental] = useState<Accidental>('BOTH');

  return (
    <form className="flex flex-row">
      <CreateNoteButtons accidental={accidental} />
      <div className="ml-3 self-end">
        <Dropdown
          title="Accidentals"
          button={<SettingsButton />}
          content={<SettingsContent setState={setAccidental} />}
        />
      </div>
    </form>
  );
};

export default UserInput;
