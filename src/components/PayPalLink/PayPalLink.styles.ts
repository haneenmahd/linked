import styled from "styled-components";

export const PayPalLinkContainer = styled.a.attrs({ target: "_blank" })`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px 0;
  height: 50px;
  width: 90%;
  border-radius: 8px;
  font-weight: 600;
  background-color: #253b80;
  color: #fafafa;
  box-shadow: 0 20px 40px 0 #c4c4c440;
  transition: 0.2s cubic-bezier(0, 0.2, 0.5, 3);

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 700px) {
    width: 600px;
  }
`;