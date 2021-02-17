import * as React from "react"
import { Grid } from "@material-ui/core"
import {Helmet} from 'react-helmet'


// styles
const layoutStyle=
{ 
  fontFamily: "Poppins, sans-serif",
  color: "#eef8ff",
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
  fontSize: "150%",
  fontWeight: "100",
}

const fancyFont = {
  color: "#ff9f1c !important",
}



// markup
const IndexPage = () => {
  return (     
      <main style={layoutStyle}>
          <Helmet>
                <style>{'body { background-color: black; }'}</style>
          </Helmet>
            <title>Desarrollador Fullstack - Santiago, Chile.</title>
            <Grid container
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
            </Grid>
            
            
          </main>
   
    
  )
}

export default IndexPage
