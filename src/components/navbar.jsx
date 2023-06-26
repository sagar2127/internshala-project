import React from 'react';
import '../App.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  function Mynavbar() {
  return (
    <MDBNavbar bgColor='#335120 d-flex justify-content-center'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1 fonts'>Image Finder</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  );
}

export default Mynavbar;