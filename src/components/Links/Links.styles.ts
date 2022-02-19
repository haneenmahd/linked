import styled from "styled-components";
import Theme from "../../theme/theme";

export const LinksContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px 0;
  height: 40px;
  width: 90%;
  border-radius: 8px;
  font-weight: 600;
  color: aliceblue;
  background-color: #fff;
  color: ${Theme.text.defaultColor};
  box-shadow: 0 20px 40px 0 #c4c4c440;
  transition: .2s cubic-bezier(0, 0.2, 0.5, 3);

  :hover {
    transform: scale(1.05);
  }
`;