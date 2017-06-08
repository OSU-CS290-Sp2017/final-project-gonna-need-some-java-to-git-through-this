function showApplyButtonModal(){
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
}

function showAddListingModal(){
  	var modalBackdrop = document.getElementById('modal-job-background');
  	var createButtonModal = document.querySelector('job-listing-modal');
	modalBackdrop.classList.remove('hidden');
	createButtonModal.classList.remove('hidden');
}

function closeAddListingModal(){
  	var modalBackdrop = document.getElementById('modal-job-background');
  	var createButtonModal = document.querySelector('job-listing-modal');
	modalBackdrop.classList.add('hidden');
	createButtonModal.classList.add('hidden');

	clearInputValues();
}

/*
 * This function shows the modal to create a twit when the "create twit"
 * button is clicked.
 */
function showApplyModal() {

  var modalBackdrop = document.getElementById('modal-apply-background');
  var createAppModal = document.querySelector('.application-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createAppModal.classList.remove('hidden');

}

/*
 * This function hides the modal to create a twit and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function closeApplyModal() {

  var modalBackdrop = document.getElementById('modal-apply-background');
  var createAppModal = document.querySelector('.application-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createAppModal.classList.add('hidden');

  clearInputValues();

}

/*
 * This function clears any value present in any of the twit input elements.
 */
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
  var createAppModal = document.querySelector('.application-modal');


  
  var empty = false;
  console.log(empty);
  var inputElems = document.getElementsByClassName('text-input-element');
  console.log(inputElems.length)
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
  var createAppModal = document.querySelector('.application-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createAppModal.classList.add('hidden');

  clearInputValues();

  alert("Your job listing has been posted");
}
/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var openApply = document.querySelector('.img_container');	//Hover over image to show apply button
  openApply.addEventListener('onmouseover', showApplyButtonModal);

  var closeApply = document.querySelector('.img_container');	//close apply button modal
  closeApply.addEventListener('onmouseout', closeApplyButtonModal);

  var applyButton = document.querySelector('.apply-button');
  applyButton.addEventListener('click', showApplyModal);

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
