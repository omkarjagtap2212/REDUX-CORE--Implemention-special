import { createStore } from "redux"


const INTTIAL_VALUE = {
    counter: 10,
    privacy:false,

    
}

const CounterReducer = (store = INTTIAL_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return { ...store,counter: store.counter + 1 }
    }
    else if (action.type === "DECREMENT") {
        return { ...store,counter: store.counter - 1 }

    }
    else if (action.type === "PRIVACY_TOGGLE") {
        return {...store, privacy:!store.privacy }

    }
    else if (action.type === "ADD") {
        return { ...store,counter: store.counter +Number(action.payload.num ) }

    }
    else if (action.type === "SUBTRACT") {
        return { ...store,counter: store.counter - Number(action.payload.num ) }

    }



    return store;

}






const CounterStore = createStore(CounterReducer)
export default CounterStore