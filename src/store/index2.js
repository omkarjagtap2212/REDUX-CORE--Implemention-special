import {configureStore, createSlice}  from "@reduxjs/toolkit"




const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state,action)=>{
            console.log(state,action)

        },
        dcrement:(state,action)=>{
            console.log(state,action)


        },
        add:(state,action)=>{
            console.log(state,action)


        },
        substract:(state,action)=>{
            console.log(state,action)
 

        },
     
    }
})








const CounterStore = configureStore({reducer:{
    counter:counterSlice.reducer

}})

export const  counterAction= counterSlice.actions
export default CounterStore