import * as React from "react"
import {Container, Row, Column, Col} from 'react-bootstrap'



// styles
const layoutStyle=
{ 
  fontFamily: "Poppins, sans-serif",
  color: "#141414",
}

const navBar=
{
  padding: "10%"
}


const mainBox ={
  paddingTop: "10%",
  paddingLeft: "15%",
  paddingRight: "15%",

}

const mainTitle = {
  fontWeight: "bold",
  fontSize: "250%",
}

const secondaryTitle = {
  fontSize: "195%",
  fontWeight: "100",
}

const fancyFont = {
  color: "#eec643 !important",
}

// markup
const IndexPage = () => {
  return (     
      <main style={layoutStyle}>
            <title>Desarrollador Fullstack - Santiago, Chile.</title>
            <Container>
              <Row >
                <Col sm={6}>Inicio</Col>
                <Col sm={6}>Blog</Col>
              </Row>
          </Container>
            {/* <Grid container
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                  spacing={10}
                  style={mainBox}>
              <Grid container
              
              style={mainTitle}    
              >
                <h1>Primero que nada, buenos días<span style={fancyFont} >.</span></h1>    
              </Grid>
              <Grid container
              style={secondaryTitle}    
              >
                <h3>Buscabas un Desarrollador Fullstack?</h3>    
              </Grid>
            </Grid> */}
            
            
          </main>
   
    
  )
}

export default IndexPage
