const { createStore } = require('redux')
// Initial state 


const initialState = {
    count: 0,
}


// action creators 

const incrementAction = () => {
    return {
        type: "INCREMENT",
    }
}
const decrementAction = () => {
    return {
        type: "DECREMENT",
    }
}
const resetAction = () => {
    return {
        type: "RESET",
    }
}
const increasebyAmtAction = (anyAmount) => {
    return {
        type: "INCREASE_BY_AMT",
        payload: anyAmount,
    }
}

// reducer 

const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1,
        }
    }
    else if (action.type === "DECREMENT") {
        return {
            count: state.count - 1,
        }
    }
    else if (action.type === "INCREASE_BY_AMT") {
        return {
            count: state.count + action.payload,
        }
    }
    else if (action.type === "RESET") {
        return {
            count: 0,
        }
    }
}


// store 

const store = createStore(counterReducer);

store.subscribe(() => {
    const stateData = store.getState();
    console.log(stateData);
})

// dispatch 
store.dispatch(incrementAction());

store.dispatch(decrementAction());

store.dispatch(resetAction());

store.dispatch(increasebyAmtAction(10));

  



