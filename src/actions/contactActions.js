import {GET_CONTACTS, DELETE_CONTACT, ADD_CONTACTS} from "./type";
import axios from 'axios'

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch ({
        type: GET_CONTACTS,
        payload: res.data
    })
}


export const deleteContact = id => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}


export const addContacts = (contact) => {
    return {
        type: ADD_CONTACTS,
        payload: contact
    }
}