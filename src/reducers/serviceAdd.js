import {NOTE_TYPE_DRAFT, NOTE_TYPE_SAVE} from '../actions/actionTypes';

const initialState = { id: "", text: "", mark: "", type: "" }

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case NOTE_TYPE_DRAFT:
            const {type} = state
            return {
                ...state,
                [type]: 'draft'
            };
        case NOTE_TYPE_SAVE: 
            return {
                ...state,
                [type]: 'save'
            };
        default:
            return state;
    }
}