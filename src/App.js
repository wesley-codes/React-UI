import "./App.css";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./components/Card";

const Box = styled.div`



  @media only screen and (max-width: 976px) {
 
   
  }
`;

function App() {
  return (
    <Box>
      
        <Card />
    
    </Box>
  );
}

export default App;
