import { GetterTree } from 'vuex';
import { SoundState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SoundState, RootState> = {
    currentSound(state): any {
        const { sound } = state;
        return sound;
    },
    nowPlaying(state): boolean {
        const { playing } = state;
        return playing;
    },
};
