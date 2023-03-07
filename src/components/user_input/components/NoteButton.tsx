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
      className={` w-24 py-4 font-bold shadow 
			${leftRounded ? 'rounded-l-xl' : ''}
			${rightRounded ? 'rounded-r-xl' : ''}
			${
        isNatural
          ? 'bg-white text-black hover:bg-gray-300'
          : 'bg-black text-white hover:bg-[#080808]'
      }
			`}
    >
      {note}
    </button>
  );
};

export default NoteButton;
