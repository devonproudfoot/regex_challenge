(function($) {
  function getId(element) {
    return element.attr('id').slice(-1);
  }

  function changeChallenge(identifier) {
    $('.selected').removeClass('selected');
    $(`#challenge${identifier}`).addClass('selected');
  }

  function regexify(regex) {
    regex = regex.replace('^', '').replace('$', '');
    return RegExp(`^${regex}$`);
  }

  function checkAnswers(regex, $tests) {
    let answerValidity = true;
    const tests = $tests.find('.to-validate');

    for (let i=0; i < tests.length; i++) {
      const test = tests[i];
      $(test).removeClass('bg-success').removeClass('bg-danger');

      if (regex) {
        testableRegex = regexify(regex);
        if (testableRegex.test(test.innerText)) {
          $(test).addClass('bg-success');
        } else {
          $(test).addClass('bg-danger');
          answerValidity = false;
        }
      } else {
        $(test).addClass('bg-danger');
        answerValidity = false;
      }
    }

    return answerValidity;
  }

  function updateResultMessage(result, $resultHeader) {
    const successMessages = ['Great Job!', 'Very Cool!', 'Nice Work!'];
    const failMessages = ['Try Again!', 'Better Luck Next Time!', ':('];
    const randomNum = Math.floor(Math.random() * Math.floor(failMessages.length));
    
    let message;
    message = result ? successMessages[randomNum] : failMessages[randomNum];
    $resultHeader.text(message);
  }

  // NavBar Challenge Selector
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    const challengeId = getId($(e.target));
    changeChallenge(challengeId);
  });

  // Validate Regex
  $('.Challenge-Button').on('click', function(e) {
    e.preventDefault();
    const $buttonPressed = $(e.target);
    const $messageHeader = $buttonPressed.siblings('.Challenge-Result');
    const regexInput = $buttonPressed.parents('.Challenge').find('input').val();
    const validationTests = $buttonPressed.parents('.Challenge').find('.Challenge-Values');

    const validity = checkAnswers(regexInput, validationTests);
    updateResultMessage(validity, $messageHeader);
  });

  // Hints
  $('.teaser').on('click', function(e) {
    $(e.target).hide();
    $(e.target).siblings('.hint').show();
  });
})(jQuery);