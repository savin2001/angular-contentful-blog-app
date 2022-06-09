import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  blogPost$: Observable<any> | undefined;

  // Put the data gotten from the APi to the blog post variable
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.blogPost$ = this.contentfulService.getEntryById(id);
    });
  }
}
