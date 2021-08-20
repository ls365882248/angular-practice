import { NgModule } from '@angular/core';
import { Level2Module1Module } from './level2-module1/level2-module1.module';
import { DeepModuleService } from './deep-module.service'; 

@NgModule({
  declarations: [],
  imports: [
    Level2Module1Module
  ],
   providers: [
    DeepModuleService
   ]
})
export class DeepModuleModule { }
