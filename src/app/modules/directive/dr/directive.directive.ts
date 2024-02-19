import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {
  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {
    this._el.nativeElement.style.backgroundColor = 'yellow';
  }

  /**
   * onMouseEnter fonksiyonu, bir öğenin üzerine gelindiğinde vurgu rengini kırmızıya değiştirir.
   */
  @HostListener('mouseenter')
  public onMouseEnter() {
    this._highlight('red');
  }

  /**
   * onMouseLeave fonksiyonu, bir öğenin üzerindeki vurguyu temizler.
   */
  @HostListener('mouseleave')
  public onMouseLeave() {
    this._highlight('');
  }

  /**
   * _highlight fonksiyonu, sağlanan renk parametresini kullanarak bir öğenin arka plan rengini ayarlar.
   * @param {string} color - `_highlight` metodundaki `color` parametresi, öğenin arka plan rengini
   * ayarlamak istediğiniz renk değerini temsil eden bir dizedir. Bu bir renk adı olabilir (örneğin, "red", "blue"),
   * bir onaltılık değer olabilir (örneğin, "#FF0000"),
   */
  private _highlight(color: string) {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', color);
    // Yada bu üsteki şekilde vermek yerine
    // this._el.nativeElement.style.backgroundColor = color; -> bu şekilde yazılada bilir
  }
}
