export const PIANO_SMALL = 'small';
export const PIANO_MEDIUM = 'medium';
export const PIANO_LARGE = 'large';

export const PIANO_SIZE_MAP = {
  [PIANO_SMALL]: {
      blackKeys: 13,
      whiteKeys: 18,
  },
  [PIANO_MEDIUM]: {
      blackKeys: 20,
      whiteKeys: 29,
  },
  [PIANO_LARGE]: {
      blackKeys: 25,
      whiteKeys: 36,
  }
};

export default {
	PIANO_SMALL,
	PIANO_MEDIUM,
	PIANO_LARGE,
  PIANO_SIZE_MAP
};