import { Component } from '@angular/core';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent {
  compositeSampleCode = `
  // Component interface - Tüm bileşenlerin uygulaması gereken temel davranışı tanımlar
  interface FileSystemItem {
      getName(): string;
      getSize(): number;
      print(): void;
  }

  // Leaf class - Tek bir dosyayı temsil eder
  class File implements FileSystemItem {
      constructor(private name: string, private size: number) {}

      getName(): string {
          return this.name;
      }

      getSize(): number {
          return this.size;
      }

      print(): void {
          console.log(this.name + " - " + this.size + " KB");
      }
  }

  // Composite class - Klasörü ve içerdiği dosyaları temsil eder
  class Folder implements FileSystemItem {
      private children: FileSystemItem[] = [];

      constructor(private name: string) {}

      getName(): string {
          return this.name;
      }

      getSize(): number {
          let totalSize = 0;
          this.children.forEach(function (child) {
              totalSize += child.getSize();
          });
          return totalSize;
      }

      add(fileOrFolder: FileSystemItem): void {
          this.children.push(fileOrFolder);
      }

      print(): void {
          console.log("Folder: " + this.name);
          this.children.forEach(function (child) {
              child.print();
          });
      }
  }

  // Kullanım
  const file1 = new File("file1.txt", 50);
  const file2 = new File("file2.txt", 75);
  const file3 = new File("file3.txt", 30);

  const folder1 = new Folder("Folder 1");
  folder1.add(file1);
  folder1.add(file2);

  const folder2 = new Folder("Folder 2");
  folder2.add(file3);

  const root = new Folder("Root");
  root.add(folder1);
  root.add(folder2);

  console.log("Total size of Root:", root.getSize());
  root.print();

  `;
}
