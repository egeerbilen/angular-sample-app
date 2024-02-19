# FragmentarySimpleApp

Bu proje, [Angular CLI](https://github.com/angular/angular-cli) sürüm 16.0.5 ile oluşturulmuştur.

## Development Server

Geliştirme sunucusunu başlatmak için `ng serve` komutunu çalıştırın. Tarayıcınızı `http://localhost:4200/` adresine giderek açın. Uygulama, kaynak dosyalarınızdan herhangi birini değiştirdiğinizde otomatik olarak yeniden yüklenecektir.

## Code Scaffolding

Yeni bir bileşen oluşturmak için `ng generate component component-name` komutunu kullanın. Ayrıca `ng generate directive|pipe|service|class|guard|interface|enum|module` komutunu da kullanabilirsiniz.

## Build

Proje derlemek için `ng build` komutunu kullanın. Derleme ürünleri `dist/` dizininde saklanacaktır.

## Running Unit Tests

Birim testleri [Karma](https://karma-runner.github.io) aracılığıyla çalıştırmak için `ng test` komutunu kullanın.

## Running End-to-End Tests

Uçtan uca testleri çalıştırmak için `ng e2e` komutunu kullanın. Bu komutu kullanabilmek için önce uçtan uca test yeteneklerini uygulayan bir paket eklemeniz gerekmektedir.

## Further Help

Angular CLI hakkında daha fazla yardım almak için `ng help` komutunu kullanın veya [Angular CLI Overview and Command Reference](https://angular.io/cli) sayfasını kontrol edin.


# JSON Server

Bu proje, JSON dosyalarını temel alan basit bir sahte API sunucusu olan `json-server`'ı kullanır. Bu API, geliştirme sırasında hızlı bir şekilde test verileri sağlamak için kullanışlıdır.

## Kurulum

Proje klasörünüzde terminal veya komut istemcisini açın ve aşağıdaki komutu kullanarak `json-server`'ı yükleyin:

```bash
npm install -g json-server
```

## Java SDK Uyumlu Sürüm

Bu projenin Java SDK 11 ile uyumlu çalıştığı doğrulandı.

## NativeScript

NativeScript, Angular kullanarak natif mobil uygulamalar oluşturmanıza olanak tanıyan başka bir çerçevedir. İşte temel bir rehber:

### Kurulum

Proje klasörünüzde terminal veya komut istemcisini açın ve aşağıdaki adımları takip edin:

1. Android platformunu ekleyin: `npx cap add android`
2. iOS platformunu ekleyin: `npx cap add ios`
3. Angular uygulamanızı derleyin: `ng build`
4. Capacitor ile senkronize edin: `npx cap sync`
5. Android Studio'yu açarak Android uygulamanızı başlatın: `npx cap open android`
6. Xcode'u açarak iOS uygulamanızı başlatın: `npx cap open ios`

Ayrıca, sadece mobil uygulamayı temizlemek ve derlemek için şu komutu kullanabilirsiniz: `npm run cleandai-and-build`

Bu adımlar, Angular uygulamanızı NativeScript kullanarak mobil uygulamaya dönüştürmenize yardımcı olacaktır.

## Kaynaklar

- [Ionic Framework VSCode Extension](https://ionicframework.com/docs/intro/vscode-extension)
- [How to Convert Angular App to Native App](https://bullishlife.com/angular/how-to-convert-angular-app-to-native-app/?expand_article=1)

## Kod Denetimi (Linting)

Proje içindeki TypeScript dosyalarını denetlemek ve hataları tespit etmek için ESLint kullanılmaktadır. Aşağıdaki komutlar, kod denetimi işlemlerini yönetmek için kullanılabilir:

- `npm run lint`: Proje içindeki tüm TypeScript dosyalarını denetler.
- `npm run lintq`: Proje içindeki sadece hataları sessizce gösterir.
- `npm run lintf`: Proje içindeki düzeltilebilecek hataları otomatik olarak düzeltir.

Kod denetimi, kod kalitesini artırmak ve standartlara uygunluğu sağlamak için kullanışlıdır. Bu komutlar sayesinde projenizi düzenli bir şekilde denetleyebilir ve gerekli düzeltmeleri yapabilirsiniz.


## Sık Kullanılan Komutlar

Proje geliştirme sürecinde sıkça kullanılan bazı komutlar aşağıdaki gibidir:

- `json-server --watch db.json`: JSON dosyasına dayalı basit bir sahte API sunucusunu başlatır.
- `npm run cleandai-and-build`: Mobil uygulamayı temizler ve derler.
- `npm start`: Uygulamayı geliştirme sunucusunda başlatır.
- `npm run lintqf`: Proje içindeki hataları sessizce gösterir ve düzeltilebilecek hataları otomatik olarak düzeltir.

Bu komutlar, proje geliştirmenizde sıkça ihtiyaç duyacağınız işlemleri gerçekleştirmenize yardımcı olacaktır. İlgili komutları kullanmadan önce lütfen belirtilen bağlam ve gereksinimleri kontrol edin.
