import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    public darkMode: boolean;

    public toggle(): void {

        this.darkMode = !this.darkMode;

    }

}
