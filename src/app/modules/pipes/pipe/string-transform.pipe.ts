import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransform'
})
export class StringTransformPipe implements PipeTransform {
  /**
   * `transform` fonksiyonu, bir dize girdi alır ve tersine çevirir.
   * @param {string} value - `transform` fonksiyonu, bir dizeyi parametre olarak alır ve tersine çevirir. Eğer
   * girdi bir dize değilse, girdi değerini olduğu gibi döndürür.
   * @returns `transform` fonksiyonu, bir dizeyi girdi olarak alır, tersine çevirir ve karakterler arasına bir kısa çizgi ekler.
   * Bu nedenle, dönüştürülmüş değer, her karakter arasında kısa çizgilerle tersine çevrilmiş girdi dizesi olacaktır.
   */
  public transform(value: string): string {
    //ek olarak başka parametrelerde geçilebilir transform() içerisine

    // Burada dönüşüm işlemlerini gerçekleştirin
    // Örnek olarak, gelen değeri tersine çevirelim
    if (typeof value === 'string') {
      return value.split('').reverse().join('-');
    }
    return value;
  }
}
