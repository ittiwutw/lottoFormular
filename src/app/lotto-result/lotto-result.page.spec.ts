import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LottoResultPage } from './lotto-result.page';

describe('LottoResultPage', () => {
  let component: LottoResultPage;
  let fixture: ComponentFixture<LottoResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LottoResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
