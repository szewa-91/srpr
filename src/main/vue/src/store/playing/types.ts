import { Sound } from '../categories/types';

export interface PlayingState {
  playing: boolean;
  sound?: Sound;
  audioObject?: HTMLAudioElement;
}
