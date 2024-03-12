import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

/*
Our project managers have asked us for a simple utility to make their life easier. They want a form where they can enter the number of available developer days in the sprint and then information about multiple possible features. For each feature, they’re willing to provide the basic information about the feature (name, id, description), the number of people who'll be happy with the release of the feature, and the estimated number of developer days it will take to complete the feature. Given all of this, they’d like us to display the selection of features that should be taken into the sprint so that we maximize the number of happy people in the long run.
*/
