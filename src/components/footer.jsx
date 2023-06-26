import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Myfooter() {


  return (
    <MDBFooter >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Sagar Singh Mehta
      </div>
    </MDBFooter>
  );
}

export default Myfooter;
