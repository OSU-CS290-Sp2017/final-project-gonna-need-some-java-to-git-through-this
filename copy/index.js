
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

/*
 * This function shows the modal to create a twit when the "create twit"
 * button is clicked.
 */
function showApplyModal() {

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

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

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

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
  for (var i = 0; i < inputElems.length; i++) {
    var input = inputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

function submitModal() {

  var modalBackdrop = document.getElementById('modal-background');
  var createAppModal = document.getElementById('application-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createAppModal.classList.add('hidden');

  clearInputValues();

  alert("Your application has been rejected :(");
}
/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var openApply = document.querySelector('.img_container');	//Hover over image to show apply button
  openApply.addEventListener('onmouseover', showApplyButtonModal);

  var closeApply = document.querySelector('.img-container');	//close apply button modal
  closeApply.addEventListener('onmouseout', closeApplyButtonModal);

  var applyButton = document.getElementById('apply-button');
  createTwitButton.addEventListener('click', showApplyModal);

  var modalCloseButton = document.querySelector('#application-modal .modal-close');
  modalCloseButton.addEventListener('click', closeApplyModal);

  var modalCancelButton = document.querySelector('#application-modal .modal-cancel');
  modalCancalButton.addEventListener('click', closeApplyModal);

  var modalSubmitButton = document.querySelector('#application-modal .modal-submit');
  modalAcceptButton.addEventListener('click', submitModal);

});
