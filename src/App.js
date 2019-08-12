import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gmaps from './components/Gmaps';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
       
        <div className='App-map'>
          <Gmaps/>
        </div>
        <div className="container p-4">
          <Route path="/" exact component={NoteList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
        </div>

      </Router>
    </div>
  );
}

export default App;
