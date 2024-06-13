import { ILink } from '~/routes/_index/types/link';

export interface ICard {
    value: string;
    content: string;
    links?: ILink[];
}
