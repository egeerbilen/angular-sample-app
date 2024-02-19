// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UnitTestComponent } from './unit-test.component';

describe('AppComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UnitTestComponent]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply(2, 3);
    expect(result).toEqual(6);
  });

  it('should convert text to uppercase', () => {
    const testInput = 'sample text';
    const expectedResult = 'SAMPLE TEXT';

    component.inputText = testInput;
    component.convertToUppercase();

    expect(component.convertedText).toEqual(expectedResult);
  });

  it('should update convertedText when button is clicked', () => {
    const testInput = 'hello';
    const button = fixture.nativeElement.querySelector('button');
    // Ancak, bu kod örneği yalnızca bir <button> öğesi olduğunu varsayar. Gerçekte, birden fazla <button> öğesi varsa, bu kod çalışmayabilir veya farklı bir butona tıklama emulasyonu yapabilir.
    // Örnek
    // const button = fixture.nativeElement.querySelector('#convertToUppercaseId');
    // const button = fixture.nativeElement.querySelector('.myButtonClass');

    component.inputText = testInput;
    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    expect(component.convertedText).toBe('HELLO');
  });

  it('should add a note to the list', () => {
    const initialLength = component.notes.length;

    component.addNote('Yeni not');
    fixture.detectChanges();

    expect(component.notes.length).toBe(initialLength + 1);
  });

  it('should remove a note from the list', () => {
    const indexToRemove = 1;
    const initialLength = component.notes.length;

    component.removeNote(indexToRemove);
    fixture.detectChanges();

    expect(component.notes.length).toBe(initialLength - 1);
    expect(component.notes.indexOf('Alışveriş listesi: süt, ekmek, yumurta')).toBe(-1);
  });
});
