import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('search') searchIcon!: ElementRef;
  @ViewChild('cart') cartIcon!: ElementRef;

  @ViewChildren('input') inputs!: QueryList<ElementRef>

  route!: NavigationEnd;

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
      .subscribe(value => {
        this.route = value;
        setTimeout(() => {
          if (value.url === '/menu' || value.url === '/products') {
            this.showIcons();
          } else {
            this.hideIcons();
          }
        });
      })

  }

  ngOnInit(): void {
    setTimeout(() => {
      const p = this.renderer.createElement('p');
      const text = this.renderer.createText('Prueba en taller');
      this.renderer.appendChild(p, text);
      this.renderer.appendChild(this.searchIcon.nativeElement, p);
    }, 5000);

    setTimeout(() => {
      this.renderer.selectRootElement(this.cartIcon.nativeElement).click();
    }, 5000);


    this.inputs.forEach(val => {
      this.renderer.addClass(val.nativeElement, 'show');
    })
  }

  redirectAbout(): void {
    this.router.navigateByUrl('/about');
    // this.router.navigate(['/about', 'detail']);
  }


  showIcons(): void {
    const elementSearch = this.searchIcon.nativeElement;
    const elementCart = this.cartIcon.nativeElement;
    // this.renderer.setStyle(elementSearch, 'display', 'inline');
    // this.renderer.setStyle(elementCart, 'display', 'inline');
    this.renderer.addClass(elementSearch, 'show');
    this.renderer.addClass(elementCart, 'show');
    this.renderer.removeClass(elementSearch, 'hide');
    this.renderer.removeClass(elementCart, 'hide');
  }

  hideIcons(): void {
    const elementSearch = this.searchIcon.nativeElement;
    const elementCart = this.cartIcon.nativeElement;
    // this.renderer.setStyle(elementSearch, 'display', 'none');
    // this.renderer.setStyle(elementCart, 'display', 'none');
    this.renderer.addClass(elementSearch, 'hide');
    this.renderer.addClass(elementCart, 'hide');
  }

  addValue(): void {
    this.renderer.setAttribute(this.cartIcon.nativeElement, 'test', 'text');
  }

}
