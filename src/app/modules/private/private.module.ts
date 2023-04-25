import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, PrivateRoutingModule, RouterModule],
})
export class PrivateModule {}