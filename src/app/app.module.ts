import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './Component/services/services.component';
import { IndustriesComponent } from './Component/industries/industries.component';
import { InsightsComponent } from './Component/insights/insights.component';
import { CareersComponent } from './Component/careers/careers.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ArtificialIntelligenceComponent } from './Services/artificial-intelligence/artificial-intelligence.component';
import { DataComponent } from './Services/data/data.component';
import { WebDevelopmentComponent } from './Services/web-development/web-development.component';
import { ConsultingComponent } from './Services/consulting/consulting.component';
import { CloudComponent } from './Services/cloud/cloud.component';
import { CognitiveBusinessOperationsComponent } from './Services/cognitive-business-operations/cognitive-business-operations.component';
import { CybersecurityComponent } from './Services/cybersecurity/cybersecurity.component';
import { EnterpriseSolutionComponent } from './Services/enterprise-solution/enterprise-solution.component';
import { IoTComponent } from './Services/io-t/io-t.component';
import { BigDataComponent } from './Services/big-data/big-data.component';
import { BlockchainComponent } from './Services/blockchain/blockchain.component';
import { NetworkInfraSolutionComponent } from './Services/network-infra-solution/network-infra-solution.component';
import { BankingComponent } from './Industries/banking/banking.component';
import { LifeSciencesComponent } from './Industries/life-sciences/life-sciences.component';
import { InsuranceComponent } from './Industries/insurance/insurance.component';
import { ManufactureComponent } from './Industries/manufacture/manufacture.component';
import { RetailComponent } from './Industries/retail/retail.component';
import { HealthcareComponent } from './Industries/healthcare/healthcare.component';
import { EducationComponent } from './Industries/education/education.component';
import { CmiComponent } from './Industries/cmi/cmi.component';
import { CapitalMarkComponent } from './Industries/capital-mark/capital-mark.component';
import { CdmComponent } from './Industries/cdm/cdm.component';
import { TravelComponent } from './Industries/travel/travel.component';
import { ERUComponent } from './Industries/eru/eru.component';
import { HitechComponent } from './Industries/hitech/hitech.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    IndustriesComponent,
    InsightsComponent,
    CareersComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ArtificialIntelligenceComponent,
    DataComponent,
    WebDevelopmentComponent,
    ConsultingComponent,
    CloudComponent,
    CognitiveBusinessOperationsComponent,
    CybersecurityComponent,
    EnterpriseSolutionComponent,
    IoTComponent,
    BigDataComponent,
    BlockchainComponent,
    NetworkInfraSolutionComponent,
    BankingComponent,
    LifeSciencesComponent,
    InsuranceComponent,
    ManufactureComponent,
    RetailComponent,
    HealthcareComponent,
    EducationComponent,
    CmiComponent,
    CapitalMarkComponent,
    CdmComponent,
    TravelComponent,
    ERUComponent,
    HitechComponent,
    AboutUsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
