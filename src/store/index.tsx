// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


// 툴킷사용 코드
const initialUrlState = {url : '초기', showType : false }
const initialAuthState = {checked : false }

//유튜브 url 관련 slice
const urlSilce = createSlice({
    name : 'url',
    initialState : initialUrlState,
    reducers : {
        change(state, action) {
            state.url = action.payload;
            state.showType = !state.showType;
        },
        reset(state) {
            state.url = state.url;
            state.showType = !state.showType;
        },
    }
});

//auth 불리언 slice
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
        storeUrl : urlSilce.reducer,
        storeAuth : authSlice.reducer
    }
});


export const urlActions = urlSilce.actions;
export const authActions = authSlice.actions;
export default store;



// ===========================================
//툴킷 사용 전 
// const initialUrlState = {url : '초기', showType : false }
// const urlReducer = (state = initialState, action) => {
//     if (action.type === 'change')
//     {
//         return{
//             url : action.addUrl,
//             showType : !state.showType,
//         }
//     }
 
//     if (action.type === 'reset')
//     {
//         return {
//             url : state.url,
//             showType : !state.showType,
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