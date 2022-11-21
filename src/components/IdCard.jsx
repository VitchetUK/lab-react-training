import React from 'react';

function IdCard(props) {
  return (
    <div>
      <p>LastName: {props.lastName}</p>
      <p>FirstName: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <picture>
        <img src={props.picture} alt="idPicture" />
      </picture>
    </div>
  );
}

export default IdCard;
