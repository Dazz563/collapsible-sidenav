import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DarkModeService {
	private isDarkSubject = new BehaviorSubject<boolean>(false);
	isDark$ = this.isDarkSubject.asObservable();

	toggleDarkMode() {
		this.isDarkSubject.next(!this.isDarkSubject.value);
	}
}
