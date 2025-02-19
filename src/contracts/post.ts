import { AuthorType } from "./author";
import { ContentType } from "./content";

export interface PostType {
  id: number;
  author: AuthorType;
  content: ContentType[];
  publishedAt: Date;
}