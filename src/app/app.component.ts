import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//here is the error - servers array is not defined
// servers;
  servers=[];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    // const position = id + 1;
    const position = id;
    this.servers.splice(position, 1);
  }
}
