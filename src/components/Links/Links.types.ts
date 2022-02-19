export type LinkConfig = {
    linkUrl: string;
    placeholder: string;
    useIcon?: boolean;
    iconOptions?: {
        iconSource: string;
    };
}

export interface LinksProps {
    links: LinkConfig[];
}