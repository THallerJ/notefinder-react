import { useState } from 'react';
import Checkbox from '../../forms/Checkbox';
import { GuitarString } from '../../../types/GuitarString';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { filterStrings, updateNote } from '../../../redux/guitarSlice';

type ToggleStringCheckboxProp = {
  labelText: string;
  guitarString: GuitarString;
  toggledCount: number;
  setToggledCount: React.Dispatch<React.SetStateAction<number>>;
};

const ToggleStringCheckbox = ({
  labelText,
  guitarString,
  toggledCount,
  setToggledCount,
}: ToggleStringCheckboxProp) => {
  const dispatch = useAppDispatch();
  const curGtrStr = useAppSelector((state) => state.guitar.guitarCoord.str);

  const [toggled, setToggled] = useState<boolean>(true);

  const onChange = (): void => {
    if (toggled && toggledCount === 1) return;
    if (toggled) setToggledCount((prevState) => prevState - 1);
    if (!toggled) setToggledCount((prevState) => prevState + 1);

    setToggled((prevState) => !prevState);
    dispatch(filterStrings(guitarString));
    // if the current note resides on the guitar string that is being removed,
    // then update the note
    if (curGtrStr === guitarString) dispatch(updateNote());
  };

  return <Checkbox text={labelText} checked={toggled} onChange={onChange} />;
};

export default ToggleStringCheckbox;
