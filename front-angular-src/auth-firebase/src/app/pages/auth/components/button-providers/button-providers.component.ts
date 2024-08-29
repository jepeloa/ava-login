import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../../../../core/services/auth.service';

export type Provider = 'github' | 'google';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'app-button-providers',
  templateUrl: './button-providers.component.html',
  styleUrls: ['./button-providers.component.scss'],
})
export class ButtonProviders {
  @Input() isLogin = false;

  private _authService = inject(AuthService);
  private _router = inject(Router);

  providerAction(provider: Provider): void {
    if (provider === 'google') {
      this.signUpWithGoogle();
    } else {
      this.signUpWithGithub();
    }
  }

  async signUpWithGoogle(): Promise<void> {
    try {
      const result = await this._authService.signInWithGoogleProvider();

      if (result && result.user && result.user.email) {
        const email = result.user.email;
        const domain = email.split('@')[1];
  
        if (domain !== 'mapplics.com') {
          console.error('Solo se permite el dominio avalian.com');
          await this._authService.logOut();  //deslogue automaticamente
          return; // Detener el flujo si el dominio no es avalian.com
        }
      }

      console.log("voy a imprimir el mail")
      console.log(result.user.email)
      this._router.navigateByUrl('/');
      //console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async signUpWithGithub(): Promise<void> {
    try {
      const result = await this._authService.signInWithGithubProvider();
      this._router.navigateByUrl('/');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
