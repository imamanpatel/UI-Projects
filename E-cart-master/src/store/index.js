import {createStore} from "redux";
import reducer from "../reducers/index";
const initialState = {message:"Hello from redux"};
export const store = createStore(reducer,initialState);
