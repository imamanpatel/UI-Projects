export default function reducer(state,action){
  console.log(action);
  switch (action.type){
      case "CHANGE_MESSAGE":
        return {
            ...state,
            message:action.payload.message
        };
      default:
      return state;
  }
}
