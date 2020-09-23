document.addEventListener('DOMContentLoaded', function() {
  const navBar = document.getElementById('navbar');
  const challenges = document.getElementById('content');

  function getId(element) {
    return element.id.slice(-1);
  }

  function changeChallenge(identifier) {
    document.getElementsByClassName('active')[0].classList.remove('active')
    document.getElementById(`challenge${identifier}`).classList.add('active');
  }

  function checkAnswerValidity() {
    return 0;
  }

  function updateResultMessage(result, resultHeader) {
    let message;
    message = result ? 'Great Job!' : 'Try Again!';
    resultHeader.innerText = message;
  }

  // Add click events for the validation buttons
  challenges.addEventListener('click', function(e) {
    if (e.target.classList.contains('validate')) {
      e.preventDefault();
      const resultMessage = e.target.nextElementSibling;
      const parentDiv = e.target.parentElement.parentElement;
      const input = parentDiv.children[1];
      const values = parentDiv.children[2];

      console.log(input, values);

      //const validAnswer = checkAnswerValidity();
      const validAnswer = false;
      updateResultMessage(validAnswer, resultMessage);

    }
  });

  // Add Click event for navbar to change challenges
  navBar.addEventListener('click', function(e) {
    if (e.target.classList.contains('NavBar-Selector')) {
      e.preventDefault();
      const challengeId = getId(e.target)
      changeChallenge(challengeId);
    }
  });
});