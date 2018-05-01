import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalinaComponent } from './datalina.component';

describe('DatalinaComponent', () => {
  let component: DatalinaComponent;
  let fixture: ComponentFixture<DatalinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
