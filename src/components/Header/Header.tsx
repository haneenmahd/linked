import { HeaderAvatar, HeaderContainer, HeaderContent } from "./Header.styles";
import { AvatarShadowType } from "./Header.types";
import SampleAvatar from "../../assets/png/sample-avatar.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderAvatar
        src={SampleAvatar}
        shadowType={AvatarShadowType.USE_DEFAULT_SHADOW}
        isShadowAnimated
      />

      <HeaderContent>
        <h1>Haneen Mahdin</h1>

        <p>An Aspiring Full-stack software developer and a UI/UX Designer</p>
      </HeaderContent>
    </HeaderContainer>
  );
}
