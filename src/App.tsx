import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import Nav from "./pages/Nav";

const Layout: AnyStyledComponent = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 20% 70% 10%;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "c c c c c c c c c c c c";
    "f f f f f f f f f f f f";
`;
const Header: AnyStyledComponent = styled.div`
  grid-area: h;
`;
const Content: AnyStyledComponent = styled.div`
  grid-area: c;
`;
const Footer: AnyStyledComponent = styled.div`
  grid-area: f;
`;

const App: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
