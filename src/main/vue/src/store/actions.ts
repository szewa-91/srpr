export default {
  setCurrentSound: (context: any, sound: string) => {
    context.commit('SET_CURRENT_SOUND', sound);
  },
};
