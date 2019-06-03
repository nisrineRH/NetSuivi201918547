import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Netsuivi201918547SharedLibsModule,
  Netsuivi201918547SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [Netsuivi201918547SharedLibsModule, Netsuivi201918547SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Netsuivi201918547SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Netsuivi201918547SharedModule {
  static forRoot() {
    return {
      ngModule: Netsuivi201918547SharedModule
    };
  }
}
