import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
       <h1 className='text-center'>Wellcome To the React Redux Project </h1>

       <div style={{display:'flex'}} className="mt-5 text-center justify-content-center">
        <h3 className='btn btn-primary py-2'>Increment +</h3>
        <input type="text" name="" id="" value="0" className='form-control w-25'  />
        <h3 className='btn btn-danger py-2'>Decrement -</h3>
       </div>
    

    </div>
  );
}

export default App;
