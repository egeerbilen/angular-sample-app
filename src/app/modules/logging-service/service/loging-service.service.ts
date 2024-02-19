import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogingServiceService {
  /**
   * TypeScript'teki log fonksiyonu, bir mesajı kaydeder; bu mesaj daha sonra işlenebilir, bir sunucuya
   * gönderilebilir veya bir dosyaya yazılabilir.
   * @param {string} message - "message" parametresi, "log" fonksiyonunda işlemek veya ele almak istediğiniz
   * log mesajını temsil eden bir dizedir. Bu mesaj, hata ayıklama bilgileri, durum güncellemeleri veya hata
   * mesajları gibi kaydetmek veya göstermek istediğiniz herhangi bir metin veya bilgi olabilir.
   */
  public log(message: string): void {
    // Log mesajlarını burada işleyebilirsiniz, örneğin konsola basabilirsiniz.
    console.log(message);
    // Ayrıca burada mesajları sunucuya gönderme, dosyaya yazma gibi işlemler de yapılabilir.
  }

  /**
   * "error" fonksiyonu, bir hata mesajını kaydeder ve aynı zamanda hata raporlama servislerine bilgi gönderebilir.
   * @param {string} errorMessage - "errorMessage" parametresi, meydana gelen hatayı açıklayan bir dizedir.
   * Hata kodunda hataları kaydetmek ve işlemek için "error" yöntemine giriş olarak kullanılır.
   */
  public error(errorMessage: string): void {
    // Hata mesajlarını işlemek için ayrı bir metod.
    console.error('! ' + errorMessage);
    // Burada hata raporlama servislerine de bilgi gönderilebilir.
  }

  /**
   * Warn fonksiyonu, console.warn yöntemini kullanarak bir uyarı mesajını kaydeder.
   * Ayrıca, uyarıları raporlamak için farklı bir servisin kullanılması önerisini içeren bir yorum içerir.
   * @param {string} warningMessage - "warningMessage" parametresi, kaydetmek veya göstermek istediğiniz
   * uyarı mesajını temsil eden bir dizedir.
   */
  public warn(warningMessage: string): void {
    // Uyarı mesajlarını işlemek için ayrı bir metod.
    console.warn(warningMessage);
    // Uyarıları raporlamak için farklı bir servis kullanılabilir.
  }

  // İhtiyaca göre debug, info gibi diğer log seviyeleri de eklenebilir.
}
