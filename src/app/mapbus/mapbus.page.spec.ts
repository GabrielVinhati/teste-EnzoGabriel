import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapbusPage } from './mapbus.page';

describe('MapbusPage', () => {
  let component: MapbusPage;
  let fixture: ComponentFixture<MapbusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
