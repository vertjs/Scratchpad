import {NOTE_TYPE_DRAFT, NOTE_TYPE_SAVE} from './actionTypes';

export const addNoteDraft = () => ({
    type: NOTE_TYPE_DRAFT
})
export const addNoteSave = () => ({
    type: NOTE_TYPE_SAVE
})