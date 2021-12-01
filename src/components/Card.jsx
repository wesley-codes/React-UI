import Styled from "styled-components";
import Navigation from "./Navigation";
import ImageFrame from "./ImageFrame";
import Description from "./Description";

const Styles = Styled.section`





.wrap{
    
    display:flex;
    justify-content:center;
    
}

.container{
    padding-left: 0px;

  
}

.wrap__row{
  margin-right: 0px;
    margin-left: 0px;
}

@media only screen and (max-width: 976px) {
    margin-top:0;
    position:relative;

  .container{
      padding-right: 0px;

  }

  .wrap{
    justify-content: center;

  }
  }

`;

const Card = () => {
  return (
    <Styles>
      <Navigation />

      <Row className="wrap__row">
        <Col lg={6} md={12} className="wrap">
          <ImageFrame />
        </Col>

        <Col lg={6} className="desc__wrap">
          <Description />
        </Col>
      </Row>
    </Styles>
  );
};

export default Card;
