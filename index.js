/*tion showApplyButtonModal(){
  	var modalBackdrop = document.getElementById('modal-background');
  	var createButtonModal = document.querySelector('apply-button-modal');
	modalBackdrop.classList.remove('hidden');
	createButtonModal.classList.remove('hidden');

}

function closeApplyButtonModal(){
  	var modalBackdrop = document.getElementById('modal-background');
  	var createButtonModal = document.querySelector('apply-button-modal');
	modalBackdrop.classList.add('hidden');
	createButtonModal.classList.add('hidden');
}i*/

function showAddListingModal(){
  	var modalBackdrop = document.getElementById('modal-background');
  	var createButtonModal = document.getElementById('job-listing-modal');
	modalBackdrop.classList.remove('hidden');
	createButtonModal.classList.remove('hidden');
}

function closeAddListingModal(){
  	var modalBackdrop = document.getElementById('modal-background');
  	var createButtonModal = document.getElementById('job-listing-modal');
	modalBackdrop.classList.add('hidden');
	createButtonModal.classList.add('hidden');

	clearInputValues();
}


function showApplyModal() {

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createAppModal.classList.remove('hidden');

}

function closeApplyModal() {

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createAppModal.classList.add('hidden');

  clearInputValues();

}

function clearInputValues() {

  var inputElems = document.getElementsByClassName('text-input-element');
 
  var inputElems = document.getElementsByClassName('text-input-element');
  for (var i = 0; i < inputElems.length; i++) {
    var input = inputElems[i].querySelector('input[type=text], textarea');
	  if(input) 
	     input.value = '';
	  else{
	     input = inputElems[i].querySelectorAll('input');
		  for(var j = 0; j < input.length; j++)
			  input[j].checked = false;
	  }
  }

}

function submitModal() {

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');


  
  var empty = false;
  console.log(empty);
  var currModal = document.querySelectorAll("application-modal");
  console.log(currModal);
  var inputElems = currModal[0].getElementsByClassName('text-input-element');
  for (var i = 0; i < (inputElems.length)-1; i++) {
	console.log(empty);
    var input = inputElems[i].querySelector('input[type=text], textarea');
	 console.log(input);
	 //console.log(input.value);
	 if(input.value == null) {
	     empty = true;
		 console.log(empty);
		 break;
		}
		
  }
  console.log("after loop");
 if(!empty){
	input = inputElems[(inputElems.length)-1].querySelectorAll('input[type=radio]:checked');
	console.log(input.length);
	if (input.length == 0){
		empty = true;

	}
} 
		
  

  if(empty){
	  alert("Missing Required Feild");
  }
  else{
	// Hide the modal and its backdrop.
	modalBackdrop.classList.add('hidden');
	createAppModal.classList.add('hidden');
	clearInputValues();
	alert("After an extensive review, your application has been rejected :("); 
  }
  
  //clearInputValues();
  
  

  //alert("After an extensive review, your application has been rejected :(");
}

function postModal(){
  
  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

  var empty = false;
  console.log(empty);
  var currModal = document.querySelectorAll("job-listing-modal");
  console.log(currModal);
  var inputElems = currModal[0].getElementsByClassName('text-input-element');
  console.log(inputElems);
  for (var i = 0; i < (inputElems.length); i++) {
	console.log(empty);
    var input = inputElems[i].querySelector('input[type=text], textarea');
	 console.log(input);
	 console.log(input.value);
	 if(input.value == "") {
	     empty = true;
		 console.log(empty);
		 break;
		}
		
  }
  
  if(empty){
	  alert("Missing Required Feild");
  }
  else{
  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createAppModal.classList.add('hidden');

  clearInputValues();

  alert("Your job listing has been posted");
  }

}
/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

/*  var openApply = document.querySelector('.img_container');	//Hover over image to show apply button
  openApply.addEventListener('onmouseover', showApplyButtonModal);

  var closeApply = document.querySelector('.img_container');	//close apply button modal
  closeApply.addEventListener('onmouseout', closeApplyButtonModal);*/

  var applyButton = document.querySelectorAll('.apply-button');
	console.log("Apply button:", applyButton[0]);
	for(var j=0; applyButton.length; j++){
  		applyButton[j].addEventListener('click', showApplyModal);
	}

  var addListingButton = document.querySelector('.add-listing');
  addListingButton.addEventListener('click', showAddListingModal);

  var modalCloseButton = document.querySelectorAll('.modal-close');
  for(var i = 0; i < modalCloseButton.length; i++)
	modalCloseButton[i].addEventListener('click', closeApplyModal);

  var modalCancelButton = document.querySelectorAll('.modal-cancel');
  for(var i = 0; i < modalCancelButton.length; i++)
  	modalCancelButton[i].addEventListener('click', closeApplyModal);

  var modalSubmitButton = document.querySelector('.application-modal .modal-submit');
  modalSubmitButton.addEventListener('click', submitModal);

  var modalPostButton = document.querySelector('.job-listing-modal .modal-post');
  modalPostButton.addEventListener('click', postModal);

});
