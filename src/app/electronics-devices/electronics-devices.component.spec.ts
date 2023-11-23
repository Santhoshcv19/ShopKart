import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsDevicesComponent } from './electronics-devices.component';

describe('ElectronicsDevicesComponent', () => {
  let component: ElectronicsDevicesComponent;
  let fixture: ComponentFixture<ElectronicsDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
