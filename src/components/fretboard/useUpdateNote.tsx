import { select } from "d3";
import { useEffect, useCallback } from "react";
import useGetNoteCoordinates from "./useGetNoteCoordinates";

const useUpdateNote = () => {
	const drawnNoteId = "drawnNote";
	const [cx, cy] = useGetNoteCoordinates();

	const drawNote = useCallback((cx: number, cy: number): void => {
		select("svg")
			.append("g")
			.attr("transform", "rotate(179,196.84328,192.51967)")
			.append("circle")
			.attr("id", drawnNoteId)
			.attr("r", 1.25)
			.attr("cx", cx)
			.attr("cy", cy)
			.attr("fill", "cyan");
	}, []);

	const update = useCallback(
		(cx: number, cy: number): void => {
			const elem = select("#" + drawnNoteId);

			if (!elem.empty()) {
				elem.attr("cx", cx).attr("cy", cy);
			} else {
				drawNote(cx, cy);
			}
		},
		[drawNote]
	);

	useEffect(() => {
		update(cx, cy);
	}, [cx, cy, update]);
};

export default useUpdateNote;
