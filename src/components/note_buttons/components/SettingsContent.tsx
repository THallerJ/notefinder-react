import AccidentalSetting from '../../settings/AccidentalSetting';
import ButtonSortSetting from '../../settings/ButtonSortSetting';

const SettingsContent = () => {
  return (
    <div className="last: flex flex-row space-x-5">
      <AccidentalSetting id="noteButton" showTitle />
      <div className="border-r-[1px] border-[#1c1c1e]" />
      <ButtonSortSetting id="noteButton" showTitle />
    </div>
  );
};

export default SettingsContent;
