import { useState } from 'react';
import { ReactComponent as RotateSvg } from '../../../assets/rotate.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { toggleLeftHanded } from '../../../redux/prefsSlice';

const RotateButton = () => {
  const dispatch = useAppDispatch();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setIsClicked(true);
        dispatch(toggleLeftHanded());
      }}
      onTransitionEnd={() => setIsClicked(false)}
    >
      <RotateSvg
        className={`h-8 w-8 duration-500
          ${isClicked && 'rotate-[540deg]'}`}
      />
    </button>
  );
};

export default RotateButton;
