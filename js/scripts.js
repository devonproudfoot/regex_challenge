(function($) {
  function getId(element) {
    return element.attr('id').slice(-1);
  }

  function changeChallenge(identifier) {
    $('.selected').removeClass('selected');
    console.log(identifier);
    $(`#challenge${identifier}`).addClass('selected');
  }

  function checkAnswers(regex, $tests) {
    let answerValidity = false;
    const testFor = $tests.find('.to-validate');

    const checkTests = (regex, tests) => {
      let testValidity = true;
      for (let i=0; i < tests.length; i++) {
        const test = tests[i];
        $(test).removeClass('bg-success').removeClass('bg-danger');
        console.log(regex);

        if (regex.test(test.innerText)) {
          $(test).addClass('bg-success');
        } else {
          $(test).addClass('bg-danger');
          testValidity = false;
        }
      }
      return testValidity;
    }

    answerValidity = checkTests(regex, testFor);
    return answerValidity;
  }

  function updateResultMessage(result, $resultHeader) {
    let message;
    message = result ? 'Great Job!' : 'Try Again!';
    $resultHeader.text(message);
  }
  
  function regexify(input) {
    //return `/${input}/`;
    return RegExp(input);
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
    const regexInput = regexify($buttonPressed.parents('.Challenge').find('input').val());
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