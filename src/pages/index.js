import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../utils/global.css";

import { Container } from "react-bootstrap";

import NavbarComponent from "../components/navbar_component";
import CardDeckComponent from "../components/card_deck_component";
import GreetingsComponent from "../components/greetings_component";
import ResumeComponent from "../components/resume_component";
//import CallToActionComponent from "../components/call_to_action_component";

import JobExperienceComponent from "../components/about_component";
import FooterComponent from "../components/footer_component";

const main = {
  fontFamily: "Poppins, sans-serif !important",
  backgroundColor: "var(--bg)",
  color: "var(--textNormal)",
};

const index = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Container style={main}>
        <GreetingsComponent></GreetingsComponent>
        <ResumeComponent></ResumeComponent>
        {/*<CallToActionComponent></CallToActionComponent> */}
        <CardDeckComponent></CardDeckComponent>
        <JobExperienceComponent></JobExperienceComponent>
        <FooterComponent></FooterComponent>
      </Container>
    </div>
  );
};
export default index;
