import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CredencialPage } from './credencial.page';

describe('CredencialPage', () => {
  let component: CredencialPage;
  let fixture: ComponentFixture<CredencialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredencialPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CredencialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
