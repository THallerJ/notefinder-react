import SettingsIcon from '../../../assets/settings.svg';

const SettingsButton = () => {
  return (
    <button type="button" className="group rounded-full focus:bg-gray-700">
      <img
        alt="settings button"
        src={SettingsIcon}
        height="30"
        width="30"
        className="transition-transform duration-700 
        valid:rotate-90 group-hover:rotate-90 group-focus:rotate-90"
      />
    </button>
  );
};

export default SettingsButton;
