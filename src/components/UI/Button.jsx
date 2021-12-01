import React from "react";
import { Button } from "react-bootstrap";
import Styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";

const Styles = Styled.div`
font-family : font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
width:100%;


.download{
    background: linear-gradient(93.01deg, #290321 4.59%, #EC0000 93.43%);
border-radius: 63.7222px;
border:none;
font-size:   11.95px;
padding: 2% 3% 2% 3%;

}



.view{
    border-radius: 63.7222px;
    border: 1px solid #3F0A06;
    padding: 2% 3% 2% 3%;
  font-size:   11.95px;
  margin-left : 15px;
  outline:0 !important;
  background:transparent;


    
}


/* .view:hover{
  background: linear-gradient(93.01deg, #290321 4.59%, #EC0000 93.43%);
  border: none ;
}


.download:hover{
  background: transparent;
  border: 1px solid #EC0000 ;


} */

 .view:focus, .download:focus {
  outline: none;
  box-shadow: none;
}



@media only screen and (max-width: 976px) {
  margin-bottom: 5%;
  display:flex;
  align-items:strech;
  justify-content:center;
flex-direction: column;


.view ,.download {
  padding: 2%;
  margin-left : 0px;
margin-top: 2%
}


}

`;

const Buttons = (props) => {
  return (
    <Styles>
      <Button className="download">Download CV</Button>
      <Button className="view">
        {" "}
        <FaPlayCircle /> Watch My View
      </Button>
    </Styles>
  );
};

export default Buttons;
