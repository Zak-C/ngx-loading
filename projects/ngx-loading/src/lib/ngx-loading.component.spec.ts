import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxLoadingComponent } from './ngx-loading.component';

describe('LoadingComponent', () => {
  let component: NgxLoadingComponent;
  let fixture: ComponentFixture<NgxLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
