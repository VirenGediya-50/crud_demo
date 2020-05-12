import { ADD_USER, DELETE_USER, EDIT_USER, SAVE_EDIT_USER } from "./ActionType";


const addUser = (data) => {
    return  {
        type : ADD_USER,
        payload : data
    }
}

const deleteUser = (id) => {
    return  {
        type : DELETE_USER,
        payload : id
    }
}

const editUser = (id) => {
    return  {
        type : EDIT_USER,
        payload : id
    }
}

const saveEditUser = (id, data) => {
    return  {
        type : SAVE_EDIT_USER,
        payload : data,
        id : id
    }
}

export default {
    addUser,
    deleteUser,
    editUser,
    saveEditUser
}