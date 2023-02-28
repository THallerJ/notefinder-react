import { NoteEnum } from "./enum";

const list: NoteEnum[] = [];
for (let i = 0; i < 12; i++) {
	list.push(i as NoteEnum);
}

export const iterateScale = (start: NoteEnum, intervals: number): NoteEnum => {
	return list[(start + intervals) % list.length] as NoteEnum;
};
