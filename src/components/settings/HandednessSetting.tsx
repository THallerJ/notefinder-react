import RadioButton from '../forms/RadioButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import SettingTitle from './components/SettingTitle';
import { setLeftHanded } from '../../redux/prefsSlice';

type HandednessSettingProps = {
  id: string;
  showTitle?: boolean;
};

const HandednessSetting = ({ id, showTitle }: HandednessSettingProps) => {
  const dispatch = useAppDispatch();

  const renderTitle = () => {
    if (showTitle) {
      return <SettingTitle>Handedness</SettingTitle>;
    }

    return null;
  };

  return (
    <div className="flex flex-col space-y-2">
      {renderTitle()}
      <RadioButton
        id={id}
        text="Right"
        name="handedness"
        onClick={() => dispatch(setLeftHanded(false))}
        checked
      />
      <RadioButton
        id={id}
        text="Left"
        name="handedness"
        onClick={() => dispatch(setLeftHanded(true))}
      />
    </div>
  );
};

export default HandednessSetting;
