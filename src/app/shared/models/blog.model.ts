import { Blog } from '../interfaces/blog.interface';

export class BlogModel {
  image: string;
  title: string;
  author: string;
  resume: string;

  constructor(data: Blog) {
    this.image = data.image;
    this.title = data.title;
    this.author = data.author;
    this.resume = data.resume;
  }
}
