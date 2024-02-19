import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  books = [
    {
      title: '1984',
      author: 'George Orwell',
      publicationYear: 1949,
      genres: ['Dystopian', 'Political fiction']
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publicationYear: 1960,
      genres: ['Novel', 'Southern Gothic']
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publicationYear: 1925,
      genres: ['Fiction', 'Tragedy']
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publicationYear: 1813,
      genres: ['Novel', 'Romance']
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      publicationYear: 1951,
      genres: ['Realistic fiction']
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      publicationYear: 1937,
      genres: ['Fantasy']
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      publicationYear: 1932,
      genres: ['Science fiction', 'Dystopian']
    }
  ];

  /**
   * shouldApplyClass() fonksiyonu birden fazla kez bir mesajı kaydeder ve bir dize değeri döndürür.
   * @returns Return metodu shouldApplyClass(), 'alert alert-danger' dizesini döndürüyor.
   */
  public shouldApplyClass(): string {
    console.log('shouldApplyClass() metodu bir çok kez çalıştı');
    return 'alert alert-danger';
  }
}
