import React from "react";
import Styled from "styled-components";
import porto from "../assets/porto.jpeg";
const Styles = Styled.div`
display:flex;
justify-content:center;
position:relative;


&:before {
    content:"";
    position: absolute;
   
    height:100%;
    width:100%;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #290321 100%);    z-index:999;
  }

img{
    width: 130%;
    height: 500px;
    border-radius: 244.136px 244.136px 0px 0px;
    object-fit: contain;
   
}





`;

const ImageFrame = () => {
  return (
    <Styles>
      <img src={porto} alt="" />
    </Styles>
  );
};

export default ImageFrame;
