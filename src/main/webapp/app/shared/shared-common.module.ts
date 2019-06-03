import { NgModule } from '@angular/core';

import { Netsuivi201918547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Netsuivi201918547SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Netsuivi201918547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Netsuivi201918547SharedCommonModule {}
