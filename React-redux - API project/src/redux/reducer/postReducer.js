
import { FETCH_POSTS_FAILURE , FETCH_POSTS_REQUEST , FETCH_POSTS_SUCCESS , SEARCH_POST_FAILURE , SEARCH_POST_SUCCESS ,SEARCH_POST_REQUEST } from "../actions/postActionTypes";


// initial state

const initialState ={
    loading: false,
    error:"",
    posts: [],
    post : {},
};

export const postsReducer = (state = initialState , action) =>{
    switch (action.type){
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading :true,
            };
        
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                posts:action.paylaod,
                loading:false,
            }
            
        case FETCH_POSTS_FAILURE:
            return{
                ...state,
                posts:[],
                error:action.paylaod,
                laoding:false
            }

        case SEARCH_POST_REQUEST:
            return {
                ...state,
                loading:true,
            }
            
        case SEARCH_POST_SUCCESS:
            return{
                ...state,
                posts:[action.paylaod],
                laoding:false,
            }
                
        case SEARCH_POST_FAILURE:
            return{
                ...state,
                posts:[],
                error:action.paylaod,
                laoding:false
            }
    

            default :
                return state ;
    }  
}; 
        

