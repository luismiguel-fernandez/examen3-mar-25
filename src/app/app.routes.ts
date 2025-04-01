import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ProfilesComponent } from './sections/profiles/profiles.component';
import { RecommendComponent } from './sections/recommend/recommend.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'recommend', component: RecommendComponent },
    { path: '**', redirectTo: 'home' }
];
