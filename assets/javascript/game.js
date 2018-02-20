$("document").ready( function() {

    console.log("Crystal Collector JavaScript / jQuery Ready");

    // define total score
    var totalScore = 0;

    // define wins variable
    var playerWins = 0;
    $("#player-wins").text( playerWins );

    // define losses variable
    var playerLosses = 0;
    $("#player-losses").text( playerLosses );

    // define newGame variables
    var randOne;
    var randTwo;
    var randThree;
    var randFour;
    var randomNumber;
    var storeRand;

    // AT GAME START
    function newGame() {

        // reset total score to zero and clear value
        totalScore = 0;
        $("#player-total").text("");

        // generate and store random-number for user to guess (19-120)
        randomNumber = Math.floor((Math.random() * 102) + 19);    
        $("#random-number").text( randomNumber );

        // generate and store random crystal values (1-12)
        randOne = Math.floor((Math.random() * 12) + 1);
        randTwo = Math.floor((Math.random() * 12) + 1);
        randThree = Math.floor((Math.random() * 12) + 1);
        randFour = Math.floor((Math.random() * 12) + 1);

        $("#crystal-1").val( randOne );
        $("#crystal-2").val( randTwo );
        $("#crystal-3").val( randThree );
        $("#crystal-4").val( randFour );

        console.log("c1 " + randOne);
        console.log("c2 " + randTwo);
        console.log("c3 " + randThree);
        console.log("c4 " + randFour);
    
    }

    // START INITIAL GAME ON DOCUMENT READY
    newGame();

    // ON CLICK EVENT (BUTTONS) TO GET USER INPUT TO ADD TO TOTAL SCORE
    $(".button-click").on("click", function () {

        storeRand = $(this).val()

        totalScore = totalScore + parseInt(storeRand);
        $("#player-total").text( totalScore );

        if ( totalScore > randomNumber ) {
           
            alert("You lost the game. Click OK to play again.");
            playerLosses++;
            $("#player-losses").text( playerLosses );
            newGame();

        } else if ( totalScore === randomNumber ) {

            alert("You won the game. Click OK to play again.");
            playerWins++;
            $("#player-wins").text( playerWins );
            newGame();
            
        }
    });


});