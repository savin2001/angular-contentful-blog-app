import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Receiving the payload from the service
  constructor(private contentfulService: ContentfulService) {}

  blogPosts$: Observable<any> | undefined;

  // On loading blogPosts holds the payload
  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
}
