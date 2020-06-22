import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
