import SettingsButton from './components/SettingsButton';
import Dropdown from '../forms/Dropdown';
import CreateNoteButtons from './components/CreateNoteButtons';
import SettingsContent from './components/SettingsContent';

const UserInput = () => {
  return (
    <form
      className="container mx-auto grid w-fit grid-cols-3 gap-1 md:flex
        md:w-full md:flex-row md:justify-center md:gap-0"
    >
      <CreateNoteButtons />
      <div className="ml-3 hidden self-end md:block">
        <Dropdown
          right
          button={<SettingsButton />}
          content={<SettingsContent />}
        />
      </div>
    </form>
  );
};

export default UserInput;
