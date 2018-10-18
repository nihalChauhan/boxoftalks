import { IAuthor } from './IAuthor';

export class IComment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: IAuthor;
}
