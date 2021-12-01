import React from "react";
import Styled from "styled-components";
import Buttons from "./UI/Button";

const Styles = Styled.div`
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Righteous', cursive;
color: white;
display: flex;
flex-direction: column;
height:100%;
align-items:start;
justify-content: center;
 & h4{
     font-size: 2em;
 }

& p{
    font-family : font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
max-width: 55%;
font-size: 1em;
font-weight:600

}


& h2{
	background: linear-gradient(to right ,#D804AC 0%, #EC0000  90%, #EC0000  100%);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
    font-size: 5em;
    margin-bottom:3%
}

@media only screen and (max-width: 976px) {

        align-items:center;
        margin-left: 0px;

        h4{
            margin-top: 15px;
        }
        p{
            text-align: center;
            max-width: 80%;

        }
    
}

`;
const Description = () => {
  return (
    <Styles>
      <h4>Hello World!</h4>

      <h2>I'm Maya</h2>
      <p>Your Daram my theme...I'm UI/UX Designer And I'm Creative designer.</p>
      <Buttons />
    </Styles>
  );
};

export default Description;
