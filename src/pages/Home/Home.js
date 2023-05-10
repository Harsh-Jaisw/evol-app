import React from "react";
import { useDispatch } from "react-redux";
import { addImages } from "../../Store/Slices/imageSlices";
import { Cards } from "../../components/Cards/Card";
import Header from "../../components/Navbar/Navbar";

function Home() {
  const dispatch = useDispatch();
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
      dispatch(
        addImages({ reader: reader.result, time: time.toLocaleTimeString(),like:0 })
      );
    };
  };

  return (
    <div className="home">
      
      <input type="file" onChange={handleImageChange} />
      <Cards />
    </div>
  );
}

export default Home;
