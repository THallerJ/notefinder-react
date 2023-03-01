type NoteButtonProps = {
  note: string;
  accidental?: boolean;
  leftRounded?: boolean;
  rightRounded?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NoteButton = ({
  note,
  accidental,
  leftRounded,
  rightRounded,
  onClick,
}: NoteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` w-24 py-4 shadow font-bold 
			${leftRounded ? 'rounded-l-xl' : ''}
			${rightRounded ? 'rounded-r-xl' : ''}
			${
        accidental
          ? 'bg-black text-white hover:bg-gray-90'
          : 'bg-white text-black hover:bg-gray-300'
      }
			`}
    >
      {note}
    </button>
  );
};

export default NoteButton;
