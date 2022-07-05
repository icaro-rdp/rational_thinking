import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  getAllEntries() {
    return this.client.getEntries().then((response) => {
      console.log(response);
      return response.items;
    });
  }
}
