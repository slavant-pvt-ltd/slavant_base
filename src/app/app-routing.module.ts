import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './Component/services/services.component';
import { InsightsComponent } from './Component/insights/insights.component';
import { IndustriesComponent } from './Component/industries/industries.component';
import { CareersComponent } from './Component/careers/careers.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { HomeComponent } from './Component/home/home.component';
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

const routes: Routes = [
  {path:"",
   component:HomeComponent
  },
  {path:"home",
    component:HomeComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"insights",
    component:InsightsComponent
  },
  {
    path:"industries",
    component:IndustriesComponent
  },
  {
    path:"about-slavant",
    component:AboutUsComponent
  },
  {
    path:"careers",
    component:CareersComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },

  {
    path:"artificial-intelligence",
    component:ArtificialIntelligenceComponent
  },
  {
   path:"data",
   component:DataComponent
  },
  {
   path:"software-dev",
   component:WebDevelopmentComponent
  },
  {
    path:"consulting",
    component:ConsultingComponent
  },
  {
   path:"cloud",
   component:CloudComponent
  },
  {path:"cob",
    component:CognitiveBusinessOperationsComponent
  },
  {path:"cybersecurity",
    component:CybersecurityComponent
  },
  {path:"ent-price",
    component:EnterpriseSolutionComponent
  },
  {path:"IoT",
   component:IoTComponent
  },
  {
   path:"big-data",
   component:BigDataComponent
  },

  { path:"blockchain",
    component:BlockchainComponent
  },

  {
   path:"communicaton",
   component:NetworkInfraSolutionComponent
  },

  {
   path:"banking",
   component:BankingComponent
  },

  {
    path:"life-sciences",
    component:LifeSciencesComponent
  },

  {
    path:"insurance",
    component:InsuranceComponent
  },

  { 
    path:"manufacture",
    component:ManufactureComponent
  },

  {
    path:"retail",
    component:RetailComponent
  },
  {
   path:"healthcare",
   component:HealthcareComponent
  },

  {
    path:"education",
    component:EducationComponent
  },

  {
    path:"cmi",
    component:CmiComponent
  },

  {
    path:"cap-mark",
    component:CapitalMarkComponent
  },
  
  {
    path:"cdm",
    component:CdmComponent
  },

  {
    path:"t-l",
    component:TravelComponent
  },

  {
    path:"eru",
    component:ERUComponent
  },

  {
   path:"hitech",
   component:HitechComponent
  },

  {
    path:"**",
    component:PageNotFoundComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
