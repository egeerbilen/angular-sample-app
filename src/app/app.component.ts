import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

import { TreeItem } from './modules/dto/TreeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpenNavBar = false;
  windowWidth = 0;
  selectedKeys: string[] = [];
  keys: string[] = [];
  treeData: TreeItem[] = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Two Way Binding',
      link: '/twoWayBinding'
    },
    {
      text: 'Ng If & Ng Template',
      link: '/ngIf'
    },
    {
      text: 'Ng Style',
      link: '/ngStyle'
    },
    {
      text: 'Ng For',
      link: '/ngFor'
    },
    {
      text: 'Parent To Child',
      link: '/parentToChild'
    },
    {
      text: 'Child To Parent',
      link: '/childToParent'
    },
    {
      text: 'Ng Content',
      link: '/ngContent'
    },
    {
      text: 'Life Cycle ',
      link: '/lifeCycle',
      items: [
        {
          text: 'Ng On Changes ',
          link: '/lifeCycle/ngOnChanges'
        },
        {
          text: 'Ng On Init ',
          link: '/lifeCycle/ngOnInit'
        },
        {
          text: 'Ng Do Check ',
          link: '/lifeCycle/ngDoCheck'
        },
        {
          text: 'Ng After Content Init ',
          link: '/lifeCycle/ngAfterContentInit'
        },
        {
          text: 'Ng After Content Checked ',
          link: '/lifeCycle/ngAfterContentChecked'
        },
        {
          text: 'Ng After View Init ',
          link: '/lifeCycle/ngAfterViewInit'
        },
        {
          text: 'Ng After View Checked ',
          link: '/lifeCycle/ngAfterViewChecked'
        },
        {
          text: 'Ng On Destroy ',
          link: '/lifeCycle/ngOnDestroy'
        }
      ]
    },
    {
      text: 'On Navigate',
      link: '/onNavigate'
    },
    {
      text: 'Directive',
      link: '/directive'
    },
    {
      text: 'Logging Service',
      link: '/loggingService'
    },
    {
      text: 'Ng Router',
      link: '/ngRouter'
    },
    {
      text: 'Http Request',
      link: '/httpRequest'
    },
    {
      text: 'Can Active',
      link: '/canActive',
      items: [
        {
          text: 'Can Active Child',
          link: '/canActive/canActiveChild'
        }
      ]
    },
    {
      text: 'Can Deactivate',
      link: '/canDeactivate'
    },
    {
      text: 'Passing Static Data To Route Component',
      link: '/passingStaticDataToRouteComponent'
    },
    {
      text: 'Resolving Dynamic Data Component',
      link: '/resolvingDynamicDataComponent'
    },
    {
      text: 'Observables',
      link: '/observables'
    },
    {
      text: 'Ng Class',
      link: '/ngClass'
    },
    {
      text: 'Reactive Form',
      link: '/reactiveForm'
    },
    {
      text: 'Pipes',
      link: '/pipes'
    },
    {
      text: 'Async Await',
      link: '/asyncAwait'
    },
    {
      text: 'Architectural',
      link: '/architectural'
    },
    {
      text: 'ngRx',
      link: '/ngRx'
    },
    {
      text: 'Designe Pattern',
      link: '/designePattern',
      items: [
        {
          text: 'Abstract Factory',
          link: '/designePattern/abstractFactory'
        },
        {
          text: 'Adapter',
          link: '/designePattern/adapter'
        },
        {
          text: 'Bridge',
          link: '/designePattern/bridge'
        },
        {
          text: 'Builder',
          link: '/designePattern/builder'
        },
        {
          text: 'Chain of Responsibility',
          link: '/designePattern/chainOfResponsibility'
        },
        {
          text: 'Command',
          link: '/designePattern/command'
        },
        {
          text: 'Composite',
          link: '/designePattern/composite'
        },
        {
          text: 'Decorator',
          link: '/designePattern/decorator'
        },
        {
          text: 'Facade',
          link: '/designePattern/facade'
        },
        {
          text: 'Factory Method',
          link: '/designePattern/factoryMethod'
        },
        {
          text: 'Iterator',
          link: '/designePattern/iterator'
        },
        {
          text: 'Observer',
          link: '/designePattern/observer'
        },
        {
          text: 'Prototype',
          link: '/designePattern/prototype'
        },
        {
          text: 'Singleton',
          link: '/designePattern/singleton'
        },
        {
          text: 'Strategy',
          link: '/designePattern/strategy'
        }
      ]
    },
    {
      text: 'Cache Management',
      link: '/cacheManagement'
    },
    {
      text: 'Cookie Management',
      link: '/cookieManagement'
    },
    {
      text: 'Local Storage Management',
      link: '/localStorageManagement'
    },
    {
      text: 'Session Storage Management',
      link: '/sessionStorageManagement'
    },
    {
      text: 'Unit Test',
      link: '/unitTest'
    }
  ];

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.selectedKeys = [this.findItemByLink(this._router.url, this.treeData)];

        if (this.selectedKeys !== null) {
          this.selectedKeys = [this.selectedKeys[0].replace('_', '')];
        }

        let keyNumber = '';
        for (const selectedItem of this.selectedKeys[0]) {
          if (selectedItem === '_') {
            this.handleExpand({ index: keyNumber });
          } else {
            keyNumber = keyNumber + selectedItem;
          }
        }

        this._cdr.detectChanges();
      }
    });

    // Sayfa yüklendiğinde window boyutlarını al
    this._getWindowSize();
  }

  public onSelectionChange(event: any): void {
    if (event.dataItem.link) {
      this._router.navigate([event.dataItem.link]); // navigateByUrl da kullanıla bilir burada
      // this._router.navigateByUrl(event.dataItem.link);
      // Yani, navigate() daha çok parça parça yönlendirme yapmanı sağlar; sample: this.router.navigate(['urun', 1]);
      // navigateByUrl() ise direkt olarak tam bir URL'e gitmeni sağlar.
      // İhtiyacına göre, hangisinin daha uygun olduğunu belirleyebilirsin. sample: this.router.navigateByUrl('/urunler/1');
    }
  }

  public isExpanded = (dataItem: any, index: string) => {
    return this.keys.indexOf(index) > -1;
  };

  public handleCollapse(node: any) {
    this.keys = this.keys.filter((k) => k !== node.index);
  }

  public handleExpand(node: any) {
    this.keys = this.keys.concat(node.index);
  }
  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

  public findItemByLink(linkToFind: string, items: TreeItem[], parentIndex = ''): string {
    for (const index in items) {
      const item = items[index];
      if (item.link === linkToFind) {
        return `${parentIndex}_${index}`;
      }
      if (item.items) {
        const found = this.findItemByLink(linkToFind, item.items, `${parentIndex}_${index}`);
        if (found) {
          return found;
        }
      }
    }
    return '';
  }

  public openNav() {
    document.getElementById('mySidepanel')!.style.width = '350px';
  }

  public closeNav() {
    document.getElementById('mySidepanel')!.style.width = '0';
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    // Pencere boyutları değiştiğinde
    this._getWindowSize();
  }

  private _getWindowSize(): void {
    this.windowWidth = window.innerWidth;
  }
}
