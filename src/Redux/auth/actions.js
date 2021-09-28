import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE } from "./actionTypes"
const loginRequest =()=>{
    return {
        type:LOGIN_REQUEST
    }
}

const loginSuccess =(payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}

const loginFailure =(payload)=>{
    return {
        type:LOGIN_FAILURE,
        payload
    }
}

const loginUser=(payload)=>(dispatch)=>{

}
//---------------------------Register--------------------
const registerRequest =()=>{
    return {
        type:REGISTER_REQUEST
    }
}

const registerSuccess =(payload)=>{
    return {
        type:REGISTER_SUCCESS,
        payload
    }
}

const registerFailure =(payload)=>{
    return {
        type:REGISTER_FAILURE,
        payload
    }
}

 const registerUser=(payload)=>(dispatch)=>{

}

export {loginRequest,loginSuccess,loginFailure,loginUser,registerRequest,registerSuccess,registerFailure, registerUser}