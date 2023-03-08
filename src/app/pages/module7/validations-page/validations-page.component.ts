import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations-page',
  templateUrl: './validations-page.component.html',
  styleUrls: ['./validations-page.component.scss']
})
export class ValidationsPageComponent implements OnInit {

  ngOnInit(): void {
    this.addValidation()
  }


  // Example starter JavaScript for disabling form submissions if there are invalid fields
  private addValidation() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  }

}
