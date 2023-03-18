import RadioButton from '../forms/RadioButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setAccidendtal } from '../../redux/prefsSlice';
import SettingTitle from './components/SettingTitle';

type AccidentalSettingProps = {
  id: string;
  showTitle?: boolean;
};

const AccidentalSetting = ({ id, showTitle }: AccidentalSettingProps) => {
  const dispatch = useAppDispatch();

  const renderTitle = () => {
    if (showTitle) {
      return <SettingTitle>Accidental</SettingTitle>;
    }

    return null;
  };

  return (
    <div className="flex flex-col space-y-2">
      {renderTitle()}
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
  );
};

export default AccidentalSetting;
