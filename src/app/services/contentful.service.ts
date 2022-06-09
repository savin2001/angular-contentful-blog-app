import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  // Creating the client instance to allow viewing of the details
  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  // Getting all the published blogs on the CMS
  getAllEntries() {
    const promise = this.client.getEntries();

    return from(promise);
  }
}
