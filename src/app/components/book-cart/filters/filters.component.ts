import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() frmResulte = new EventEmitter();
  frmFilter: FormGroup;;
  constructor(protected _frmbuild: FormBuilder) {
    this.frmFilter = _frmbuild.group({
      maximo: new FormControl('', []),
      minimo: new FormControl('', []),
    })
  }
  ngOnInit(): void {
  }
  submitForm(eventForm: Event) {
    eventForm.preventDefault();
    this.frmResulte.emit(this.frmFilter.value)
  }
}
