const {createStore , applyMiddleware} = require("redux");
const axios = require("axios");
const thunk = require('redux-thunk').default;

// custom middleware 



// initial state 

const initialState = {
    posts: [],
    error:"",
    loading: false,
}
// action 
const fetchPostReq = () =>{
    return {
        type : "FETCH_REQ",
    }
}
const fetchPostSuccess = (posts) =>{
    return {
        type : "FETCH_SUCCESS",
        payload : posts,
    }
}
const fetchPostFail = (err) =>{
    return {
        type : "FETCH_FAILED",
        payload:err,
    }
}


// action to make request 
const fetchPosts = () =>{
    return async dispatch =>{
        try{
            dispatch(fetchPostReq());
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch(fetchPostSuccess(data))
        }catch(error){
            dispatch(fetchPostFail(error.message))
        }
    }
}
// reducer 

const postsReducer = (state = initialState , action) =>{
    switch(action.type){
        case "FETCH_REQ":
            return {
                ...state,
                loading:true,
            };
        case "FETCH_SUCCESS":
            return{
                ...state,
                posts:action.payload,
                loading : false,
            }
        case "FETCH_FAILED":
            return{
                ...state,
                error:action.payload,
                loading : false,
            }
    }
}
// store 
const store = createStore(postsReducer,applyMiddleware(thunk));

// subscribe 
store.subscribe(()=>{
    const data = store.getState();
    console.log(data);
});

// dispatch 
store.dispatch(fetchPostReq());
store.dispatch(fetchPostSuccess());
store.dispatch(fetchPostFail());