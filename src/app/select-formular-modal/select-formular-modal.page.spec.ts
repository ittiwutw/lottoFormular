import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectFormularModalPage } from './select-formular-modal.page';

describe('SelectFormularModalPage', () => {
  let component: SelectFormularModalPage;
  let fixture: ComponentFixture<SelectFormularModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFormularModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFormularModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
