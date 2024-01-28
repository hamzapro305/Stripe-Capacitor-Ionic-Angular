import { Component } from '@angular/core';
import { Stripe } from '@capacitor-community/stripe';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Stripe.initialize({
      publishableKey: environment.stripe.publishableKey,
    });
  }
}
