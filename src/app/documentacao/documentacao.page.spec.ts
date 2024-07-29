import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentacaoPage } from './documentacao.page';

describe('DocumentacaoPage', () => {
  let component: DocumentacaoPage;
  let fixture: ComponentFixture<DocumentacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
