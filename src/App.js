//import logo from './logo.svg';
import './App.css';
import View from './routes/view/view';
import Submit from './routes/submit/submit';
import Navigator from './routes/nav/nav';
import Review from './routes/review/review';
import { Fragment } from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home';
import Auth from './routes/auth/auth';
import Help from './routes/help/help';
import ImagePage  from './routes/imagePage/imagepage';
import MyQuilt from './routes/myQuilt/myquilt';
//import Square from './components/square';



function App() {
  return(
  <Fragment>
    <Routes>
    <Route path = "/culture-quilt" element = {<Home/>}/>
    <Route path = '/culture-quilt/auth' element = {<Auth/>}/>
      <Route path = '/' element = {<Navigator/>}> 
        <Route path = 'view' element = {<View/>}/>
        <Route path = 'review' element = {<Review/>}/>
        <Route path = 'myQuilt' element = {<MyQuilt/>}/>
        <Route path = 'submit' element = {<Submit/>}/>
        <Route path = 'help' element = {<Help/>}/>
        <Route path = 'help/auth' element = {<Auth/>}/>
        <Route path = 'view/imagepage' element = {<ImagePage/>}/>
      </Route>
    </Routes>
  </Fragment>
  );
};

export default App;
