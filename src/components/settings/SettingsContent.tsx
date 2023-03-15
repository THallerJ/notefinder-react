import RadioButton from '../forms/RadioButton';
import type { Accidental } from '../../types/Accidental';
import type { NoteButtonActionType } from '../../types/NoteButtonActionType';

type SettingsContentProps = {
  setAccidental: React.Dispatch<React.SetStateAction<Accidental>>;
  dispatch: React.Dispatch<NoteButtonActionType>;
};

const SettingsContent = ({ setAccidental, dispatch }: SettingsContentProps) => {
  const renderTitle = (title: string): React.ReactNode => {
    return (
      <div>
        <span className=" text-base font-medium text-[#d1d1d1]">{title}</span>
        <div className="mt-2 grow border-t border-[#d1d1d1]" />
      </div>
    );
  };

  return (
    <div className="flex flex-row space-x-5 divide-x divide-[#d1d1d1]">
      <div className="flex flex-col space-y-2">
        {renderTitle('Accidental')}
        <RadioButton
          text="Both"
          name="accidental"
          onClick={() => setAccidental('BOTH')}
          checked
        />
        <RadioButton
          text="Sharps"
          name="accidental"
          onClick={() => setAccidental('SHARP')}
        />
        <RadioButton
          text="Flats"
          name="accidental"
          onClick={() => setAccidental('FLAT')}
        />
      </div>
      <div className="flex flex-col space-y-2 pl-5">
        {renderTitle('Button Order')}
        <RadioButton
          text="Piano"
          name="sorting"
          onClick={() => dispatch('PIANO_SORT')}
          checked
        />
        <RadioButton
          text="Alphabetical"
          name="sorting"
          onClick={() => dispatch('ALPHA_SORT')}
        />
      </div>
    </div>
  );
};

export default SettingsContent;
