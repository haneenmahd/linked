export interface HeaderProps {
  avatarOptions: {
    title: string;
    description: string;
    avatarImageSource: string;
  };
  stylingOptions?: HeaderAvatarProps;
}

export enum AvatarShadowType {
  USE_REFLECTION, // applies reflection affects to the avatar
  USE_VIOLET_GRADIENT, // uses a gradient that is animated
  USE_GREEN_GRADIENT, // uses a gradient that is animated
  USE_DEFAULT_SHADOW, // default soft-shadow
}

export interface HeaderAvatarProps {
  shadowType?: AvatarShadowType;
  /** Sets if the shadow needs to be animated like a wave */
  isShadowAnimated?: boolean; // NOTE: reflection will not be animated
}
