import State from '@/store/state';

export default {
  SET_CURRENT_SOUND: (state: State, sound: string): void => {
    state.currentSound = sound;
  },
};
