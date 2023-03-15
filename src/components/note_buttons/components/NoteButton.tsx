type NoteButtonProps = {
  note: string;
  isNatural?: boolean;
  leftRounded?: boolean;
  rightRounded?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NoteButton = ({
  note,
  isNatural,
  leftRounded,
  rightRounded,
  onClick,
}: NoteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-20 rounded-sm bg-[#3c3c3c] py-4 font-medium text-white
       shadow active:bg-black md:w-24 md:rounded-none md:font-bold
			${leftRounded && 'md:rounded-l-xl'}
			${rightRounded && 'md:rounded-r-xl'}
			${
        isNatural
          ? 'md:bg-white md:text-black md:hover:bg-gray-300'
          : 'md:bg-black md:text-white md:hover:bg-[#080808]'
      }
			`}
    >
      {note}
    </button>
  );
};

export default NoteButton;
