
import './view.css'
import Searchbar from '../../components/searchbar';
import Quilt from '../../components/quilt';
import {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../contexts/usercontext'; 
import {useNavigate} from 'react-router-dom';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img17, img14, img15, img16, img18, img19} from "../../components/imageStore.js"

const View = () =>{
    const captionplaceholder = "This is a caption of the image directly above describing personal significance and relation to the tags the culture quilt is meant ot embody. Captions must be below 250 words";
    const data = [{"id":"1", "image":[img1,img2,img3], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"2", "image":[img15,img16,img17], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"3", "image":[img19,img1,img9], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"4", "image":[img1,img2,img3], "tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"5", "image":[img1,img2,img3], "tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}
    ,{"id":"6", "image":[img4,img5,img6], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"7", "image":[img10,img11,img14], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"8", "image":[img18,img2,img10], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"9", "image":[img1,img2,img3], "tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"10", "image":[img1,img2,img3], "tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}
    ,{"id":"11", "image":[img7,img8], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"12", "image":[img12,img18,img19], "tags":["Home,Work","Holidays","Community"],"caption":captionplaceholder},{"id":"13", "image":[img17,img11,img4], "tags":["Home,Work","Work,Family","Community,Travel"],"caption":captionplaceholder},{"id":"14", "image":[img1,img2,img3],"tags":["Holiday,Travel","Work","Volunteering"],"caption":captionplaceholder},{"id":"15", "image":[img1,img2,img3],"tags":["Volunteering,Recreation","Home,Hobbies",""],"caption":captionplaceholder}]

    const Navigate = useNavigate();

    const [field, setField] = useState('');
    const [userSubmissions,setUserSubmissions] = useState(data)
    const [visibleSubmissions,setVisibleSubmissions] = useState([userSubmissions])
    const {isAuthenticated} = useContext(UserContext);
    let LoggedIn = isAuthenticated;


    // useEffect(() => {setUserSubmissions(data)},[])

    // useEffect(() => {
    // const updateSubmissions = userSubmissions;
    // updateSubmissions.forEach(submission => {
    //     const newTags = submission["tags"].filter((item) =>{ return item.toLocaleLowerCase().includes(field)});
    //     console.log(updateSubmissions);
    //     updateSubmissions[submission].tags = newTags;
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
        const tempuserSubmissions = [...userSubmissions];
        const updateSubmissions = userSubmissions.map((submission) =>{
            const removeImage0 =  typeof submission.tags[0] !== 'undefined' && !(submission.tags[0].toLocaleLowerCase().includes(field));
            const removeImage1 = typeof submission.tags[1] !== 'undefined' && !(submission.tags[1].toLocaleLowerCase().includes(field));
            const removeImage2 = typeof submission.tags[2] !== 'undefined' && !(submission.tags[2].toLocaleLowerCase().includes(field));
            if (removeImage0) {
                submission.image.splice(0,1); 
            }
            if (removeImage1) {
                submission.image.splice(1,1); 
            }
            if (removeImage2) {
                submission.image.splice(2,1); 
            }
        
            return submission;
            })

      

          setVisibleSubmissions(updateSubmissions);
        }, [field,userSubmissions]
        );


    const onSearchModify = (event) => {
    const fieldData = event.target.value.toLocaleLowerCase();
    setField(fieldData);
    };

    // if(!isAuthenticated){
    //     // Navigate("/culture-quilt");
    // }
    // else{
    return (

            <div className="App">
            <Searchbar fieldChangeHandler = {onSearchModify}/>
            <Quilt squareList = {visibleSubmissions} />
            </div>
    );
//}
};

export default View;