import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg';

const SettingsButton = () => {
  return (
    <button type="button" className="group">
      <SettingsIcon
        className="h-8 w-8 transition-transform duration-150 group-focus-within:rotate-180 
          group-hover:rotate-180 group-focus:fill-gray-400"
      />
    </button>
  );
};

export default SettingsButton;
