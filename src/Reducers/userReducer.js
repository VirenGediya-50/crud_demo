const InitialState = {
    userList : [],
    editUser : {}
  }
  
const  userReducer = (state = InitialState, action) => {
switch (action.type) {
    case "ADD_USER" :
        const newList = state.userList;
        newList.push(action.payload);
        return {...state , userList : [...newList]};

    case "DELETE_USER" :
      let newUserList = state.userList;
      newUserList.splice(action.payload , 1);
      return {...state , userList : [...newUserList]};

    case "EDIT_USER" :
      return {...state , editUser: {...state.userList[action.payload]} };
    
    case "SAVE_EDIT_USER" :
      let users = state.userList;
      users.splice(action.id, 1, action.payload);
      return {...state , userList : [...users], editUser: {}};

    default:
        return state;
}

}

  export default userReducer;