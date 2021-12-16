export interface IProfile{
    firstname:String;
    lastname:String;
    email:String;
    profileImage:String;
    phone:String;
    interests:String;
    address:{
        streetAddress:String;
        city:String;
        state:String;
        zipcode:String;
    };
}

export interface IProfileImage{
    message:String;
}

