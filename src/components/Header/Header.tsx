import { HeaderAvatar, HeaderContainer } from "./Header.styles";
import SampleAvatar from "../../assets/png/sample-avatar.png";
import { AvatarShadowType } from "./Header.types";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderAvatar 
          src={SampleAvatar} 
          shadowType={AvatarShadowType.USE_REFLECTION}
          isShadowAnimated />
    </HeaderContainer>
  )
}
