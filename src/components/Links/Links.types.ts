export type LinkConfig = {
  linkUrl: string;
  placeholder: string;
  useIcon?: boolean;
  colorSet?: LinkTheme;
  iconOptions?: {
    iconSource: string;
  };
};

export interface LinksProps {
    links: LinkConfig[];
}

export interface LinkProps {
    colorSet: LinkTheme;
}

export enum LinkTheme {
    GITHUB_THEME,
    DRIBBLE_THEME,
    PORTFOLIO_THEME,
    INSTAGRAM_THEME,
}
