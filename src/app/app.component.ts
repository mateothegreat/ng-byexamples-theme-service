import { Component }    from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    /**
     * Inject the theme service which will be called by our button (click).
     *
     * @param {ThemeService} themeService instance.
     */
    public constructor(public themeService: ThemeService) {

    }

}
