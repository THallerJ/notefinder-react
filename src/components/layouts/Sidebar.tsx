import ToggleStringContent from '../settings/ToggleStringContent';
import SettingsContent from '../settings/SettingsContent';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

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
        className={`absolute right-0 top-0 min-h-screen w-full bg-black/50 md:hidden ${
          !showSidebar && 'hidden'
        }`}
      />
      <div
        className={`absolute top-0 flex min-h-screen w-[16rem] flex-col space-y-4 
      bg-[#3c3c3c] p-4 pt-10 transition-transform md:hidden
      ${!showSidebar && 'translate-x-[-16rem]'}`}
      >
        <button
          type="button"
          className="absolute right-3 top-3"
          onClick={() => setShowSidebar((prevState) => !prevState)}
        >
          <CloseSvg className="w-6" />
        </button>
        <span className="text-base font-medium text-[#d1d1d1]">
          Toggle Strings
        </span>
        <div className=" my-2 w-36 border-t border-[#d1d1d1]" />
        <ToggleStringContent id="sidebar" />
        <SettingsContent id="sidebar" />
      </div>
    </div>
  );
};
export default Sidebar;
