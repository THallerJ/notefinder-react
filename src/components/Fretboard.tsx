import FretboardSvg from "../assets/fretboard.svg";

const Fretboard = () => {
	return (
		<div className="fretboard">
			<FretboardSvg />
		</div>
	);
};
//install d3
const findDotCoordinates = (
	fretNum: number,
	gtrString: string
): [number, number] => {
	return [0, 0];
};

export default Fretboard;
