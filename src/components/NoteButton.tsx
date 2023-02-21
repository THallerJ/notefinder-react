type NoteButtonProps = {
	note: string;
	accidental?: boolean;
	leftRounded?: boolean;
	rightRounded?: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NoteButton = (props: NoteButtonProps) => {
	return (
		<button
			onClick={props.onClick}
			className={` w-24 py-4 shadow font-bold 
			${props.leftRounded ? "rounded-l-xl" : ""}
			${props.rightRounded ? "rounded-r-xl" : ""}
			${
				props.accidental
					? "bg-black text-white hover:bg-gray-90"
					: "bg-white text-black hover:bg-gray-300"
			}
			`}
		>
			{props.note}
		</button>
	);
};

export default NoteButton;
