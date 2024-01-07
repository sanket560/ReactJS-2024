## useEffect
- The `useEffect` Hook allows you to perform side effects in your components.
- `useEffect` accepts two arguments. The second argument is optional.
- `useEffect(<function>, <dependency>)`

- so here in our code
  - `useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
`
  > - firstly its taking function which is passwordGenerator() which will run and 2nd one is dependency , dependency is nothing but it see which variable are dependent on that function 

  > - **for eg :** when user slide length then there is an update in length variable or state so it runs `passwordGenerator()` function again same with other 

## useCallback

 - `useCallback` is like a special box that keeps a function safe. It helps React remember the function you give it.

 - In simple words, `useCallback` is a hook in React that helps you optimize the performance of your components by memoizing (remembering) a function and returning the same reference if the dependencies haven't changed.

 - In our code, `useCallback` is used to memoize the passwordGenerator function. The second parameter of `useCallback` is an array of dependencies. If any of these dependencies change, the function will be re-created; otherwise, it will return the previously memoized function.

- In our case, the dependencies are `[length, numberAllowed, charAllowed, setPassword]`. This means that if any of these values change, React will create a new passwordGenerator function. If none of these values change, React will reuse the existing function reference.

## useRef

- `useRef` is a tool in React that allows you to create a reference to a specific element in your JSX, making it easy to interact

- Think of `useRef` like a name tag for an element in your webpage. In your case, you've created a name tag called passwordRef and attached it to an input field.

- `const passwordRef = useRef(null);` where null is initial value

- Then, you attached this name tag to your password input field:

`<input ref={passwordRef} />`

- Now, whenever you want to interact with that input field in your code, you can use the passwordRef. It's like saying, "Hey, React, give me that input field with the name tag passwordRef."

- `passwordRef.current?.select();`  // Select the text in the input field
  
- `window.navigator.clipboard.writeText(password);`  // Copy the selected text to the clipboard

- Here, you're using passwordRef.current to refer to the actual input field, and then you're doing some actions with it (selecting text and copying to the clipboard).

- In short, useRef gives you a way to easily reference and manipulate specific elements in your code, and in your case, it's used to work with the password input field.