import { Component } from '@angular/core';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent {
  adapterSampleCode = ` 
  // İhtiyacımız olan iki farklı tipte veri kaynağı
  interface OldDataSource {
      getData(): string;
  }

  class LegacyDataSource implements OldDataSource {
      getData(): string {
          return 'Veri kaynağından alınan veri';
      }
  }

  interface NewDataSource {
      fetchData(): string;
  }

  class ModernDataSource implements NewDataSource {
      fetchData(): string {
          return 'Yeni veri kaynağından alınan veri';
      }
  }

  // Adapter arayüzü, yeni veri kaynağını eski veri kaynağına adapte edecek
  interface Adapter extends OldDataSource {
      fetch(): string;
  }

  // Yeni veri kaynağını eski veri kaynağına adapte eden sınıf
  class NewToOldAdapter implements Adapter {
      private newDataSource: NewDataSource;

      constructor(newDataSource: NewDataSource) {
          this.newDataSource = newDataSource;
      }

      // Yeni veri kaynağının metodunu eski veri kaynağı metoduna adapte ediyoruz
      getData(): string {
          return this.newDataSource.fetchData();
      }

      // Eski veri kaynağı metodunu çağıran bir metod
      fetch(): string {
          return this.getData();
      }
  }

  // Kullanım örneği
  const legacySource: OldDataSource = new LegacyDataSource();
  console.log(legacySource.getData()); // Eski veri kaynağından alınan veri

  const modernSource: NewDataSource = new ModernDataSource();
  console.log(modernSource.fetchData()); // Yeni veri kaynağından alınan veri

  // Yeni veri kaynağını eski veri kaynağına adapte ederek kullanma
  const adaptedSource: Adapter = new NewToOldAdapter(modernSource);
  console.log(adaptedSource.fetch()); // Yeni veri kaynağından alınan veri (adapted)
 `;
}
