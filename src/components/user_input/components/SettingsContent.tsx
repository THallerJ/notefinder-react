import RadioButton from '../../form/RadioButton';
import type { Accidental } from '../types/Accidental';

type DropdownContentProps = {
  setState: React.Dispatch<React.SetStateAction<Accidental>>;
};

const SettingsContent = ({ setState }: DropdownContentProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <RadioButton
        text="Both"
        name="accidental"
        onClick={() => setState('BOTH')}
        checked
      />
      <RadioButton
        text="Sharps"
        name="accidental"
        onClick={() => setState('SHARP')}
      />
      <RadioButton
        text="Flats"
        name="accidental"
        onClick={() => setState('FLAT')}
      />
    </div>
  );
};

export default SettingsContent;
