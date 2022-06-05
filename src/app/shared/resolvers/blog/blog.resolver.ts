import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../../http/blog/blog.service';
import { BlogModel } from '../../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<BlogModel[]> {

  constructor(
    private blogService: BlogService
  ) {
  }

  resolve(): Observable<BlogModel[]> {
    return this.blogService.getBlogs();
  }
}
