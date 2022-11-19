import { createStore, combineReducers } from "redux";
import Reducers from "./Reducers";

export const store = createStore(combineReducers(Reducers));