import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ngxLoadingAnimationTypes } from '../../../../projects/ngx-loading/src/lib/ngx-loading-config';
import { NgxLoadingComponent } from '../../../../projects/ngx-loading/src/lib/ngx-loading.component';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false })
  customLoadingTemplate!: TemplateRef<any>;
  @ViewChild('emptyLoadingTemplate', { static: false })
  emptyLoadingTemplate!: TemplateRef<any>;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = true;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: '3px',
  };

  constructor(
    private sanitizer: DomSanitizer,
    private viewContainerRef: ViewContainerRef
  ) {}

  public toggleColours(): void {
    this.coloursEnabled = !this.coloursEnabled;

    if (this.coloursEnabled) {
      this.primaryColour = PrimaryRed;
      this.secondaryColour = SecondaryBlue;
    } else {
      this.primaryColour = PrimaryWhite;
      this.secondaryColour = SecondaryGrey;
    }
  }

  toggleTemplate(): void {
    if (this.showingTemplate) {
      this.loadingTemplate = this.emptyLoadingTemplate;
    } else {
      this.loadingTemplate = this.customLoadingTemplate;
    }

    this.showingTemplate = !this.showingTemplate;
  }

  public showAlert(): void {
    alert('ngx-loading rocks!');
  }
}
