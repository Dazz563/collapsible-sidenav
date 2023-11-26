import {Component} from '@angular/core';
import {DarkModeService} from '../services/dark-mode.service';

@Component({
	selector: 'app-sidenav-menu',
	templateUrl: './sidenav-menu.component.html',
	styleUrls: ['./sidenav-menu.component.scss'],
})
export class SidenavMenuComponent {
	isOpen = false;
	isDark!: boolean;

	constructor(public darkModeService: DarkModeService) {
		this.darkModeService.isDark$.subscribe((isDark) => {
			this.isDark = isDark;
			this.setDarkMode(isDark);
		});
	}

	ngOnInit(): void {}

	toggleMenu() {
		this.isOpen = !this.isOpen;
	}

	toggleDarkMode() {
		this.darkModeService.toggleDarkMode();
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
