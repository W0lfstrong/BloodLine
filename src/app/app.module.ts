import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ProcessComponent } from './component/process/process.component';
import { BlogComponent } from './component/blog/blog.component';
import { MapsComponent } from './component/maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { HealthdayComponent } from './component/impdays/healthday/healthday.component';
import { DonationdayComponent } from './component/impdays/donationday/donationday.component';
import { HemophilliadayComponent } from './component/impdays/hemophilliaday/hemophilliaday.component';
import { NvbddComponent } from './component/impdays/nvbdd/nvbdd.component';
import { ThalassemiadayComponent } from './component/impdays/thalassemiaday/thalassemiaday.component';
import { IpawComponent } from './component/impdays/ipaw/ipaw.component';
import { ContentComponent } from './component/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BloodcampComponent } from './component/bloodcamp/bloodcamp.component';
import { OrgcampComponent } from './component/orgcamp/orgcamp.component';
import { DonationportalComponent } from './component/donationportal/donationportal.component';
import { OrderModule } from 'ngx-order-pipe';
import { DonationComponent } from './donation/donation.component';
import { GeneralComponent } from './component/general/general.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 



@NgModule({
declarations: [
AppComponent,
HomeComponent,
AboutusComponent,
GalleryComponent,
ProcessComponent,
BlogComponent,
MapsComponent,
routingComponents,
HealthdayComponent,
DonationdayComponent,
HemophilliadayComponent,
NvbddComponent,
ThalassemiadayComponent,
IpawComponent,
ContentComponent,
BloodcampComponent,
OrgcampComponent,
DonationportalComponent,
DonationComponent,
GeneralComponent,
ContactusComponent,


  ],
  entryComponents: [HealthdayComponent, DonationdayComponent, HemophilliadayComponent, NvbddComponent, ThalassemiadayComponent,
  IpawComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule,
    NgbModule


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

