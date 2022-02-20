import { Link } from './Links.styles';
import { LinksContainer } from './Links.styles'
import { LinksProps } from "./Links.types"

export function Links(props: LinksProps) {
  const { links } = props;

  return (
    <LinksContainer>
        {links.map((link, index) => (
            <Link 
                href={link.linkUrl}
                colorSet={link.colorSet!}
                key={index}>
                    {link.placeholder}
            </Link>
        ))}
    </LinksContainer>
  )
}
