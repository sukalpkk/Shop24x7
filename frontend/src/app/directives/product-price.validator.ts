export function Price(controlName: string, matchingControlName: string) {
    return (formGroup: any) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl && matchingControl.errors && !matchingControl.errors.price) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value > matchingControl.value) {
            matchingControl.setErrors({ appProductPrice: true });
            return;
        } else {
            matchingControl.setErrors(null);
            return;
        }
    }
}
