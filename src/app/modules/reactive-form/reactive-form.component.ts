import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { rangeValidator } from './helpers/reactiveFormCustomValidators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  sampleGenerateFormItems?: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      name: ['Ege', Validators.required],
      email: ['sample@mail.com', [Validators.required, Validators.email]],
      job: this._fb.group({ company: ['ATOS', Validators.required], location: ['METU technocity', Validators.required] }),
      personalty: this._fb.array([
        this._fb.group({ age: [25, Validators.required] }),
        this._fb.group({ height: [183, [Validators.required, rangeValidator(50, 210)]] })
      ])
    });
  }

  /**
   * `userFormSubmit` fonksiyonu TypeScript'te, form gönderim ayrıntılarını ve geçerli ise form verilerini konsola yazdırır.
   * Aynı zamanda form özellikleri ve denetimleri hakkında bilgi sağlar.
   * @param {Event} event - `userFormSubmit` fonksiyonundaki `event` parametresi, gerçekleşen bir olaya ilişkin bilgiler içeren bir olay nesnesini temsil eder.
   * Bu durumda, muhtemelen JavaScript'teki `Event` arabiriminden bir örnek olup, olayla ilgili özellikler ve yöntemler sağlar.
   */
  public userFormSubmit(event: Event): void {
    console.log(event.target); // DOM olay nesnesini veya formun gönderildiği zamanla ilgili bilgileri içeren bir nesneyi temsil eder.

    if (this.userForm.valid) {
      console.log('Form gönderildi!');
      console.log('Ad:', this.userForm.value.name);
      console.log('E-posta:', this.userForm.value.email);
      // Burada form verilerini gönderebilirsiniz.
    } else {
      console.log('Form hatalı, gönderilemedi.');
    }

    // * En iyi uygulama pratiği
    console.log(this.userForm); // burada form özelliklerini görürüz
    // Burada controls özelliği, formdaki her bir alanı temsil eden FormControl nesnelerini içeren bir nesnedir.
  }

  /**
   * `userFormSetValue` fonksiyonu, TypeScript'te setValue yöntemini kullanarak birden çok form değerini aynı anda ayarlar.
   */
  public userFormSetValue(): void {
    // setValue dediğimiz zamanda tüm form değerlerini setValue içerisinde vermek zorundayız
    this.userForm.setValue({
      name: 'setValue Ege',
      email: 'setValueSample@mail.com',
      job: {
        company: 'setValue ATOS',
        location: 'setValue METU technocity'
      },
      personalty: [{ age: 11 }, { height: 22 }]
    });
  }
  /**
   * `userFormPatchValue` fonksiyonu TypeScript'te belirli değerleri bir forma ekler.
   */
  public userFormPatchValue(): void {
    // setValue dediğimiz zamanda tüm form değerlerini setValue içerisinde vermek zorundayız
    this.userForm.patchValue({
      name: 'patchValue',
      job: {
        company: 'TeTe'
      },
      personalty: [{ age: 30 }]
    });
  }

  /**
   * `sampleGenerateForm` fonksiyonu, sınıf adı, öğretmen adı ve yaş için alanlar içeren ve öğrenci adı ve yaşlarının bulunduğu bir form grubu oluşturur.
   */
  public sampleGenerateForm(): void {
    this.sampleGenerateFormItems = this._fb.group({
      className: ['A1', Validators.required],
      teacher: this._fb.group({
        name: ['Ali', [Validators.required]],
        age: [24, [Validators.required]]
      }),
      students: this._fb.array([
        this._fb.group({ name: ['1. öğrenci', Validators.required], age: [15] }),
        this._fb.group({ name: ['2. öğrenci', Validators.required], age: [12] })
      ])
      // İhtiyaca göre daha fazla alan ekleyebilirsiniz
    });
  }

  /**
   * `sampleGenerateFormSubmit` fonksiyonu, form öğelerinin değerini konsola yazdırır ve form gönderim işlemlerinin gerçekleştirileceğini belirtir.
   */
  public sampleGenerateFormSubmit(): void {
    console.log(this.sampleGenerateFormItems?.value);
    console.log('Form değer gönderme işlemleri yapılacak');
  }

  /**
   * `managerAdd` fonksiyonu, TypeScript'te Angular'ın FormBuilder'ının `addControl` metodunu kullanarak dinamik olarak bir FormGroup'a bir yönetici form kontrolü ekler.
   */
  public managerAdd() {
    // Forma bir formControl daha eklemek

    // .addControl() metodu, Angular'da FormGroup içinde dinamik olarak yeni bir kontrol (control) eklemek için kullanılır.
    this.sampleGenerateFormItems?.addControl('manager', this._fb.control('Müdür', Validators.required));

    console.log(this.sampleGenerateFormItems?.value);
    // this._fb.control: Tek bir form kontrolü oluşturmak için kullanılır. Bu metot, tek bir form elemanının
    // (input, select, vb.) değerini yönetmek için bir form kontrolü oluşturur.

    // this._fb.group: Birden fazla form kontrolünü gruplamak ve yönetmek için kullanılır.
    // Bu metot, ilişkili form elemanlarını gruplamak ve bunların değerlerini tek bir nesne içinde saklamak için kullanılır.
  }

  /**
   * `teacherPhysicalPropertieAdd` fonksiyonu, öğretmenin boyutu için bir form kontrolü ekler ve bu form kontrolünü içeren iç içe geçmiş bir form grubuna ekler.
   */
  public teacherPhysicalPropertieAdd() {
    // Teacher bir obje
    // iç içe formGroup değerlerine bir formcontrol eklemek için bu kod yazılır
    const nestedFormGroup = this.sampleGenerateFormItems?.get('teacher') as FormGroup;
    nestedFormGroup.addControl('height', this._fb.control(165, [Validators.minLength(100)]));
    console.log(this.sampleGenerateFormItems?.value);
  }

  /**
   * `studentAdd` fonksiyonu, bir FormArray'e yeni bir öğrenci form grubu ekler ve ardından form grubunu indeks 0'da konsola yazdırır.
   */
  public studentAdd(): void {
    // Student bir array
    // JavaScript'teki push metodunun bir diziye yeni eleman eklediğinde dizi uzunluğunu döndürmesidir; yani, dizinin kendisi değil, dizinin güncellenmiş uzunluğudur.
    // const itemsArray = (this.sampleGenerateFormItems?.get('students') as FormArray).push(this._fb.group({ name: 'yeni Öğrenci' }));
    // yukarıdaki kodda itemsArray değişkeni, dizinin yeni uzunluğunu tutar, yani dizi değil.
    // Bu nedenle, itemsArray.at(0) şeklinde erişmeye çalıştığınızda bir hata alıyorsunuz;

    const studentsArray = this.sampleGenerateFormItems?.get('students') as FormArray;
    studentsArray.push(this._fb.group({ name: 'yeni Öğrenci' }));

    // .at(1) satırı, Reactive Forms'da bir form array içindeki belirli bir index'teki form grubunu almak için kullanılır.
    console.log(studentsArray.at(0));
  }

  /**
   * `userFormValueChanges` fonksiyonu, tüm formdaki değişiklikleri ve özellikle 'name' alanındaki değişiklikleri dinler ve değerleri konsola yazdırır.
   */
  public userFormValueChanges(): void {
    this.userForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.userForm.get('name')?.valueChanges.subscribe((value) => {
      console.log('Name değeri değişti:', value);
      // 'name' alanı için özel olarak burada işlemler gerçekleştirebilirsiniz
    });
  }
  // * Tüm formu sıfırlamak için this.userForm.reset(); kullanılır

  /**
   * Fonksiyon, 'sampleGenerateFormItems' adlı bir FormGroup'dan 'students' adlı bir FormArray'in kontrolünü döndürür.
   * @returns `getSampleGenerateFormItems` metodu, `sampleGenerateFormItems` FormGroup'undan 'students' FormArray'inin kontrolünü döndürüyor.
   */
  get getSampleGenerateFormItems() {
    return (this.sampleGenerateFormItems?.get('students') as FormArray).controls;

    // <div *ngFor="let item of sampleGenerateFormItems.get('students')?.value; let i = index" [formGroupName]="i">

    // Maalesef, HTML içinde doğrudan böyle bir kullanım mümkün değil. Angular, formGroupName direktifini sadece
    // form elemanlarını FormGroup ile ilişkilendirmek için kullanmanızı sağlar. Ancak, formGroupName içindeki
    // değerlerin doğrudan HTML içinde döngüye alınması veya kullanılması mümkün değil. formGroupName direktifi,
    // bir FormGroup'u belirli bir elemana bağlar ve o elemanın içindeki FormControl'leri veya diğer FormGroup'ları yönetmeyi sağlar.
    // Bu nedenle, FormArray içindeki elemanları döngü ile HTML'de doğrudan bu şekilde çağıramazsınız.
  }
}
