import { LinkProps, LinkTheme } from "./Links.types";
import styled, { css } from "styled-components";
import Theme from "../../theme/theme";

export const LinksContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`;

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px 0;
  height: 50px;
  width: 90%;
  border-radius: 8px;
  font-weight: 600;
  background-color: #fff;
  color: ${Theme.text.defaultColor};
  box-shadow: 0 20px 40px 0 #c4c4c440;
  transition: .2s cubic-bezier(0, 0.2, 0.5, 3);

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 700px) {
    width: 600px;
  }

  ${(p) => {
    switch (p.colorSet) {
      case LinkTheme.GITHUB_THEME:
        return LinkGithubTheme;

      case LinkTheme.DRIBBLE_THEME:
        return LinkDribbleTheme;

      case LinkTheme.INSTAGRAM_THEME:
        return LinkInstagramTheme;

      case LinkTheme.PORTFOLIO_THEME:
        return LinkPortfolioTheme;
    }
  }}
`;

export const LinkGithubTheme = css`
  background-color: rgb(13, 17, 23);
  color: #f5f5f5;
`;

export const LinkDribbleTheme = css`
  background-color: #ea4c89;
  color: #f5f5f5;
`;

export const LinkInstagramTheme = css`
  background-color: #5545d9;
  color: #f5f5f5;
`;

export const LinkPortfolioTheme = css`
  color: #222;
  border: 2px solid #222;
`;