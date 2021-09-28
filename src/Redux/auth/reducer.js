import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE } from "./actionTypes";

const initState ={
    isLogin:false,
    token:"",
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
            return{
                ...state,
                isLogin:true,
                token:payload,
                isLoading:false,
                isError:false
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isLogin:false,
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
        case REGISTER_SUCCESS:{
            return{
                ...state,
                isREGISTER:true,
                token:payload,
                isLoading:false,
                isError:false
            }
        }
        case REGISTER_FAILURE:{
            return{
                ...state,
                isREGISTER:false,
                token:"",
                isLoading:false,
                isError:true
            }
        }
        default:
            return state
    }
}