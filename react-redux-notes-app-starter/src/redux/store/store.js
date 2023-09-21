import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import noteReducer from '../reducer/noteReducer';

const store = createStore(noteReducer,composeWithDevTools()) 

// store 

export default store ;