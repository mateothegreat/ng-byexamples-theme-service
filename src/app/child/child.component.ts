import { Component }    from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: [ './child.component.scss' ]
})
export class ChildComponent {

    /**
     * Inject the theme service which will be called by our button (click).
     *
     * @param {ThemeService} themeService instance.
     */
    public constructor(public themeService: ThemeService) {

    }

}
