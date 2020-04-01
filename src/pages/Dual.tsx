import React from "react";
import game from "../game.jpg";
import software from "../softbeach.jpg";

import styled, { AnyStyledComponent } from "styled-components";
const Total: AnyStyledComponent = styled.div`
  height: 100%;
  background-color: black;
`;

const Game: AnyStyledComponent = styled.div`
  background-image: url(${game});
  height: 50%;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const Software: AnyStyledComponent = styled.div`
  background-image: url(${software});
  height: 50%;
  display: flex;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const Text: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffe8a1;
`;
const Box: AnyStyledComponent = styled.div`
  background-color: #000;
  padding: 10px;
  opacity: 0.7;
`;

const Dual: React.FC = () => {
  return (
    <Total>
      <Game>
        <Box>
          <Text>Game Development</Text>
        </Box>
      </Game>
      <Software>
        <Box>
          <Text>Software Development</Text>
        </Box>
      </Software>
    </Total>
  );
};

export default Dual;
