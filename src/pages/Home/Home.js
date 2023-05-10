import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../Store/Slices/imageSlices";
import { Cards } from "../../components/Cards/Card";
function Home() {
  const [selectedImage, setSelectedImage] = useState('');
  
  const dispatch = useDispatch();
  const imageData=useSelector((state)=>state.images)
  const time = new Date();
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // It wile create a constructor which help to read the selected file.
    const reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
      }
      // It loads the reader and updated to state.
    reader.onload = () => {
      setSelectedImage(
      reader.result
    );
    }
  };

  useEffect(()=>{
     dispatch(addImages({selectedImage,time:time.toLocaleTimeString()}))
     //data will be store to the loal storage whenever state get changed.
     localStorage.setItem("data",JSON.stringify(imageData))
  },[selectedImage])
 
  return (
    <>
      <input type="file" onChange={handleImageChange}/>
       <Cards/>
    </>
  );
}

export default Home;
