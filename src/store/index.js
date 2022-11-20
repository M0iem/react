import {combineReducers,createStore} from 'redux';


const counterReducer=(state={count:0},action)=>{
    switch (action.type){
        case 'UP':
            return {count:state.count+1}
        case 'DOWN':
            return {count:state.count-1}
         
        case 'ADD':
            return {count:state.count+action.pyload}
         
        case 'DD':
            return {count:state.count+action.pyload}

        default :

           return state    
    
        }
}
const userReducer=(state={name:"ali baba"},action)=>{
    switch (action.type){
        case 'update':
            return {name:state.name=action.pyload}

            default :

            return state  
    }
}
const loginReducer=(state={username:"mari",password:"1245",isLogin:false},action)=>{
    switch (action.type){
      case "LOGIN":
        return {isLogin :true}
      case "LOGOUT":
        return {isLogin:false}

        default:
            return state
    }

}

const allReducer =combineReducers({
    counter:counterReducer,
    user:userReducer,
    loginUser:loginReducer
 })
//  const rootReducer=combineReducers({
//      counter:counterReducer,
//      user:userReducer,
     
//  })
// const store= createStore(rootReducer)

const store= createStore(allReducer)

export default store