import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatalinaComponent } from './datalina/datalina.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'datalina',
    component: DatalinaComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  { path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [] // resolvers

})
export class AppRoutes {}
