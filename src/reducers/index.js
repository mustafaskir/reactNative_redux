import {combineReducers} from 'redux'

import LibraryReducer from './LibraryReducer';
import SelectionReducer from './selectionReducer'

export default combineReducers({
    librariers: LibraryReducer,
    selectedLibrary:SelectionReducer
});