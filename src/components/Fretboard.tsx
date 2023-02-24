import { useEffect } from "react";
import { select } from "d3";
import FretboardSvg from "../assets/fretboard.svg";
import { GuitarString } from "../Enum";
// TODO: Change function from returning arrays to returning objects with x: any y: for better readability
const Fretboard = () => {
	const drawnNoteId: string = "drawnNote";

	useEffect(() => {
		const coordinates = getNoteCoordinates(3, GuitarString.G);
		updateNote(coordinates[0], coordinates[1]);
	}, []); // update when note changes

	const getCoordinates = (id: string): DOMRect => {
		return (select(id).node() as SVGGraphicsElement).getBBox();
	};

	const getNoteCoordinates = (
		fret: number,
		gtrStr: GuitarString
	): [number, number] => {
		const f = getCoordinates(`#fret${fret}`);
		const prevF = getCoordinates(`#fret${fret - 1}`);
		const s = getCoordinates(gtrStr);

		const x = (f.x + prevF.x) / 2;
		const ratio = (x - s.x) / s.width;
		const y = s.y + s.height * ratio - ratio * 0.6;

		return [x, y];
	};

	const drawNote = (x: number, y: number): void => {
		select("svg")
			.append("g")
			.attr("id", drawnNoteId)
			.attr("transform", "rotate(179,196.84328,192.51967)")
			.append("circle")
			.attr("r", 1.25)
			.attr("cx", x)
			.attr("cy", y)
			.attr("fill", "cyan");
	};

	const updateNote = (x: number, y: number): void => {
		const elem = select("#" + drawnNoteId);

		//	LOOK UP HOW TO USE DATA TO UPDTE CIRCLE> THEN I JUST UPDDATE DATA AND NOTE MOVES
		if (!elem.empty()) {
			elem.remove();
			drawNote(x, y);
		} else {
			drawNote(x, y);
		}
	};

	// function should handle changing note color to red or green to indicate correct/incorrect
	const getFeedback = () => {};

	return (
		<div
			className="fretboard"
			onClick={() => {
				updateNote(278.3031921386719, 385.0916963281356);
			}}
		>
			<FretboardSvg />
		</div>
	);
};

export default Fretboard;
