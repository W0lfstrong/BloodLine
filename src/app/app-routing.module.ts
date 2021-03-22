import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ContentComponent } from './component/content/content.component';
import { DonationportalComponent } from './component/donationportal/donationportal.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GeneralComponent } from './component/general/general.component';
import { MapsComponent } from './component/maps/maps.component';
import { ProcessComponent } from './component/process/process.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { BloodcampComponent } from './component/bloodcamp/bloodcamp.component';




const routes: Routes = [
    
    
    {path: 'home' , component: HomeComponent},
    {path: 'donation' , component: DonationComponent},
    {path: 'maps' , component: MapsComponent},
    {path: 'general' , component: GeneralComponent},
    {path: 'gallery' , component: GalleryComponent},
    {path: 'process' , component: ProcessComponent},
    {path: 'blog' , component: BlogComponent},
    {path: 'aboutus' , component: AboutusComponent},
    {path: 'donationportal' , component: DonationportalComponent},
    {path: 'content' , component: ContentComponent},
    {path: 'contactus' , component: ContactusComponent},
    {path: 'bloodcamp' , component: BloodcampComponent},

    


    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
  DonationComponent,
  MapsComponent,
  GalleryComponent,
  ProcessComponent, 
  BlogComponent, 
  AboutusComponent,
  GeneralComponent,
  DonationportalComponent,
  ContentComponent,
  ContactusComponent,
  BloodcampComponent
]