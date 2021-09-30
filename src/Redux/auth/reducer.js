import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE } from "./actionTypes";
import {loadData, saveData} from "../../utils/localStorage"

const token = loadData("token");

const initState ={
    isAuth:token?true:false,
    token: token||"",
    isLoading:false,
    isError:false
}
export const authReducer = (state = initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            saveData("token", payload.token);
            return{
                ...state,
                isAuth:true,
                token:payload.token,
                isLoading:false,
                isError:false
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isAuth:false,
                token:"",
                isLoading:false,
                isError:true
            }
        }
        case REGISTER_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case REGISTER_SUCCESS: {
            saveData("token", payload.token);
            return{
                ...state,
                isAuth:true,
                token:payload.token,
                isLoading:false,
                isError:false
            }
        }
        case REGISTER_FAILURE:{
            return{
                ...state,
                isAuth:false,
                token:"",
                isLoading:false,
                isError:true
            }
        }
        default:
            return state
    }
}