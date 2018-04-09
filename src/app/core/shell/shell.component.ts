import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <section>
      <app-top-bar></app-top-bar>
      <app-main-content></app-main-content>
    </section>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
