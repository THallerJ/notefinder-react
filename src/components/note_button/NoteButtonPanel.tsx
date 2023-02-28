import NoteButton from "./NoteButton";
import useAppDispatch from "../../hooks/useAppDispatch";
import { checkAnswer } from "../../redux/guitarSlice";
import { NoteEnum } from "../../utils/enum";

const NoteButtonPanel = () => {
	const dispatch = useAppDispatch();

	type Note = { txt: [string, string?]; enum: NoteEnum };
	const notes: Note[] = [
		{ txt: ["C"], enum: NoteEnum.C },
		{ txt: ["C#", "Db"], enum: NoteEnum.C_SHARP },
		{ txt: ["D"], enum: NoteEnum.D },
		{ txt: ["D#", "Eb"], enum: NoteEnum.D_SHARP },
		{ txt: ["E"], enum: NoteEnum.E },
		{ txt: ["F"], enum: NoteEnum.F },
		{ txt: ["F#", "Gb"], enum: NoteEnum.F_SHARP },
		{ txt: ["G"], enum: NoteEnum.G },
		{ txt: ["G#", "Ab"], enum: NoteEnum.G_SHARP },
		{ txt: ["A"], enum: NoteEnum.A },
		{ txt: ["A#", "Bb"], enum: NoteEnum.A_SHARP },
		{ txt: ["B"], enum: NoteEnum.B },
	];

	const getButtonText = (notes: Note) => {
		if (notes.txt.length === 1) return notes.txt[0];
		return `${notes.txt[0]}/${notes.txt[1]}`;
	};
	return (
		<div>
			{notes.map((note, i) => {
				const txt = getButtonText(note);
				return (
					<NoteButton
						key={txt}
						note={txt}
						accidental={note.txt.length > 1}
						leftRounded={i === 0 ? true : false}
						rightRounded={i === notes.length - 1 ? true : false}
						onClick={() => dispatch(checkAnswer(note.enum))}
					/>
				);
			})}
		</div>
	);
};

export default NoteButtonPanel;
