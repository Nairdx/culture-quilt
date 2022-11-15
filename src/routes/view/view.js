
import './view.css'
import {cloneDeep } from "lodash"
import Searchbar from '../../components/searchbar';
import Quilt from '../../components/quilt';
import {useContext, useEffect, useRef, useState} from 'react';
import { UserContext } from '../../contexts/usercontext'; 
import {useNavigate} from 'react-router-dom';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img17, img14, img15, img16, img18, img19} from "../../components/imageStore.js"

const View = () =>{
    const captionplaceholder = "This is a caption of the image directly above describing personal significance and relation to the tags the culture quilt is meant ot embody. Captions must be below 250 words";
    const data = [{"id":"1", "image":[img1,img2,img3], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"2", "image":[img15,img16,img17], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"3", "image":[img19,img1,img9], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"4", "image":[img1,img2,img3], "tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"5", "image":[img1,img2,img3], "tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}
    ,{"id":"6", "image":[img4], "tags":["Home,Work"],"caption":captionplaceholder},{"id":"7", "image":[img10,img11,img14], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"8", "image":[img18,img2,img10], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"9", "image":[img1,img2,img3], "tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"10", "image":[img1,img2,img3], "tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}
    ,{"id":"11", "image":[img7,img8], "tags":["Home,Work","Home","Home"],"caption":captionplaceholder},{"id":"12", "image":[img12,img18,img19], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"13", "image":[img17,img11,img4], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"14", "image":[img1,img2,img3],"tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"15", "image":[img1,img2,img3],"tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}]

    const Navigate = useNavigate();
    const [field, setField] = useState('');
    const [checkval, setCheck] = useState('');
    const [userSubmissions,setUserSubmissions] = useState(data)
    const [visibleSubmissions,setVisibleSubmissions] = useState([userSubmissions])
    const {isAuthenticated} = useContext(UserContext);
    let LoggedIn = isAuthenticated;

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }


    // useEffect(() => {setUserSubmissions(data)},[])

    // useEffect(() => {
    // const updateSubmissions = userSubmissions;
    // updateSubmissions.forEach(submission => {
    //     const newTags = submission["tags"].filter((item) =>{ return item.toLocaleLowerCase().includes(field)});
    //     console.log(updateSubmissions);
    //     updateSubmissions[submission].tags = newTaggs;
    //     });
    // setVisibleSubmissions(updateSubmissions);
    // }, [field,userSubmissions]
    
    // );
    useEffect(() => {
        if (!LoggedIn || LoggedIn === undefined){
          Navigate("/submit")
        }
     },[LoggedIn]);


    useEffect(() => {
        const tempuserSubmissions = cloneDeep(userSubmissions);
        const updateSubmissions = tempuserSubmissions.map((submission) =>{
            // const removeImage0 =  typeof submission.tags[0] !== 'undefined' && !(submission.tags[0].toLocaleLowerCase().includes(field));
            // const removeImage1 = typeof submission.tags[1] !== 'undefined' && !(submission.tags[1].toLocaleLowerCase().includes(field));
            // const removeImage2 = typeof submission.tags[2] !== 'undefined' && !(submission.tags[2].toLocaleLowerCase().includes(field));
            // if (removeImage0) {
            //     submission.image.splice(0,1);
            //     submission.tags.splice(0,1); 
            // }
            // if (removeImage1) {
            //     submission.image.splice(1,1);
            //     submission.tags.splice(1,1); 
            // }
            // if (removeImage2) {
            //     submission.image.splice(2,1);
            //     submission.tags.splice(2,1); 
            // }
            let i = -1;
            submission["image"] = submission["image"].filter((item) => {i++; return typeof submission.tags[i] !== 'undefined' && (submission.tags[i].toLocaleLowerCase().includes(field))});

            return submission;
            })
        //   const filteredUpdate =updateSubmissions.filter((submission)=>{return submission["image"] != Array(0)});
        //   console.log(filteredUpdate);      
        for (var i = updateSubmissions.length; i--;) {
            if (updateSubmissions[i]["image"].length === 0) updateSubmissions.splice(i, 1);
          }
        
          setVisibleSubmissions(updateSubmissions);
        }, [field,userSubmissions,checkval]
        );

    useEffect(() => {
        setUserSubmissions(shuffle(userSubmissions));
        }, [userSubmissions]);


    const onSearchModify = (event) => {
    const fieldData = event.target.value.toLocaleLowerCase();
    setField(fieldData);
    };

    const onCheckModify = (event) =>{
    const checkData = event.target.value.toLocaleLowerCase();
    setCheck(checkData);
    };

    // if(!isAuthenticated){
    //     // Navigate("/culture-quilt");
    // }
    // else{
    return (

            <div className="App">
            <Searchbar fieldChangeHandler = {onSearchModify}/>
            {/* <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Home</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Family</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Work</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Travel</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Hobbies</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Holidays/Recreation</label>
            <input type="checkbox" id="Home" value="Home" onChange={onCheckModify}></input>
            <label for="Home">Community</label> */}

            <Quilt squareList = {visibleSubmissions} />
            </div>
    );
//}
};

export default View;