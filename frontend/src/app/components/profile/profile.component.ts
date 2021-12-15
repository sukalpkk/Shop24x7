import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProfile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userProfile: IProfile;
  public profileImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRcVFRcVFRUXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKzctLS0tKy0tLTctKy0tKy0tLS0rLTctNy0tNzcrLSstKy0tNystLS03Ny0rLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQL/xAAbEAEBAQACAwAAAAAAAAAAAAAAARECQSGBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMkBpCqgChIgALgIBQQDACgBixKsBFAAiKBDQANEBdNAEABNFwBQAAAUEAClAogBoigBADQUAqALqYuoCwCgiighQoIACiII0RNBVIQAMACwAASqCIoABoEAAWIAqABqomg0JS0FEKBANA0VABJAFVIApolACABiAKipAUomABgABAVABRAFKICiALAQAAFMDABbCwEAEAUVCKAhhgAABgQBIKAgpQRSQsBIoYCLYYAYACCggqRRSCkBBUAAoFIACKgAoAyqAohAUAFiKgBAgEUAQFBPAagKugCiKAgUDCiggAFMCArKpQEVAFRQBQEkWxMUCgAkUAChQTAxAbAAEKAKgKioCwADCwgBiYpQSwxUAkXABLFxKoJi4AFMAEWgAUQFQAUSKCCoAasNBFMANRSAAAFIYCKigCKARFgESmLQRQoAAIUoCiYAAAtQoABQUQBYIugAAVFAQCgAaBQAMVABaRAAUEoAINYAkoABQAAAABRACKSgJBUAFQAgAigAkXTRApqioFAAAVFwBDQBSosADUBcIIACgi1FABAUSgBQoFomqAIugCatAVAFEXQT0KAyolBRMAUADUVMBQANVFA0pYAhFARLVANQoABIAEUAEwFEAa0QEQFFEXUBQKBgGgIoAACoAAAJpQwEVAFwAAIAqCggEBQASLABDkALCfQEEAVb00AM0oCAgKLEAU5ACCAixQBIUAVOgBYkAUAEf//Z";
  public userAddressForm : FormGroup ;
  public userAddress:any;
  public isUserAddressFormSubmitted:boolean;
  public isUserAddressEditable:boolean;
  constructor(private formBuilder: FormBuilder) { 
    this.userAddressForm = {} as FormGroup ;
    this.userAddress = {}
    this.isUserAddressFormSubmitted = false;
    this.isUserAddressEditable = false;
    this.userProfile = {
      firstname:"John",
      lastname:"Doe",
      email:"johndoe@gmail.com",
      profileImage:this.profileImg,
      phone:"1234567890",
      interests:"work",
      address:{ streetAddress:"123 N St",
        city:"",
        state:"",
        zipcode:""}
    }
  }

  public ngOnInit(): void {
    this.initializeUserAdressForm();
    this.initializeUserProfile();
  }

  public initializeUserProfile(){
    this.userProfile = {
      firstname:"John",
      lastname:"Doe",
      email:"johndoe@gmail.com",
      profileImage:this.profileImg,
      phone:"1234567890",
      interests:"work",
      address:{ streetAddress:"123 N St",
        city:"",
        state:"",
        zipcode:""}
    }
  }

  public initializeUserAdressForm(){
    this.userAddressForm = this.formBuilder.group({
      streetAdress:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required,Validators.email]],
      zip:['',[Validators.required]],
    })
  }

  get userAddressFormControls(){
    return this.userAddressForm.controls;
  }

  public onSubmitAddress():void{
    this.isUserAddressFormSubmitted = true;
    this.userAddress = this.userAddressForm.getRawValue();
    this.userProfile.address = this.userAddressForm.getRawValue();
    this.isUserAddressEditable = false;
    // this.userformService.postReactiveUsers(this.userProfile).subscribe((response):any=>{
    //   console.log(response,"reactive form")
    // })
  }

  public onEditAddress():void{
    this.isUserAddressEditable = this.isUserAddressEditable? false : true;
  }

  public uploadImage(){

  }

  public deleteImage(){

  }
}
