import { createStore } from 'redux';

const initialState = {url : '초기', showUrl : false }


const urlReducer = (state = initialState, action) => {
    if (action.type === 'change')
    {
        return{
            url : action.addUrl,
            showUrl : true
        }
    }

    if (action.type === 'reset')
    {
        return {
            url : state.url,
            showUrl : action.showUrl
        }
    }

    return state;
}

const store = createStore(urlReducer);

export default store;


// ===========================================

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