import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Navone: AnyStyledComponent = styled.nav`
  background-color: #000;
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const List: AnyStyledComponent = styled.li`
  padding: 20px;
  list-style-type: none;
`;
const Center: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;
const Bltext: AnyStyledComponent = styled.div`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: #ffd966;
  font-weight: bold;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom-color: #ffd966;
  }
  transition: all 0.1s ease-in-out;
`;
const Overview: AnyStyledComponent = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

const Link: AnyStyledComponent = styled.a`
  text-decoration: none;
  color: #ffe8a1;
  font-family: "Poppins", sans-serif;

  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom-color: #ffe8a1;
  }
  transition: all 0.2s ease-in-out;
`;
const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;
const Nav: React.FC = () => {
  return (
    <Navone>
      <Constraint>
        <Overview>
          <Center>
            <List>
              <Link href="https://www.google.com/">
                <Bltext>Broken Lamp</Bltext>
              </Link>
            </List>

            <List>
              <Link href="https://www.google.com/">Software</Link>
            </List>

            <List>
              <Link href="https://www.google.com/">Games</Link>
            </List>
            <List>
              <Link href="https://www.google.com/">Websites</Link>
            </List>
          </Center>
        </Overview>
      </Constraint>
    </Navone>
  );
};

export default Nav;
