const INITIAL_STATE = {
  data: ["Reactjs", "React Native", "NodeJs"]
};

export default function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSES":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}
