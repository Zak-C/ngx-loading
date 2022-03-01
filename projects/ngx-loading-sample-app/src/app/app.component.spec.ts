import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxLoadingModule } from '../../../../projects/ngx-loading/src/lib/ngx-loading.module';
import { AppComponent } from './app.component';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxLoadingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle colours when colours are toggled', () => {
    expect(component.coloursEnabled).toBeFalse();
    expect(component.primaryColour).toEqual(PrimaryWhite);
    expect(component.secondaryColour).toEqual(SecondaryGrey);

    component.toggleColours();
    expect(component.primaryColour).toEqual(PrimaryRed);
    expect(component.secondaryColour).toEqual(SecondaryBlue);
    expect(component.coloursEnabled).toBeTrue();

    component.toggleColours();
    expect(component.primaryColour).toEqual(PrimaryWhite);
    expect(component.secondaryColour).toEqual(SecondaryGrey);
    expect(component.coloursEnabled).toBeFalse();
  });

  it('should toggle the template when the template is toggled', () => {
    expect(component.loadingTemplate).toEqual(component.emptyLoadingTemplate);
    expect(component.showingTemplate).toBeFalse();

    component.toggleTemplate();
    fixture.detectChanges();
    expect(component.showingTemplate).toBeTrue();

    component.toggleTemplate();
    fixture.detectChanges();
    expect(component.loadingTemplate).toEqual(component.emptyLoadingTemplate);
    expect(component.showingTemplate).toBeFalse();
  });

  it('should show an alert when show alert called', () => {
    spyOn(window, 'alert');
    component.showAlert();
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('ngx-loading rocks!');
  });
});
