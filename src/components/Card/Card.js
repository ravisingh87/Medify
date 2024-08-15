import React from "react";
import { CardContainerDiv, CardSpan, CardWrapperDiv } from "./CardStyle";

const Card = ({ proflePic, type, date, descripton, docImg, docName }) => {
  return (
    <CardContainerDiv>
      <img src={proflePic} alt='Random Image' />
      <CardWrapperDiv>
        <div className='date_title'>
          {type} <CardSpan /> {date}
        </div>
        <div className='details'>{descripton}</div>
        <div className='recomendation'>
          <img src={docImg} alt='Random Image' />
          <p>{docName}</p>
        </div>
      </CardWrapperDiv>
    </CardContainerDiv>
  );
};

export default Card;
