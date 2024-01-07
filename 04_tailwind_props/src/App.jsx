import './App.css'
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className='bg-slate-800 p-4 rounded-xl mb-4'>
        Tailwindcss and Props
      </h1>
      <div className='flex gap-4'>
        <Card username="girl 1" btnText="visit me" />
        <Card username="girl 2" btnText="click me"/>
      </div>
    </>
  );
}

export default App
