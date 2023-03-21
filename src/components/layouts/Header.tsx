import { ReactComponent as GithubSvg } from '../../assets/github.svg';
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

type HeaderProps = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setShowSidebar }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-black py-1 px-4 md:py-2 md:px-4">
      <div className="flex flex-row items-center space-x-3">
        <button
          type="button"
          onClick={() => setShowSidebar((prevState) => !prevState)}
          className="md:hidden"
        >
          <MenuSvg className="w-6" />
        </button>
        <h1 className=" items-center text-sm font-medium tracking-wide text-white md:text-lg">
          NoteFinder
        </h1>
      </div>
      <a
        href="https://github.com/THallerJ/notefinder-react"
        target="_blank"
        rel="noreferrer"
      >
        <GithubSvg className="inline-block w-8 align-middle md:w-10" />
      </a>
    </header>
  );
};

export default Header;
