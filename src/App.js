import React, { useState, useEffect } from 'react';
import Imgcard from "./components/imgCard";
import './App.css';
import Myfooter from "./components/footer";
import Mynavbar from "./components/navbar";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function App() {
  const appStyle = {
    height : "130px",
 
    backgroundColor: '#335120' // Replace with your desired background color
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const apiKey = '37738753-2a5887c899fba11848e25f474';

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchTerm)}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchImages();
    } else {
      setImages([]);
    }
  }, [searchTerm, apiKey]);

  return (
    <>
      <Mynavbar />
      
        <div className="custom-bg " style={appStyle}>
          <h1 className="mt-4 mb-4 text-center fonts">Image Search</h1>
          <div className="d-flex justify-content-center">
            <div
              className="input-group mb-3 custom-search-bar"
              style={{ width: "60%" }}
            >
              <input
                type="text"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Image"
              />
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="container">
          <h1 className="mt-4 mb-4"></h1>
          {images.length === 0 ? (
            <p className="mt-4 mb-4 text-center">No data found</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-3">
              {images.map((image) => (
                <div className="col mb-4" key={image.id}>
                  <Imgcard image={image} />
                </div>
              ))}
            </div>
          )}
        </div>
    
    </>
  );
}

export default App;
