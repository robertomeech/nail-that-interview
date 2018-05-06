$(function(){

    //On form submission
    $('#quiz').submit(function(event){
        //Prevent page from refreshing
        event.preventDefault();

        $('#quiz').hide();
        $('header').hide();
        //Get the sum of the selected inputs
        let quizResults = getValue();
        // Conditionally show answer based on quiz results
        showResults(quizResults);

    });
    
    
    //Form Reset
    $('.resetButton').on('click', function (e) {
        e.preventDefault();
        // console.log('reset');
        window.location.reload(true);
    }); 


    //SMOOTH SCROLL
    $('.headerText a, .question1 a, #question2 a, #question3 a, #question4 a').smoothScroll({
        speed: 1000,
    });
    
    function getValue() {
        let howBadly = $('#quiz input[name=howBadly]:checked').val();    
        let field = $('#quiz input[name=field]:checked').val();
        let prep = $('#quiz input[name=prep]:checked').val();
        let outfit = $('#quiz input[name=outfit]:checked').val();
        let unique = $('#quiz input[name=outfit]:checked').val();
        let quizResults = parseInt(howBadly) + parseInt(field) + parseInt(prep) + parseInt(outfit) + parseInt(unique);
        console.log(quizResults);
        return quizResults;
    }
    
    function showResults(quizResults) {
        $('.answerWrapper').fadeIn(1000);
        // animate to the top of '.answerWrapper'
        // -50px is the margin top you have set on your '.answers'
        // 800 is the duration of the scrolling
        $('html').animate({ scrollTop: $('.answerWrapper').offset().top - 50 }, 1000);

        $('.answers p').hide();
        if (quizResults <= 8 && quizResults >= 0) {
            //if between 0 and 8
            $('.answer1').fadeIn();
        } else if (quizResults <= 13 && quizResults > 8) {
            // if between 8 and 13
            $('.answer2').fadeIn();
    
        } else if (quizResults <=18 && quizResults > 13) {
            //if between 13 and 18
            $('.answer3').fadeIn();
    
        } else if (quizResults <=22 && quizResults > 18) {
            //if between 18 and 22
            $('.answer4').fadeIn();
    
        } else if (quizResults <=25 && quizResults > 22) {
            //if between 22 and 25
            $('.answer5').fadeIn();
        }
    
    }

}); 

//TWIITER
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));
