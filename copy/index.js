/*
 * This function shows the modal to create a twit when the "create twit"
 * button is clicked.
 */
function showCreateTwitModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('create-twit-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createTwitModal.classList.remove('hidden');

}

/*
 * This function hides the modal to create a twit and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function closeCreateTwitModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('create-twit-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createTwitModal.classList.add('hidden');

  clearTwitInputValues();

}

/*
 * This function clears any value present in any of the twit input elements.
 */
function clearTwitInputValues() {

  var twitInputElems = document.getElementsByClassName('twit-input-element');
  for (var i = 0; i < twitInputElems.length; i++) {
    var input = twitInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  // Remember all of the existing twits in an array that we can use for search.
  var twitElemsCollection = document.getElementsByClassName('twit');
  for (var i = 0; i < twitElemsCollection.length; i++) {
    allTwitElems.push(twitElemsCollection[i]);
  }

  var createTwitButton = document.getElementById('create-twit-button');
  createTwitButton.addEventListener('click', showCreateTwitModal);

  var modalCloseButton = document.querySelector('#create-twit-modal .modal-close-button');
  modalCloseButton.addEventListener('click', closeCreateTwitModal);

  var modalCancalButton = document.querySelector('#create-twit-modal .modal-cancel-button');
  modalCancalButton.addEventListener('click', closeCreateTwitModal);

  var modalAcceptButton = document.querySelector('#create-twit-modal .modal-accept-button');
  modalAcceptButton.addEventListener('click', insertNewTwit);

  var searchButton = document.getElementById('navbar-search-button');
  searchButton.addEventListener('click', doTwitSearch);

  var searchInput = document.getElementById('navbar-search-input');
  searchInput.addEventListener('input', doTwitSearch);

});
