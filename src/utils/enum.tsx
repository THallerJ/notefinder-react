export enum NoteTypeEnum {
  SHARP,
  FLAT,
  BOTH,
}

export enum GuitarStringEnum {
  LOW_E = 'lowE',
  A = 'a',
  D = 'd',
  G = 'g',
  B = 'b',
  HIGH_E = 'highE',
}

export enum NoteEnum {
  A,
  A_SHARP,
  B,
  C,
  C_SHARP,
  D,
  D_SHARP,
  E,
  F,
  F_SHARP,
  G,
  G_SHARP,
}

export const guitarStringToNote = (str: GuitarStringEnum): NoteEnum => {
  switch (str) {
    case GuitarStringEnum.LOW_E:
    case GuitarStringEnum.HIGH_E:
      return NoteEnum.E;
    case GuitarStringEnum.A:
      return NoteEnum.A;
    case GuitarStringEnum.D:
      return NoteEnum.D;
    case GuitarStringEnum.G:
      return NoteEnum.G;
    case GuitarStringEnum.B:
      return NoteEnum.B;
    default:
      throw new TypeError('str is not GuitarStringEnum');
  }
};
