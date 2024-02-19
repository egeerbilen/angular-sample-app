import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterToDescription',
  pure: true // "pure" kavramı, bir pipe'ın ne zaman çalışacağını belirleyen bir özelliktir. default olarak ture değeridir
  // Bir pipe'ın pure özelliği, pipe'ın veri değişikliklerini algılayıp yeniden işlem yapma şeklini tanımlar.
  // Pure (true): Bu durumda, pipe'ın herhangi bir veri değişikliği algılandığında çalışması beklenir.
  // Pure Bu durumda, pipe'ın sadece ilk başta çalışması beklenir ve daha sonra veri değişiklikleri göz ardı edilir.
})
export class FilterPipe implements PipeTransform {
  /**
   * `transform` fonksiyonu, her bir öğenin 'description' özelliğini kullanarak bir arama metni temelinde öğe dizisini filtreler.
   * @param {any[]} items - `items` parametresi, bir arama metni temelinde filtrelemek istediğiniz herhangi türdeki öğelerin bir dizisidir.
   * @param {string} searchText - `searchText` parametresi, belirli bir kriter temelinde öğeleri filtrelemek için kullanılan bir dizedir.
   * Sağlanan `transform` fonksiyonunda, bu dize küçük harfe dönüştürülür ve ardından her bir öğenin `description` özelliğinin
   * `searchText` dizesini içerip içermediğine göre öğeleri filtrelemek için kullanılır.
   * @returns 'description' özelliğinde belirtilen arama metni ile eşleşen öğelerin bir dizisi.
   */
  public transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      // Örnek olarak bir nesnenin 'description' özelliğine göre filtreleme
      return item.description.toLowerCase().includes(searchText);
    });
  }
}
