import styled, { css, keyframes } from "styled-components";
import { AvatarShadowType, HeaderAvatarProps } from "./Header.types";

export const HeaderContainer = styled.header`
  height: 300px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderAvatar = styled.img.attrs({
  alt: "User avatar image",
})<HeaderAvatarProps>`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  ${(p) => {
    switch (p.shadowType) {
      case AvatarShadowType.USE_DEFAULT_SHADOW:
        return SoftShadowCss;

      case AvatarShadowType.USE_GREEN_GRADIENT:
        return GreenGradientShadowCss;

      case AvatarShadowType.USE_VIOLET_GRADIENT:
        return VioletGradientShadowCss;

      case AvatarShadowType.USE_REFLECTION:
        return ReflectionCss;

      default:
        return css``;
    }
  }}
`;

export const SoftShadowCss = css<HeaderAvatarProps>`
  box-shadow: 0 5px 20px 0 #c4c4c460;

  ${(p) =>
    p.isShadowAnimated &&
    css`
      animation: ${SoftShadowCssAnim} 2s ease-in-out infinite;
    `}
`;

export const SoftShadowCssAnim = keyframes`
  50% {
    box-shadow: 0 10px 40px 0 #b4b4b4;
  }

  80% {
      box-shadow: 0 5px 20px 0 #b4b4b460;
  }
`;

export const VioletGradientShadowCss = css<HeaderAvatarProps>`
  box-shadow: 7px 18px 100px 0 rgba(87, 22, 163, 0.28),
    1px 50px 100px 0 rgba(35, 8, 64, 0.08);

  ${(p) =>
    p.isShadowAnimated &&
    css`
      animation: ${VioletGradientShadowCssAnim} 2s ease-in-out infinite;
    `}
`;

export const VioletGradientShadowCssAnim = keyframes`
  50% {
    box-shadow: 7px 28px 100px 0 rgba(87, 22, 163, 0.38),
    1px 50px 100px 0 rgba(35, 8, 64, 0.18);
  }

  80% {
    box-shadow: 7px 38px 100px 0 rgba(87, 22, 163, 0.23),
    1px 50px 100px 0 rgba(35, 8, 64, 0.13);
  }
`;

export const GreenGradientShadowCss = css<HeaderAvatarProps>`
  box-shadow: 7px 18px 60px 0 #00ff9a41, 2px 27px 100px 0 #0b21da41;

  ${(p) =>
    p.isShadowAnimated &&
    css`
      animation: ${GreenGradientShadowCssAnim} 2s ease-in-out infinite;
    `}
`;

export const GreenGradientShadowCssAnim = keyframes`
  50% {
    box-shadow: 7px 28px 60px 0 #00ff9a61, 2px 37px 100px 0 #0b21da61;
  }

  80% {
    box-shadow: 7px 23px 60px 0 #00ff9a33, 2px 31px 100px 0 #0b21da33;
  }
`;

export const ReflectionCss = css<HeaderAvatarProps>`
  -webkit-box-reflect: below 0
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08));
`;