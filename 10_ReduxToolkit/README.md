# React redux toolkit

**Why do we need redux ?**<br>
Redux allows you to manage your app’s state in a single place and keep changes in your app more predictable and traceable.

**What Pain does redux solves**<br>
Redux is a global state
Redux is not necessary for every project.
You may need Redux if you don’t want to do props drilling (passing props too deep).
If you are still confused about Redux, just think about the React state. The only difference is you can access the state from anywhere

<img src="./src/redux tool kit workflow.png" alt="Alt text" title="Optional title">

**Step 1 – Install Redux and Redux Toolkit package in an react app** <br>
`npm install --save react-redux @reduxjs/toolkit`

**Step 2 – Create a global store** <br>
Create src/app/store.js –

```
import {configureStore} from '@reduxjs/toolkit'
import showData from '../features/showSlice'

export const store = configureStore({
    reducer:{}
});
```
configureStore accepts a single object rather that multiple function arguments.

**Step 3 – Providing store to complete react app** <br>
Go to src/main.jsx :

```
import {store} from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

```
**Step 4 – Now lets create a slice** <br>
A function that accepts an initial state, an object of reducer functions, and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state

```
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};

export const showSlice = createSlice({
    name: "showData",
    initialState,
    reducers : {
        showData : (state)=>{
            state.value = state.value;
        },
        increment : (state) => {
            state.value = state.value + 1;
        },
        incrementByValue : (state,action) =>{
            state.value = state.value + action.payload;
        }
    }
})

export const {showData , increment , incrementByValue} = showSlice.actions
export default showSlice.reducer;
```
**Step 5 – Add Slice Reducers to the Store** <br>

```
import {configureStore} from '@reduxjs/toolkit'
import showData from '../features/showSlice'

export const store = configureStore({
    reducer:{
        show : showData,
    }
});
```
**Step 6 – Implementing useSelector and useDispatch in React Components** <br>

```
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment , incrementByValue } from '../features/showSlice'

const SubChild_1 = () => {
  const data = useSelector((e)=>{
    // console.log(e.show.value)
    return e.show.value
  })  
  const dispatch = useDispatch()

  return (
    <>
      <div>SubChild_1 : {data}</div>
      <button onClick={()=>{dispatch(increment())}}> click me</button>
      <button onClick={()=>{dispatch(incrementByValue(10))}}> increase by value </button>
    </>
  );
}

export default SubChild_1
```
**Lets revise all the steps again –**

- Step 1 – Install the redux and react-redux package
- Step 2 – Create a store
- Step 3 – Providing store globally
- Step 4 – Creating slices (i.e reducers) , where all the major logics are performed
- Step 5 – Receiving action from UI (using useDispatch hook) and receiving data from global store to fronted (using useSelector hook).