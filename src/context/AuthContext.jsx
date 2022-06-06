import React, { createContext, useReducer } from "react";
let initialState={
  isAuth:false,
  token:null
}
const reducer=(state,action)=>{
    switch(action.type){
      case "login":
         return {...state,isAuth:true,token:"yes"}
      case "logout":
          return {...state,isAuth:false,token:null}
      default :
        return state; 
        }
}
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState)

  return (<AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>);
};
