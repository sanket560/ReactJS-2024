1. first configure store bring it from reduxjs tool kit now export variable using this method `configurestore` ( its takes obj )

2. Next create reducers also it is called slices
    - next import `createSlice`
    - then create initial state 
    - then create slice and add obj in it first name , second initial state variable , third reducers
        - what comes in reducers ( it takes obj ) is property and function
        - property name `addTodo` and write function in it
        - this function returns 2 things `state, action`
        - `state` variable will give access to initial state like what is things are there.
        - `action` provides value for eg : `id` to remove todo
    - export functionality in variable which is under reducers from `todoSlice.actions`
    - and last export default `todoSlice.reducer`

3. Now come to store and import todoSlice as `todoReducer` 

4. now for adding value/data we need to dispatch it so `import useDispatch from react-dom` dispatch using reducers store the value in store

5. now for fetching data we need useSelector and import it