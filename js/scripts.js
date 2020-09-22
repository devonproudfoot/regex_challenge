document.addEventListener('DOMContentLoaded', function() {
  const navBar = document.getElementById('navbar');

  function getId(element) {
    return element.id.slice(-1);
  }

  function changeChallenge(identifier) {
    document.getElementsByClassName('active')[0].classList.remove('active')
    document.getElementById(`challenge${identifier}`).classList.add('active');
  }

  navBar.addEventListener('click', function(e) {
    e.preventDefault();
    const challengeId = getId(e.target)
    changeChallenge(challengeId);
  });
});