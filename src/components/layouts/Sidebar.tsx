import ToggleStringsSetting from '../settings/ToggleStringsSetting';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import AccidentalSetting from '../settings/AccidentalSetting';
import ButtonSortSetting from '../settings/ButtonSortSetting';
import HandednessSetting from '../settings/HandednessSetting';

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  return (
    <div>
      <div
        role="presentation"
        onClick={() => setShowSidebar((prevState) => !prevState)}
        className={`absolute right-0 top-0 z-0 min-h-full w-full bg-black/50 md:hidden 
        ${!showSidebar && 'hidden'}`}
      />
      <div
        className={`absolute top-0 z-50 flex max-h-screen min-h-full w-[16rem] flex-col
         space-y-4 overflow-scroll bg-[#3c3c3c] p-4 pt-2 transition-transform md:hidden
          ${!showSidebar && 'translate-x-[-16rem]'}`}
      >
        <button
          type="button"
          className="absolute right-3 top-3"
          onClick={() => setShowSidebar((prevState) => !prevState)}
        >
          <CloseSvg className="w-6" />
        </button>

        <ToggleStringsSetting id="sidebar" showTitle />
        <AccidentalSetting id="sidebar" showTitle />
        <ButtonSortSetting id="sidebar" showTitle />
        <HandednessSetting id="sidebar" showTitle />
      </div>
    </div>
  );
};
export default Sidebar;
