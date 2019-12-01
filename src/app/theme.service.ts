import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    /**
     * Variable to hold our setting.
     */
    public darkMode: boolean;

    /**
     * Enable/disable "dark mode" by flipping the bit.
     */
    public toggle(): void {

        this.darkMode = !this.darkMode;

    }

}
