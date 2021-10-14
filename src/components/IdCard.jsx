import React from 'react';

export default function IdCard (props){

  return(
   <>
      <p>Full Name:{props.fullName}</p>
      <p>Gender:{props.gender}</p>
      <p>Birthdate:{props.birthday}</p>
     <img src={props.picture} alt={props.firstName}/>
      </>
    

  )
}
