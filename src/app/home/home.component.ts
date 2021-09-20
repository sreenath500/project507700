import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm: any = FormGroup;
  PostData: any;
  editValue: Boolean = false;
  selectedData: any = ''

  foods: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];


  qualification: any = [
    { value: '0', viewValue: 'MBA' },
    { value: '1', viewValue: 'MCA' },
    { value: '2', viewValue: 'BSC' }
  ];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.createSlotForm();
    this.getAssignmentData();
  }

  createSlotForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      manager: new FormControl('', Validators.required),
    });
  }

  updateSlotForm(data: any) {
    this.registerForm = new FormGroup({
      email: new FormControl(data.email, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      mobile: new FormControl(data.mobile, [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      name: new FormControl(data.name, Validators.required),
      designation: new FormControl(data.designation, Validators.required),
      salary: new FormControl(data.salary, Validators.required),
      qualification: new FormControl(data.qualification, Validators.required),
      manager: new FormControl(data.manager, Validators.required),
    });
  }

  getAssignmentData() {
    this.commonService
      .getSpeciality()
      .subscribe(
        (data) => {
          console.log('data', data);
          this.PostData = data;
        },
        (error) => {
          console.log('error', error);
        }
      );
  }

  create() {
    console.log('value', this.registerForm.value);
    this.commonService
      .createBlogs(this.registerForm.value)
      .subscribe(
        (data: any) => {
          console.log('data', data);
          this.getAssignmentData();
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

  append(data: any) {
    this.editValue = true;
    this.selectedData = data;
    this.updateSlotForm(data);
  }

  edit() {
    console.log('value', this.registerForm.value);
    this.commonService
      .updateAppointment(this.selectedData, this.selectedData.id)
      .subscribe(
        (data: any) => {
          console.log('data', data);
          this.getAssignmentData();
          this.selectedData = ''
          this.editValue = false;
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

  delete(data: any) {
    this.commonService
      .deleteFav(data.id)
      .subscribe(
        (data: any) => {
          console.log('data', data);
          this.getAssignmentData();
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

}
