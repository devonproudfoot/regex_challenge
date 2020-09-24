(function($) {
  function getId(element) {
    return element.attr('id').slice(-1);
  }

  function changeChallenge(identifier) {
    $('.selected').removeClass('selected');
    $(`#challenge${identifier}`).addClass('selected');
  }

  function checkAnswers(regex, $tests) {
    const answerValidity = false;
    const testFor = $tests.find('.to-validate');
    const doNotTestFor = $tests.find('.do-not-validate');

    console.log(testFor, doNotTestFor);

    return answerValidity;
  }

  function updateResultMessage(result, $resultHeader) {
    let message;
    message = result ? 'Great Job!' : 'Try Again!';
    $resultHeader.text(message);
  }

  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    const challengeId = getId($(e.target));
    changeChallenge(challengeId);
  });

  $('.Challenge-Button').on('click', function(e) {
    e.preventDefault();
    const $buttonPressed = $(e.target);
    const $messageHeader = $buttonPressed.siblings('.Challenge-Result');
    const inputContents = $buttonPressed.parents('.Challenge').find('input').val();
    const validationTests = $buttonPressed.parents('.Challenge').find('.Challenge-Values');

    const validity = checkAnswers(inputContents, validationTests);
    updateResultMessage(validity, $messageHeader);
  });
  
})(jQuery);