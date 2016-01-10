console.log("Script processed.");

$(document).ready(function(){
	//Creates input masks using jquery.inputmask plug in.
	$("#phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#r1Phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#r2Phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#r3Phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#company1Phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#company2Phone").inputmask("mask", {"mask": "(999)999-9999", "clearIncomplete": true});
	$("#SSN").inputmask("mask", {"mask": "999-99-9999", "clearIncomplete": true});
	$("#zip").inputmask("mask", {"mask": "99999[-9999]", greedy: false, "clearIncomplete": true});
	
	//Gives the first text input focus
	$('#fName').focus();

	//Initially hides the divs of the optional questions.
	$('.optional').slideUp();
	
	//Sets the checked attribute for all radio inputs to the no option when the page loads.
	$('input[type="radio"][value="0"]').attr('checked', true);
	
	//Form validation.
	$('#appForm').validate({
		rules: {
		//Validation rules for personal Div.
			fName: {
				required: true
			},
			mName: {
				required: true
			},
			lName: {
				required: true
			},
			SSN: {
				required: true
			},
			address: {
				required: true
			},
			city: {
				required: true
			},
			zip: {
				required: true,
			},
			phone: {
				required: true
			},
			email: {
				email: true
			},
			
			//Validation rules for additional div.
			availableDate: {
				required: true,
				date: true
			},
			salary: {
				required: true,
			},
				//Only needs to be validated if the div this belongs to is shown.
			previousEmpFrom: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			previousEmpTo: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			felonExp: {
				required: true
			},
			
			//Validation rules for references div.
			r1Name: {
				required: true
			},
			r1Relationship: {
				required: true
			},
			r1Company: {
				required: true
			},
			r1Phone: {
				required: true
			},
			r1Address: {
				required: true
			},
			r2Name: {
				required: true
			},
			r2Relationship: {
				required: true
			},
			r2Company: {
				required: true
			},
			r2Phone: {
				required: true
			},
			r2Address: {
				required: true
			},
			r3Name: {
				required: true
			},
			r3Relationship: {
				required: true
			},
			r3Company: {
				required: true
			},
			r3Phone: {
				required: true
			},
			r3Address: {
				required: true
			},
			
			//Validation rules for education div. 
				//Only needs to be validated if the div this belongs to is shown.
			hs: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			hsAddress: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			hsStartDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			hsEndDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			diploma: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			collegeName: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			collegeAddress: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			collegeStartDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			collegeEndDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			degree: {
				required: true
			},
			
			//Validation rules for employment div. 
				//Only needs to be validated if the div this belongs to is shown.
			company1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			company1Phone: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyAddress1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companySupervisor1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyTitle1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyStartSalary1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyEndSalary1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			resp1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			c1StartDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			c1EndDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			leaving1: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			company2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			company2Phone: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyAddress2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companySupervisor2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyTitle2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyStartSalary2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			companyEndSalary2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			resp2: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			c2StartDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			c2EndDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			leaving2: {
				required: true
			},
			
			//Validation rules for military div. 
				//Only needs to be validated if the div this belongs to is shown.
			milBranch: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			milRank: {
				required: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			milStartDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			milEndDate: {
				required: true,
				date: true
			},
				//Only needs to be validated if the div this belongs to is shown.
			milDischarge: {
				required: true
			},
			
			//Validation rules for dsTab Tab.
			signature: {
				required: true
			}
		},
		messages: {
			//Validation messages for personal div.
			fName: 'Your first name is required.',
			mName: 'Your middle initial or name is required.',
			lName: 'Your last name is required.',
			SSN: 'Your social security number is required.',
			address: 'Your address is required.',
			city: 'Your city is required.',
			zip: 'Your zip code is required.',
			phone: 'Your phone is required.',
			email: 'Your email is not in a valid email format.',
			//Validation messages for additional div.
			availableDate: 'Please specify what date you would be available.',
			salary: 'Please specify your desired salary.',
			previousEmpFrom: 'Please specify when you started working for this compnay.',
			previousEmpTo: 'Please specify when you left the company.',
			felonExp: 'Please explain the felony you were convicted with.',
			//Validation messages for references div.
			r1Name: 'Please provide this reference.',
			r1Relationship: 'Please specify your relationship to this reference.',
			r1Company: 'Please specify what company this reference is employed with.',
			r1Phone: "Please provide this reference's phone number.",
			r1Address: "Please provide this reference's address.",
			r2Name: 'Please provide this reference.',
			r2Relationship: 'Please specify your relationship to this reference.',
			r2Company: 'Please specify what company this reference is employed with.',
			r2Phone: "Please provide this reference's phone number.",
			r2Address: "Please provide this reference's address.",
			r3Name: 'Please provide this reference.',
			r3Relationship: 'Please specify your relationship to this reference.',
			r3Company: 'Please specify what company this reference is employed with.',
			r3Phone: "Please provide this reference's phone number.",
			r3Address: "Please provide this reference's address.",
			//Validation messages for education div.
			hs: 'Please provide the name of the high school you graduated from.',
			hsAddress: 'Please provide the address.',
			hsStartDate: 'Please specify when you started high shcool.',
			hsEndDate: 'Please specify when you graduated high school.',
			diploma: 'Please provide what kind of diploma you received.',
			collegeName: 'Please provide the name of the college or university you graduated from.',
			collegeAddress: 'Please provide the address.',
			collegeStartDate: 'Please specify when you started college.',
			collegeEndDate: 'Please specify when you graduated college.',
			degree: 'Please provide what degree you received.',
			//Validation messages for employment div.
			company1: 'Please provide the company name.',
			company1Phone: 'Please provide the companies phone number.',
			companyAddress1: 'Please provide the companies address.',
			companySupervisor1: 'Please specify your last supervisor while employed with this company.',
			companyTitle1: 'Please provide your last job title while employed with this company.',
			companyStartSalary1: 'Please provide your starting salary.',
			companyEndSalary1: 'Please provide the salary you left with.',
			resp1: 'Please describe your job responsibilities.',
			c1StartDate: 'Please specify when you started working for this company.',
			c1EndDate: 'Please specify when you left the company.',
			leaving1: 'Please describe why you left the company.',
			company2: 'Please provide the company name.',
			company2Phone: 'Please provide the companies phone number.',
			companyAddress2: 'Please provide the companies address.',
			companySupervisor2: 'Please specify your last supervisor while employed with this company.',
			companyTitle2: 'Please provide your last job title while employed with this company.',
			companyStartSalary2: 'Please provide your starting salary.',
			companyEndSalary2: 'Please provide the salary you left with.',
			resp2: 'Please describe your job responsibilities.',
			c2StartDate: 'Please specify when you started working for this company.',
			c2EndDate: 'Please specify when you left the company.',
			leaving2: 'Please describe why you left the company.',
			//Validation messages for military div.
			milBranch: 'Please provide what military branch you served in.',
			milRank: 'Please specify your last ranking while enrolled.',
			milStartDate: 'Please specify when you joined the military.',
			milEndDate: 'Please specify when you were discharged from the military.',
			milDischarge: 'Please specify the type of discharge.',
			//Validation messages for dsTab Tab.
			signature: 'To submit the application you must provide a digital signature.'
		},
		errorPlacement: function(error, element) {
			var trigger = element.next('.ui-datepicker-trigger');
			error.insertAfter(trigger.length > 0 ? trigger : element);
		},
		errorElement: 'div'
	});
	
	//Enables the JQuery UI tab set.
	$("#tabs").tabs({
		disabled:[1,2]
	});
	
	//Enables the JQuery UI accordion set.
	$(".accordionGroup").accordion({
		//Fills the accordion with the content only.
		heightStyle: "content", 
		disabled: true
	});
	
	//Enables the JQuery UI button.
	$("#formSubmit").button();
	$('.next').button();
	$('.back').button();
	
	//Enables the JQuery UI datepicker for the control with ID: availableDate
	$(function(){
		$("#availableDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeYear: true,
			changeMonth: true,
			onClose: function(){
				this.focus();
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the controls ID: previousEmpFrom, ID: previousEmpTo
	$(function() {
		$("#previousEmpFrom").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#previousEmpTo").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#previousEmpTo").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#previousEmpFrom").datepicker("option", "maxDate", selectedDate);
				this.focus();
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the controls ID: hsStartDate, ID: hsEndDate
	$(function() {
		$("#hsStartDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#hsEndDate").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#hsEndDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#hsStartDate").datepicker("option", "maxDate", selectedDate);
				this.focus();
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the controls ID: collegeStartDate, ID: collegeEndDate
	$(function() {
		$("#collegeStartDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#collegeEndDate").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#collegeEndDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#collegeStartDate").datepicker("option", "maxDate", selectedDate);
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the controls ID: c1StartDate, ID: c1EndDate
	$(function() {
		$("#c1StartDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#c1EndDate").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#c1EndDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#c1StartDate").datepicker("option", "maxDate", selectedDate);
				this.focus();
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the controls ID: c1StartDate, ID: c1EndDate
	$(function() {
		$("#c2StartDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#c2EndDate").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#c2EndDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#c2StartDate").datepicker("option", "maxDate", selectedDate);
				this.focus();
			}
		});
	});
	//Enables the JQuery UI datepicker for the controls ID: milStartDate, ID: milEndDate
	$(function() {
		$("#milStartDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				$("#milEndDate").datepicker("option", "minDate", selectedDate);
				this.focus();
			}
		});
		$("#milEndDate").datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			onClose: function( selectedDate ) {
				$("#milStartDate").datepicker("option", "maxDate", selectedDate);
				this.focus();
			}
		});
	});
	
	//Enables the JQuery UI datepicker for the control with ID: availableDate. Populates the field with today's date then disables the control.
	var curDate = new Date();
	$(function(){
		$("#signatureDate").datepicker().datepicker('setDate',curDate);
		$('#signatureDate').attr('disabled',true);
	});
	
	//Shows the authWork div.
	$('input[name="citizen"]').click(function(){
		var citizen = $(this).val();
		//console.log(citizen);
		if(citizen == '1'){
			$('#authWork').slideDown();
		} else {
			$('input[name="authorizedWork"]').attr('checked', false);
			$('#authWork').slideUp();
		}
	});
	
	//Shows the previousEmpDates div.
	$('input[name="previousEmp"]').click(function(){
		var prevEmp = $(this).val();
		//console.log(prevEmp);
		if(prevEmp == '1'){
			$('#previousEmpDates').slideDown();
		} else {
			$('#previousEmpFrom').val('');
			$('#previousEmpTo').val('');
			$('#previousEmpDates').slideUp();
		}
	});
	
	//Shows the felony div.
	$('input[name="felon"]').click(function(){
		var felon = $(this).val();
		//console.log(felon);
		if(felon =='1'){
			$('#felony').slideDown();
			$('#felonExp').focus();
		} else {
			$('#felonExp').val('');
			$('#felony').slideUp();
		}
	});
	
	//Shows the hsInfo div.
	$('input[name="hsGrad"]').click(function(){
		var hs = $(this).val();
		//console.log(hs);
		if(hs =='1'){
			$('#hsInfo').slideDown();
			$('#hs').focus();
		} else {
			$('#hs').val('');
			$('#hsAddress').val('');
			$('#hsStartDate').val('');
			$('#hsEndDate').val('');
			$('#diploma').val('');
			$('#hsInfo').slideUp();
		}
	});
	
	//Shows the collegeInfo div.
	$('input[name="collegeGrad"]').click(function(){
		var col = $(this).val();
		//console.log(col);
		if(col =='1'){
			$('#collegeInfo').slideDown();
			$('#collegeName').focus();
		} else {
			$('#collegeName').val('');
			$('#collegeAddress').val('');
			$('#collegeStartDate').val('');
			$('#collegeEndDate').val('');
			$('#degree').val('');
			$('#collegeInfo').slideUp();
		}
	});
	
	//Shows the empInfo div.
	$('input[name="empHis"]').click(function(){
		var empHis = $(this).val();
		//console.log(empHis);
		if(empHis =='1'){
			$('#empInfo').slideDown();
			$('#company1').focus();
		} else {
			$('#company1').val('');
			$('#company1Phone').val('');
			$('#companyAddress1').val('');
			$('#companySupervisor1').val('');
			$('#companyTitle1').val('');
			$('#companySartSalary1').val('');
			$('#companyEndSalary1').val('');
			$('#resp1').val('');
			$('#c1StartDate').val('');
			$('#c1EndDate').val('');
			$('#leaving1').val('');
			$('input[name="contPrevSup1"]').attr('checked', false);
			$('#empInfo').slideUp();
		}
	});
	
	//Shows the additEmpInfo div.
	$('input[name="additEmp"]').click(function(){
		var additEmp = $(this).val();
		//console.log(additEmp);
		if(additEmp =='1'){
			$('#additEmpInfo').slideDown();
			$('#company2').focus();
		} else {
			$('#company2').val('');
			$('#company2Phone').val('');
			$('#companyAddress2').val('');
			$('#companySupervisor2').val('');
			$('#companyTitle2').val('');
			$('#companySartSalary2').val('');
			$('#companyEndSalary2').val('');
			$('#resp2').val('');
			$('#c2StartDate').val('');
			$('#c2EndDate').val('');
			$('#leaving2').val('');
			$('input[name="contPrevSup2"]').attr('checked', false);
			$('#additEmpInfo').slideUp();
		}
	});
	
	//Shows the militaryInfo div.
	$('input[name="militaryEnrol"]').click(function(){
		var milEnrol = $(this).val();
		//console.log(milEnrol);
		if(milEnrol =='1'){
			$('#militaryInfo').slideDown();
			$('#milBranch').focus();
		} else {
			$('#milBranch').val('');
			$('#milRank').val('');
			$('#milStartDate').val('');
			$('#milEndDate').val('');
			$('#milDischarge').val('');
			$('#militaryInfo').slideUp();
		}
	});
	
	//Applies focus to the first control in the accoridon if the accordion is selected.
	$('#personalDiv').click(function(){
		$('#fName').focus();
	});
	$('#additionalDiv').click(function(){
		$('#position').focus();
	});
	$('#referencesDiv').click(function(){
		$('#r1Name').focus();
	});
	
	//Applies focus to the signature control when the signature tab is selected.
	$('#dsTabNav').click(function(){
		$('#signature').focus();
	});
	
	//Moves to the second accordion set if the form fields are valid.
	//Personal accordion.
	$('#next1').click(function(){
		if ($('#appForm').valid()){
			$('.accordionGroup').accordion({
				enable: true,
				active: 1
			});
			$('#position').focus();
		}
	});
	
	//Additional accordion.
	$('#back1').click(function(){
		$('.accordionGroup').accordion({
				enable: true,
				active: 0
		});
		$('#fName').focus();
	});
	
	$('#next2').click(function(){
		if ($('#appForm').valid()){
			$('.accordionGroup').accordion({
				enable: true,
				active: 2
			});
			$('#r1Name').focus();
		}
	});
	
	//References accordion.
	$('#back2').click(function(){
		$('.accordionGroup').accordion({
				enable: true,
				active: 1
		});
		$('#position').focus();
	});
	
	$('#next3').click(function(){
		if ($('#appForm').valid()){
			$("#tabs").tabs({
				disabled:[0,2],
				active:1
			});
			$('.accordionGroup').accordion({
				enable: true,
				active: 0
		});
		}
	});
	
	//Education accordion.
	$('#back3').click(function(){
		$("#tabs").tabs({
			disabled:[1,2],
			active:0
		});
		$('.accordionGroup').accordion({
			enable: true,
			active: 2
		});
		$('#r1Name').focus();
	});
	
	$('#next4').click(function(){
		if ($('#appForm').valid()){
			$('.accordionGroup').accordion({
				enable: true,
				active: 1
			});
		}
	});
	
	//Employment accordion.
	$('#back4').click(function(){
		$('.accordionGroup').accordion({
			enable: true,
			active: 0
		});
	});
	
	$('#next5').click(function(){
		if ($('#appForm').valid()){
			$('.accordionGroup').accordion({
				enable: true,
				active: 2
			});
		}
	});
	
	//Military accordion.
	$('#back5').click(function(){
		$('.accordionGroup').accordion({
			enable: true,
			active: 1
		});
	});
	
	$('#next6').click(function(){
		if ($('#appForm').valid()){
			$("#tabs").tabs({
				disabled:[0,1],
				active:2
			});
		}
		$('#signature').focus();
	});
	
	//Military accordion.
	$('#back6').click(function(){
		$("#tabs").tabs({
			disabled:[0,2],
			active:1
		});
		$('.accordionGroup').accordion({
			enable: true,
			active: 2
		});
	});
});