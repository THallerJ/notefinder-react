import NoteButton from "./NoteButton";

const NoteButtonPanel = () => {
	type Note = { note: string | [string, string] };
	const notes: Note[] = [
		{ note: "C" },
		{ note: ["C#", "Db"] },
		{ note: "D" },
		{ note: ["D#", "Eb"] },
		{ note: "E" },
		{ note: "F" },
		{ note: ["F#", "Gb"] },
		{ note: "G" },
		{ note: ["G#", "Ab"] },
		{ note: "A" },
		{ note: ["A#", "Bb"] },
		{ note: "B" },
	];
	return (
		<div>
			{notes.map((note, i) => {
				const isAccidental: boolean = typeof note.note !== "string";

				const txt: string = isAccidental
					? `${note.note[0]}/${note.note[1]}`
					: (note.note as string);

				return (
					<NoteButton
						note={txt}
						accidental={isAccidental}
						leftRounded={i === 0 ? true : false}
						rightRounded={i === notes.length - 1 ? true : false}
						onClick={() => console.log("hello")}
					/>
				);
			})}
		</div>
	);
};

export default NoteButtonPanel;
