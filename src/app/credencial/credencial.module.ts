import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CredencialPage } from './credencial.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CredencialPageRoutingModule } from './credencial-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CredencialPageRoutingModule
  ],
  declarations: [CredencialPage]
})
export class CredencialPageModule {}
