import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsGoComponent } from './cs-go.component';

describe('CsGoComponent', () => {
  let component: CsGoComponent;
  let fixture: ComponentFixture<CsGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
