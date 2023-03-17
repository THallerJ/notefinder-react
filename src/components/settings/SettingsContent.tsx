import RadioButton from '../forms/RadioButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import { alphaSort, pianoSort, setAccidendtal } from '../../redux/prefsSlice';

type SettingsContentProp = {
  id: string;
};

const SettingsContent = ({ id }: SettingsContentProp) => {
  const dispatch = useAppDispatch();

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
          id={id}
          text="Both"
          name="accidental"
          onClick={() => dispatch(setAccidendtal('BOTH'))}
          checked
        />
        <RadioButton
          id={id}
          text="Sharps"
          name="accidental"
          onClick={() => dispatch(setAccidendtal('SHARP'))}
        />
        <RadioButton
          id={id}
          text="Flats"
          name="accidental"
          onClick={() => dispatch(setAccidendtal('FLAT'))}
        />
      </div>
      <div className="flex flex-col space-y-2 pl-5">
        {renderTitle('Button Order')}
        <RadioButton
          id={id}
          text="Piano"
          name="sorting"
          onClick={() => dispatch(pianoSort())}
          checked
        />
        <RadioButton
          id={id}
          text="Alphabetical"
          name="sorting"
          onClick={() => dispatch(alphaSort())}
        />
      </div>
    </div>
  );
};

export default SettingsContent;
