//import logo from './logo.svg';
import './App.css';
//import Square from './components/square';
import Searchbar from './components/searchbar';
import Quilt from './components/quilt';
import {useEffect, useState} from 'react';


function App() {
const data = [{"id":"1", "image":"test1", "tags":"Home,Work"},{"id":"2", "image":"test2", "tags":"Family,Work"},{"id":"3", "image":"test3", "tags":"Hobbies,Community"},{"id":"4", "image":"test4", "tags":"Home,Work"},{"id":"5", "image":"test5", "tags":"Volunteering,Recreation"}
,{"id":"6", "image":"test6", "tags":"Home,Work,Holidays"},{"id":"7", "image":"test7", "tags":"Home,Community"},{"id":"8", "image":"test8", "tags":"Travel,Family"},{"id":"9", "image":"test9", "tags":"Home,Work"},{"id":"10", "image":"test10", "tags":"Home,Work"}
,{"id":"11", "image":"test11", "tags":"Home,Work"},{"id":"12", "image":"test12", "tags":"Home,Work"},{"id":"13", "image":"test13", "tags":"Home,Work"},{"id":"14", "image":"test14","tags":"Holiday,Travel"},{"id":"15", "image":"test15","tags":"Hobbies,Volunteering"}]



const [field, setField] = useState('');
const [userSubmissions,setUserSubmissions] = useState(data)
const [visibleSubmissions,setVisibleSubmissions] = useState([userSubmissions])

//useEffect(() => {setUserSubmissions(data)},[])

useEffect(() => {
const updateSubmissions = userSubmissions.filter((submission) =>
  {return submission.tags.toLocaleLowerCase().includes(field)});
  setVisibleSubmissions(updateSubmissions);
}, [field,userSubmissions]
);


const onSearchModify = (event) => {
  const fieldData = event.target.value.toLocaleLowerCase();
  setField(fieldData);
};
  
return (
    <div className="App">
      <h1 className = "tc"> Culture Quilt</h1>
      <Searchbar fieldChangeHandler = {onSearchModify}/>
      <Quilt squareList = {visibleSubmissions} />
    </div>
  );
}

export default App;
