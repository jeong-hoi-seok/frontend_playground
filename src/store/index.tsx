// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { stat } from 'fs';


// 툴킷
const initialUrlState = {url : '초기', showUrl : false }
const initialAuthState = {checked : false }

const urlSilce = createSlice({
    name : 'url',
    initialState : initialUrlState,
    reducers : {
        change(state, action) {
            state.url = action.payload;
            state.showUrl = !state.showUrl;
        },
        reset(state) {
            state.url = state.url;
            state.showUrl = !state.showUrl;
        },
    }
});

const authSlice = createSlice({
    name : 'auth',
    initialState : initialAuthState,
    reducers : {
        login(state) {
            state.checked = true;
        },
        logout(state) {
            state.checked = false;
        },
        testToggle(state)
        {
            state.checked = !state.checked;
        }
    }
})


const store = configureStore({
    reducer : {
        url : urlSilce.reducer,
        auth : authSlice.reducer
    }
});


export const urlActions = urlSilce.actions;
export const authActions = authSlice.actions;
export default store;



// ===========================================
//툴킷 사용 전 

// const urlReducer = (state = initialState, action) => {
//     if (action.type === 'change')
//     {
//         return{
//             url : action.addUrl,
//             showUrl : !state.showUrl,
//         }
//     }
 
//     if (action.type === 'reset')
//     {
//         return {
//             url : state.url,
//             showUrl : !state.showUrl,
//         }
//     }

//     return state;
// }





// =====================================================================
// react환경 아닌 곳에서 
// const redux = require('redux');


// const counterReducer = (state = { url : ''}, action) => {
//     if (action.type === 'test')
//     {
//         return {
//             url : state,
//         };
//     }
// };

// const store = redux.createStore(counterReducer);

// const counterSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber); // 메소드는 함수를 받아 변경될 때 마다 실행

// store.dispatch({type : 'test'})