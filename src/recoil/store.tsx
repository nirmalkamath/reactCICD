import { atom } from 'recoil';

export const bearCountState = atom<number>({
  key: 'bearCountState', // Unique key
  default: 0,            // Initial value
});
