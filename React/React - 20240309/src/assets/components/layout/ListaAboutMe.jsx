import React from 'react';

function ListaAboutMe(props) {


  return (
    <>
      <div className='container-aboutme'>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default ListaAboutMe;
