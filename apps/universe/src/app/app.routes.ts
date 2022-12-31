import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'planet-one',
    loadChildren: () =>
      import('planet-one/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'planet-two',
    loadChildren: () =>
      import('planet-two/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
