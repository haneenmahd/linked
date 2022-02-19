import { HeaderAvatar, HeaderContainer, HeaderContent } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderAvatar
        src={props.avatarOptions.avatarImageSource}
        {...props.stylingOptions}
      />

      <HeaderContent>
        <h1>{props.avatarOptions.title}</h1>

        <p>{props.avatarOptions.description}</p>
      </HeaderContent>
    </HeaderContainer>
  );
}
