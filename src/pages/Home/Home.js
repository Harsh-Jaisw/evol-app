import React from "react";
import { useDispatch } from "react-redux";
import { addImages } from "../../Store/Slices/imageSlices";
import { Cards } from "../../components/Cards/Card";
import Header from "../../components/Navbar/Navbar";

function Home() {


  return (
    <div className="home">
      

      <Cards />
    </div>
  );
}

export default Home;
