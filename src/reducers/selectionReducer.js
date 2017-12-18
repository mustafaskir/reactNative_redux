import data from './LibraryList.json';

export default  (state = null,action) => {
    switch(action.type){
        case 'select_library':
            return action.payload
        break;    
    }
    return state;
}