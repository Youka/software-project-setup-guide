import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANGUAGES = [
  {
    id: "en",
    display: "English"
  },
  {
    id: "de",
    display: "Deutsch"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly translate: TranslateService) {
    this.translate.defaultLang = LANGUAGES[0].id;
    this.translate.langs = LANGUAGES.map(lang => lang.id);
    this.translate.use(localStorage.getItem("lang") || this.translate.getBrowserLang() || this.translate.defaultLang);
  }

  getLang(): typeof LANGUAGES[0] | undefined {
    return LANGUAGES.find(lang => lang.id == this.translate.currentLang);
  }
  getLangs(): typeof LANGUAGES {
    return LANGUAGES;
  }
  setLang(event: Event) {
    this.translate.use((event.target as HTMLOptionElement).value);
  }
}
