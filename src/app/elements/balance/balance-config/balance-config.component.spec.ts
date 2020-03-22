import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../../../modules/material/custom-material.module';
import { BalanceConfigComponent } from './balance-config.component';

describe('BalanceConfigComponent', () => {
  let component: BalanceConfigComponent;
  let fixture: ComponentFixture<BalanceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule,
        NoopAnimationsModule,
        CustomMaterialModule,
        FlexLayoutModule,
      ],
      declarations: [BalanceConfigComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });

  it('should have variables and methods defined', () => {
    expect(component.theme).toBeUndefined();
    expect(component.title).toEqual(jasmine.any(String));
    expect(component.themeChange).toEqual(jasmine.any(EventEmitter));
    expect(component.themes).toEqual(jasmine.any(Array));
    expect(component.setTheme).toEqual(jasmine.any(Function));
    expect(component.matButtonToggleChange).toEqual(jasmine.any(Function));
    expect(component.mock).toEqual(jasmine.any(Boolean));
    expect(component.serverChange).toEqual(jasmine.any(EventEmitter));
    expect(component.selectServer).toEqual(jasmine.any(Function));
    expect(component.serverChangeEvent).toEqual(jasmine.any(Function));
  });
});
