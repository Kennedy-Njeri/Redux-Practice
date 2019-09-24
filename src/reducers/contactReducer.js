import {GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACT, UPDATE_CONTACT, GET_CONTACT} from "../actions/type";


const initialState = {
    contacts: [],
    //current contact being viewed
    contact: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)
            }
        case ADD_CONTACTS:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state
    }

}