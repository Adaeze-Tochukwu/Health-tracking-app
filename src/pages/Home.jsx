import React from "react";
import Container from "../components/container/Container";
import Nav from "../components/nav/Nav";
import Dashboard from "../components/dashboard/Dashboard";
import Appointment from "../components/appointment/Appointment";
import Medication from "../components/medication/Medication";
import Cross from "../components/cross/Cross";
import Tools from "../components/tools/Tools";

export default function Home() {
  return (
    <div>
      <Container>
        <Nav />
        <Dashboard />
        <Appointment />
        <Medication />
        <Cross />
        <Tools />
      </Container>
    </div>
  );
}
