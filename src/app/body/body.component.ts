import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'productos', cols: 1, rows: 1 },
          { title: 'productos', cols: 1, rows: 1 },
          { title: 'productos', cols: 1, rows: 1 },
          { title: 'productos', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'productos de promocion', cols: 2, rows: 1 },
        { title: 'productos de promocion', cols: 1, rows: 1 },
        { title: 'productos de promocion', cols: 1, rows: 2 },
        { title: 'productos de promocion', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}


}
