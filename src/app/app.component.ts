import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uvtApp';
  showAlert()
  {
    Swal.fire({
      title: 'Success!',
      text: 'Hello , I am Safwen a Junior Fullstask js developper , Happy to work with on you Angular :) ',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
}
