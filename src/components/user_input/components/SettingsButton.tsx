import SettingsIcon from '../../../assets/settings.svg';

const SettingsButton = () => {
  return (
    <button type="button" className="group">
      <img
        alt="he"
        src={SettingsIcon}
        height="30"
        width="30"
        className="transition-transform duration-700 valid:rotate-90 group-hover:rotate-90 group-focus:rotate-90"
      />
    </button>
  );
};

export default SettingsButton;
