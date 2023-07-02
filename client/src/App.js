import logo from './logo.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch();

 useEffect(()=>{

  dispatch(fetchAllQuestions());
  dispatch(fetchAllUsers());

 }, [dispatch])


  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
    </div>
  );
}

export default App;
