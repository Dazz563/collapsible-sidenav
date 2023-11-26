import {Component} from '@angular/core';
import {DarkModeService} from './services/dark-mode.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(private darkModeService: DarkModeService) {}

	ngOnInit() {
		this.darkModeService.isDark$.subscribe((isDark) => {
			this.setDarkMode(isDark);
		});
	}

	private setDarkMode(isDark: boolean) {
		const body = document.getElementsByTagName('body')[0];
		if (isDark) {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}
	}
}
