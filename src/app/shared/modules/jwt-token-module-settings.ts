import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environment';

import { InterceptorService } from '../../modules/http-request/services/interceptor.service';

export const httpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
};

// JwtModule.forRoot içerisinde ek yapılandırma
export const jwtModule = JwtModule.forRoot({
  config: {
    tokenGetter: () => {
      return localStorage.getItem('bearer_token');
    },
    allowedDomains: [environment.apiUrl], // Bu özellik, JWT'nin hangi alanlardan (domains) gelen isteklere izin verileceğini belirtir.
    // Bu, sunucunun sadece belirli güvenli domainlerden gelen isteklere cevap vermesini sağlayarak
    disallowedRoutes: [environment.apiUrl + 'users'] // disallowedRoutes içinde belirtilen bir rotaya istek atarsanız, JWT tokeni bu istekte kullanılmayacaktır.
  }
});
