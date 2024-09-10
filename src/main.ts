import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  import { NgModule } from '@angular/core';
import { AssetPipe } from './asset.pipe';

@NgModule({
  declarations: [AssetPipe],
  exports: [AssetPipe]
})
export class AppModule {
  imagedata='assets/High_DA26971-100.jpg'

}

