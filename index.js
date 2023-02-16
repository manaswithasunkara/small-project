let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let admin = document.querySelector(".admin")
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

// admin.addEventListener("click", () => {
// 	slider.classList.add("moveslider2");
// 	formSection.classList.add("form-section-move2");
// });

// admin.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

// signup.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });


function myFunction(){
	window.open("./user.html")
}

function myFunction2(){
	window.open("./admin.html")
}















function validate() {
	var fname = document.reg_form.fname;
	var lname = document.reg_form.lname;
	var address = document.reg_form.address;
	var gender = document.reg_form.gender;
	var email = document.reg_form.email;
	var mobile = document.reg_form.mobile;
	var course = document.reg_form.course;

	if (fname.value.length <= 0) {
		alert("Name is required");
		fname.focus();
		return false;
	}
	if (lname.value.length <= 0) {
		alert("Last Name is required");
		lname.focus();
		return false;
	}
	if (address.value.length <= 0) {
		alert("Address is required");
		address.focus();
		return false;
	}
	if (gender.value.length <= 0) {
		alert("Gender is required");
		gender.focus();
		return false;
	}
	if (email.value.length <= 0) {
		alert("Email Id is required");
		email.focus();
		return false;
	}
	if (mobile.value.length <= 0) {
		alert("Mobile number is required");
		mobile.focus();
		return false;
	}
	if (course.value == "select course") {
		alert("Course is required");
		course.focus();
		return false;
	}
	return false;
}



function validate2() {
	var billingdate = document.reg_form.billingdate;
	var batch = document.reg_form.batch;
	var memberCategory = document.reg_form.memberCategory;
	var feeplan = document.reg_form.feeplan;
	var registerdate = document.reg_form.registerdate;
	var gridRadios = document.reg_form.gridRadios;
	var registrationfee = document.reg_form.registrationfee;

	if (billingdate.value.length <= 0) {
		alert("Biling Date is required");
		billingdate.focus();
		return false;
	}
	if (batch.value.length <= 0) {
		alert("Batch is required");
		batch.focus();
		return false;
	}
	if (memberCategory.value.length <= 0) {
		alert("member Category is required");
		memberCategory.focus();
		return false;
	}
	if (feeplan.value.length <= 0) {
		alert("feeplan is required");
		feeplan.focus();
		return false;
	}
	if (registerdate.value.length <= 0) {
		alert("registerdate Id is required");
		registerdate.focus();
		return false;
	}
	if (gridRadios.value.length <= 0) {
		alert("gridRadios is required");
		gridRadios.focus();
		return false;
	}
	if (registrationfee.value == "select course") {
		alert("registrationfee is required");
		registrationfee.focus();
		return false;
	}
	return false;
}





