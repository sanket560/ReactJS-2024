## Usage

The main component of the app is the `App` component, defined in `App.js`. It uses the `useState` hook to manage the state of the `counter` variable, which starts at 0. Two functions, `add` and `mins`, are defined to handle the increment and decrement operations, respectively. The counter value is displayed along with two buttons, "+" and "-", to perform the respective operations.

### Code Explanation

The `useState` hook is used to declare a state variable `counter` and its corresponding updater function `setCounter`. The `add` function increments the counter by 1 if the current value is less than or equal to 9, and the `mins` function decrements the counter by 1 if the current value is not equal to 0.

```javascript
function App() {
  let [counter, setCounter] = useState(0);

  const add = () => {
    if (counter <= 9) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const mins = () => {
    if (counter !== 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={add}>+</button>
      <br />
      <br />
      <button onClick={mins}>-</button>
    </>
  );
}

export default App; 
```