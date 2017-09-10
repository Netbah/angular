import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { YandexTranslatorService } from './yandex-translator.service';


@Component({
  selector: 'gender-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private translator: YandexTranslatorService) { 
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      text: '',
      note: ''
    });
  }

  getGender(word) { 
    if (word.charAt(0) == word.charAt(0).toUpperCase()) {
      this.translator.getGender(word).subscribe((data: any) => {
        if (data.def.length) {
          const wrap = this.wrap(word, data.def[0].gen);
          this.innerHTML = this.innerHTML.replace(word, wrap);
          this.form.controls.text.setValue(this.innerHTML);
        }  
      });  
    }
  }

  innerHTML: string;

  onclick() { 
    this.innerHTML = this.form.controls.note.value;
    this.form.controls.note.value.split(' ').forEach(word => {
      this.getGender(word);
    });
  }

  wrap(wort, gender) { 
    const html = `<span ${this.colors[gender]}>${wort}</span>`;
    return html;
  }

  colors = {
    'm': 'style="color: rgb(0, 102, 204);"',
    'f': 'style="color: rgb(230, 0, 0);"',
    'n': 'style="color: rgb(0, 138, 0);"'
  }

}
