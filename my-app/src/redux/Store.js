import {createStore} from "redux"
import reducer from "./UserReducer"

export const store = createStore(
    reducer,{}
)