import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LottoFormularPage } from './lotto-formular.page';

describe('LottoFormularPage', () => {
  let component: LottoFormularPage;
  let fixture: ComponentFixture<LottoFormularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoFormularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LottoFormularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
