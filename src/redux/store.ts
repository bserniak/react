import reducer from "./reducers";
import * as Models from "../definitions/definitions";
import {
    createStore, applyMiddleware, compose, Store,
} from "redux";
import thunk from "redux-thunk";

const enhancedCompose = ((window || {}) as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeFactory = () => createStore(reducer, enhancedCompose(applyMiddleware(thunk)));
const store: Store<Models.TrailAppState> = storeFactory();

export default store;
