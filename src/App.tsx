import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import Nav from "./pages/Nav";
import Dual from "./pages/Dual";

const Layout: AnyStyledComponent = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% 85% auto auto;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "d d d d d d d d d d d d"
    "c c c c c c c c c c c c";
    "f f f f f f f f f f f f";
`;
const Header: AnyStyledComponent = styled.div`
  grid-area: h;
`;
const Dualcontent: AnyStyledComponent = styled.div`
  grid-area: d;
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
      <Dualcontent>
        <Dual />
      </Dualcontent>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
