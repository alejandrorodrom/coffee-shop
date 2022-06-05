import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BlogModel } from '../../models/blog.model';
import { Blog } from '../../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  getBlogs(): Observable<BlogModel[]> {
    return this.http
      .get<Blog[]>('https://coffee-shop-backend-galaxy.herokuapp.com/blogs')
      .pipe(
        map(value => value.map(blog => new BlogModel(blog)))
      );
  }
}
