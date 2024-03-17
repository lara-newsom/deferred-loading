import { NgModule } from '@angular/core';
import { LegacyComponent } from './legacy.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LegacyComponent],
  exports: [LegacyComponent],
})
export class LegacyModule {}
