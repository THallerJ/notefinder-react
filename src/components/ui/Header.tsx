import GithubSvg from '../../assets/github-mark-white.svg';

const Header = () => {
  return (
    <header className="mb-8 flex justify-between bg-black px-8 pt-4 pb-3">
      <h1 className="text-lg text-white">NoteFinder</h1>
      <a
        href="https://github.com/THallerJ/notefinder-react"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={GithubSvg}
          width="35"
          height="35"
          alt="link to github repository"
        />
      </a>
    </header>
  );
};

export default Header;
