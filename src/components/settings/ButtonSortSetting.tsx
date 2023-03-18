import RadioButton from '../forms/RadioButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import SettingTitle from './components/SettingTitle';
import { pianoSort, alphaSort } from '../../redux/prefsSlice';

type ButtonSortProps = {
  id: string;
  showTitle?: boolean;
};

const ButtonSortSetting = ({ id, showTitle }: ButtonSortProps) => {
  const dispatch = useAppDispatch();

  const renderTitle = () => {
    if (showTitle) {
      return <SettingTitle>Sort</SettingTitle>;
    }

    return null;
  };

  return (
    <div className="flex flex-col space-y-2">
      {renderTitle()}
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
  );
};

export default ButtonSortSetting;
