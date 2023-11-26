import {Component} from '@angular/core';
import {DarkModeService} from '../services/dark-mode.service';
import {Subscription} from 'rxjs';

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
			console.log('isDark', isDark);
			this.isDark = isDark;
		});
	}

	ngOnInit(): void {}

	toggleMenu() {
		this.isOpen = !this.isOpen;
	}

	toggleDarkMode() {
		this.darkModeService.toggleDarkMode();
	}
}
