
const {createStore , combineReducers} = require ("redux");

// initial state 

const initialState = {
    posts : [],
}

const userInitialState = {
    users : [],
}

// action 

const addPost = (post) => {
  return {
    type : "ADD_POST",
    payload : post,
  }
}

const addUser = (user) => {
  return {
    type : "ADD_USER",
    payload : user,
  }
}

const deletePost = (id) => {
  return {
    type : "DELETE_POST",
    id,
  }
}
// reducer 

const postReducer = (state = initialState , action)=>{
    if(action.type === "ADD_POST"){
        return{
            posts:[...state.posts,action.payload],
        }
    }
    else if(action.type === "DELETE_POST"){
        return{
            posts:state.posts.filter(post => {
                return post.id !== action.id;
            }),
        };
    }
    else{
        return state;
    }
}

const userReducer = (state = userInitialState , action)=>{
    if(action.type === "ADD_USER"){
        return{
            users:[...state.users,action.payload],
        }
    }
    else{
        return state;
    }
}

// root reducer  
const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
})
// store 

const store = createStore(rootReducer);

// subscribe 
store.subscribe(()=>{
    const data = store.getState();
    console.log(data.posts);
    console.log(data.users);
})

// dispatch 

store.dispatch(addPost({
    id:1,
    title:"project 1",
}));
store.dispatch(addPost({
    id:2,
    title:"project 2",
}));

store.dispatch(deletePost(1));

store.dispatch(addUser({
    name:"pratham",
    email:"pratham@gmial.com",
}))