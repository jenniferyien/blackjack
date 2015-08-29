$(function(){

      //Created list of 52 cards
        function generate(){
            var deck = [];
            for(var i=0; i < 52; i++){
                          deck.push(i);
                        };
            return deck;
        };

      //pregiven shuffle deck
        function shuffle(o){
            for(var j, x, i = o.length;
                i;
                j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

      //determine suits for the cards
        function suits(deckNum){
            return Math.floor(deckNum/13);
        };

      //determine card numbers
        function valueCard(deckNum){
            return deckNum % 13;
        };

      //displaying cards on page for Dealer, Player, and Facedown Card
        function render(renC) {
          //determine suit
          var suit = suits(renC);
          //determine card number
          var value = valueCard(renC);
          if(value == 0){
                value = 'A';
              } else if (value == 1){
                value = 'K'
              } else if (value == 11){
                value = 'J'
              } else if (value == 12){
                value = 'Q'
          };
          var card = $('<div class="card">');
          var svg = $('<svg></svg>').appendTo(card);
          var firstcard = $('<text y=25>').text(value).appendTo(svg);
          var double = $('<text x="-98" y="-110" transform="rotate(180)">').text(value).appendTo(svg);
          if (suit == 0){
                $('<path transform="translate(-85, 25) scale(0.9)" d="M151.299,93.486 C149.846,87.955 147.772,82.763 145.077,77.912 C142.381,73.06 137.167,65.525 129.432,55.306 C123.76,47.806 120.268,43.049 118.956,41.033 C116.799,37.752 115.241,34.74 114.28,31.998 C113.319,29.256 112.838,26.478 112.838,23.666 C112.838,18.463 114.573,14.103 118.042,10.588 C121.51,7.072 125.799,5.314 130.909,5.314 C136.065,5.314 140.542,7.142 144.338,10.799 C147.198,13.517 149.518,17.572 151.299,22.963 C152.846,17.666 155.026,13.635 157.838,10.869 C161.729,7.119 166.229,5.244 171.338,5.244 C176.401,5.244 180.69,6.99 184.206,10.482 C187.721,13.974 189.479,18.135 189.479,22.963 C189.479,27.182 188.448,31.576 186.385,36.146 C184.323,40.717 180.338,46.705 174.432,54.111 C166.745,63.814 161.143,71.783 157.628,78.017 C154.862,82.939 152.753,88.096 151.299,93.486 L151.299,93.486 z" fill="#D40000" id="heart"/>').appendTo(svg);
              } else if (suit == 1) {
                $('<path transform="translate(13, -70) scale(0.9)" d="M39.419,107.322 C29.928,122.904 19.033,137.607 7.076,151.385 C19.044,165.157 30.124,179.822 39.419,195.541 C48.715,179.822 59.794,165.157 71.763,151.385 C59.806,137.607 48.911,122.904 39.419,107.322 z" fill="#D40000" id="diamond"/>').appendTo(svg);
              } else if (suit == 2) {
                $('<path transform="translate(-85, -75) scale(0.9)" d="M151.143,108.151 C145.612,108.151 140.979,110.01 137.206,113.713 C133.432,117.416 131.549,121.823 131.549,126.932 C131.549,131.104 133.159,135.463 136.393,140.057 C133.591,137.722 130.798,136.338 125.487,136.338 C115.096,136.338 107.643,144.868 107.643,155.526 C107.643,166.827 115.891,175.432 126.893,175.432 C137.909,175.432 146.175,167.918 150.237,158.776 C150.049,166.229 148.917,172.127 146.831,176.463 C144.745,180.799 141.549,184.385 137.237,187.244 C134.331,189.166 129.096,190.854 121.549,192.307 L120.987,194.713 L151.143,194.713 L181.331,194.713 L180.768,192.307 C173.221,190.854 167.987,189.166 165.081,187.244 C160.768,184.385 157.573,180.799 155.487,176.463 C153.401,172.127 152.268,166.229 152.081,158.776 C156.143,167.918 164.409,175.432 175.424,175.432 C186.427,175.432 194.674,166.827 194.674,155.526 C194.674,144.868 187.222,136.338 176.831,136.338 C171.52,136.338 168.726,137.722 165.924,140.057 C169.159,135.463 170.768,131.104 170.768,126.932 C170.768,121.823 168.885,117.416 165.112,113.713 C161.338,110.01 156.674,108.151 151.143,108.151 z" fill="#000000" id="club"/>').appendTo(svg);
              } else if (suit == 3) {
                $('<path transform="translate(13, 18) scale(0.9)" d="M39.419,4.459 C38.201,9.521 36.326,14.068 33.794,18.053 C31.263,22.037 26.755,26.951 20.263,32.834 C13.771,38.717 9.654,43.224 7.919,46.365 C6.185,49.506 5.326,52.693 5.326,55.928 C5.326,60.428 6.826,64.178 9.826,67.178 C12.826,70.178 16.482,71.678 20.794,71.678 C28.514,71.678 34.485,66.041 38.419,59.896 C38.12,66.615 37.013,71.993 35.076,76.021 C32.99,80.357 29.796,83.945 25.482,86.803 C22.577,88.726 17.341,90.412 9.794,91.865 L9.232,94.271 L39.388,94.271 L69.576,94.271 L69.013,91.865 C61.466,90.412 56.23,88.726 53.326,86.803 C49.012,83.945 45.818,80.357 43.732,76.021 C41.797,71.999 40.689,66.632 40.388,59.928 C44.322,66.063 50.334,71.678 58.044,71.678 C62.357,71.678 66.013,70.178 69.013,67.178 C72.013,64.178 73.513,60.428 73.513,55.928 C73.513,52.693 72.654,49.506 70.919,46.365 C69.185,43.224 65.068,38.717 58.576,32.834 C52.083,26.951 47.576,22.037 45.044,18.053 C42.513,14.068 40.638,9.521 39.419,4.459 z" fill="#000000" id="spade"/>').appendTo(svg);
           };
          return card;
        };

        function faceDown(){
          var card = $('<div class="card"></div>').appendTo('#dealer');
          var img = card.addClass('backImg');

          return card;
        }

      // Starting a new game with a fresh shuffledDeck
        var shuffleDeck = shuffle(generate());

      //shuffling the Deck
        function reshuffle(){
          if (shuffleDeck.length == 0){
            shuffleDeck = shuffle(generate());
          };
        };

      //Array in which card Hand lives
        var PlayerHand = [];
        var DealerHand = [];

      //Win counts
        var playerWin = 0;
        var currentPlay = 0;
        var currentDeal = 0;
        var dealerWin = 0;

      //Basic Value for Players Hand
        var cardValue = function(){
          var sum = 0;
          var newHandOrder = PlayerHand.map(function(cardId){
            return cardId % 13;
          });

          newHandOrder.sort(function(a,b){
            return b-a;
          });
          for(var i=0; i < newHandOrder.length; i++){
                  if (newHandOrder[i] % 13 === 0 && sum < 11){
                    sum = sum + 11;
                  } else if(newHandOrder[i] % 13 === 0 && sum > 11){
                    sum = sum + 1;
                  } else if (newHandOrder[i] % 13 === 1 || newHandOrder[i] % 13 === 11 || newHandOrder[i] % 13 === 12){
                    sum = sum + 10
                  } else {
                    sum = sum + (newHandOrder[i] % 13);
                  }
            }
            return sum;
        };

      //Basic Value for Dealer Hand
        var dealerValue = function(){
          var sum = 0;
          var newHandOrder = DealerHand.map(function(cardId){
            return cardId % 13;
          });

          newHandOrder.sort(function(a,b){
            return b-a;
          });
          for(var i=0; i < newHandOrder.length; i++){
                  if (newHandOrder[i] % 13 === 0 && sum < 11){
                    sum = sum + 11;
                  } else if(newHandOrder[i] % 13 === 0 && sum > 11){
                    sum = sum + 1;
                  } else if (newHandOrder[i] % 13 === 1 || newHandOrder[i] % 13 === 11 || newHandOrder[i] % 13 === 12){
                    sum = sum + 10
                  } else {
                    sum = sum + (newHandOrder[i] % 13);
                  }
            }
            return sum;
        };

      //Player Hand
        function Player(){
          var dealCard = shuffleDeck.pop();
          reshuffle();
          render(dealCard).appendTo('#player');
          PlayerHand.push(dealCard);
        };

      //Dealer Hand
        function Dealer(){
          var dealCard = shuffleDeck.pop();
          reshuffle();
          DealerHand.push(dealCard);
          return render(dealCard).appendTo('#dealer');
        };

      //Not yet in play in beginning of game
        $('#Hit').attr('disabled','disabled');
        $('#Stand').attr('disabled','disabled');
        $('#Reset').attr('disabled','disabled');

      //Disable/reable Hit and Stand button
        function disable(){
          $('button#Hit').attr('disabled','disabled');
          $('button#Stand').attr('disabled','disabled');
        };

        function reable(){
          $('#Hit').attr('disabled',false);
          $('#Stand').attr('disabled',false);
        };

      // check wins or loses
        function check(){
                if(cardValue() === 21) {
                      $('p.notice').text("You got 21! Please click 'Stay' unless you wish to continue.");
                } else if (cardValue() > 21){
                      disable();
                      dWin();
                      reveal();
                      $('p.notice').text('BUSTED! Your total is ' + cardValue());
                      scorDisplay();
                      $('#dScore').text("Dealer's Score: " + currentDeal);
                };
          };

        function dealerCheck(){
                disable();
                reveal();
                if (dealerValue() === cardValue()){
                    scorDisplay();
                    $('p.notice').text("It's a Tie! No one wins. Play Again.");
                } else if(dealerValue() == 21) {
                    dWin();
                    $('p.notice').text('Womp Womp! You Lost! Dealer got 21!');
                    scorDisplay();
                    $('#dScore').text("Dealer's Score: " + currentDeal);
                } else if (dealerValue() > 21){
                    $('p.notice').text('You Won! Dealer Busted');
                    pWin();
                    scorDisplay();
                    $('#pScore').text("Player's Score: " + currentPlay);
                } else if(dealerValue() < cardValue()){
                    $('p.notice').text('You got the better hand. Dealer Lost');
                    pWin();
                    scorDisplay();
                    $('#pScore').text("Player's Score: " + currentPlay);
                } else if (dealerValue() > cardValue()){
                    $('p.notice').text('You Lost! Dealer got the better hand.');
                    dWin();
                    scorDisplay();
                    $('#dScore').text("Dealer's Score: " + currentDeal);
                };
          };

      //New Game
        function newGame(){
          $('#deal').text("Dealer's Cards");
          $('#play').text("Player's Cards");
          $('#Reset').attr('disabled',false);
          var dealCard1 = shuffleDeck.pop();
          reshuffle();
          var dealCard2 = shuffleDeck.pop();
          reshuffle();
          var deck = shuffleDeck;
          var playerDeck = Player() + Player ();
          var dealerDeck = Dealer() + Dealer().addClass('hiding') + faceDown();
          $('p.notice').text('Your total is ' + cardValue());
          check();
          reable();
          $('.card').each(function(i,e) { $(e).html($(e).html()) });
        };

      //Dealer Turn
        function turnDealer(){
            disable();
            if (dealerValue() < 18){
                Dealer().insertAfter('#deal');
                while(dealerValue() <18){
                    return Dealer().insertAfter('#deal');
                };
            };
        };

      //Adds additional Cards to players deck
        $('#Hit').on('click',function(){
            var newCard = shuffleDeck.pop();
            reshuffle();
            Player();
            $('p.notice').text('Your total is ' + cardValue());
            check();
            $('.card').each(function(i,e) { $(e).html($(e).html()) });
            $('#hitme').trigger('play');
        });

      //If a player chooses to stay with their current cards
        $('#Stand').on('click', function(){
           turnDealer();
           $('.card').each(function(i,e) { $(e).html($(e).html()) });
           dealerCheck();
        });

      //button New Game
        $('#newGame').on('click', function(e){
            $('.card').remove();
            PlayerHand = [];
            DealerHand =[];
            newGame();
            playerWin = 0;
            dealerWin = 0;
            $('#cardShuffle').trigger('play');
        });

      //reset Game
        $('#Reset').on('click',function(){
            dealerValue();
            cardValue();
            $('.card').remove();
            $('p.notice').text('');
            playerWin = 0;
            currentPlay = 0;
            currentDeal = 0;
            $('#pScore').text("Player's Score: " + playerWin);
            dealerWin = 0;
            $('#dScore').text("Dealer's Score: " + dealerWin);
            $('#deal').text("Dealer's Cards");
            $('#play').text("Player's Cards");
            disable();
            $('p.notice').text("Let's Begin! Click 'New Game'");
            $('#Reset').attr('disabled','disabled');
            $('#resetme').trigger('play');
        });

      //Player Win
        function pWin(){
          playerWin = currentPlay + 1;
          currentPlay = playerWin;
        };

      //Dealer Win
        function dWin(){
          dealerWin = currentDeal + 1;
          currentDeal = dealerWin;
        };

      //facedown card reveal
        function reveal(){
          $('.card').removeClass('hiding');
          $('.backImg').remove();
        };

      //score display
        function scorDisplay(){
          $('#deal').text("Dealer's Cards: " + dealerValue());
          $('#play').text("Player's Cards: " + cardValue());
        };

      //click for How to play instructions
        $('span').on('click', function(e){
              var howTo = $('.howTo')
              howTo.addClass('playBJack');
              howTo.append('<h3 class="text">HOW TO PLAY: BLACKJACK</h3>')
              howTo.append('<p class="text">Blackjack is a comparing card game between a player and dealer. Your only competition is the dealer.</p>');
              howTo.append('<p class="text"><strong>GOAL:</strong> The aim of the game is to accumulate a higher point total than the dealer, but without going over 21. You compute your score by adding the values of your individual cards.</p>');
              howTo.append('<ul class="text cvalue"><p class = "text">Cards and their value:</p></ul>');
              $('ul.text.cvalue').append('<li>&#9656; <strong>2 through 10:</strong> Worth face value</li>');
              $('ul.text.cvalue').append('<li>&#9656; <strong>J, Q, and K:</strong> Worth 10 points each</li>');
              $('ul.text.cvalue').append('<li>&#9656; <strong>Ace:</strong> Worth either 1 or 11 points</li>');
              howTo.append("<p class = 'text'><strong>START GAME:</strong> The player and the dealer receive two cards each. The players' cards are dealt face up, while the dealer has one face down and one face up. The best possible blackjack hand is an opening deal of an ace with any ten-point card. This is called a blackjack, or a natural 21, and the player holding this automatically wins unless the dealer also has a blackjack.</p>");
              howTo.append('<p class ="text"><strong>ACTION:</strong></p>');
              howTo.append('<ul class="text choice"><p class = "text">Player goes first and can choose to:</p></ul>');
              $('ul.text.choice').append('<li>&#9656; <strong>Stay:</strong> Keep his/her hand as it is. </li>');
              $('ul.text.choice').append('<li>&#9656; </strong>Hit:<strong> Take more cards from the deck, one at a time, until the player hand is strong enough or until it goes over 21, in which case the player immediately loses.</li>');
              howTo.append("<p class= 'text'><strong>DETERMINING A WINNER:</strong> Once the players has finished playing, it is a Dealer's turn to either decided to stay or bust, then the dealer turns over the hidden card.</p>");
              howTo.append('<ul class="text winner"><p class = "text">Player or Dealer wins if:</p></ul>');
              $('ul.text.winner').append('<li>&#9656; There is a natural blackjack(21)</li>');
              $('ul.text.winner').append('<li>&#9656; The sum of the cards is higher than the other.</li>');
              howTo.append('<p class ="text"><strong>SCORING POINTS:</strong> 1 Point is rewarded to winner of the game. In case of a Tie, neither party gets a point.</p>');
              howTo.append('<p class ="text"><strong>HOW THE BUTTONS WORK:</strong></p>');
              howTo.append('<ul class="text buttonCho"></ul>');
              $('ul.text.buttonCho').append('<li>&#9656; <strong>New Game:</strong> Generates a new set of cards to play for next round of play.</li>');
              $('ul.text.buttonCho').append('<li>&#9656; <strong>Hit:</strong> Add a card to your hand.</li>');
              $('ul.text.buttonCho').append("<li>&#9656; <strong>Stay:</strong> Your turn is complete, Dealer's turn to finish round and winner is revealed.</li>");
              $('ul.text.buttonCho').append('<li>&#9656; <strong>Reset Game:</strong> Allows you to reset the score board and start fresh.</li>');
              howTo.append("<p class ='text' id='warn'><strong>WARNING:</strong> This game does not involve betting. Betting can lead to Compulsive gamblers that can't control the impulse to gamble, even when they know their gambling is hurting themselves or their loved ones. So please think about your loved ones before gambling.</p>");
        });

      //click to remove how to play instructions
        $('.howTo').on('click', function(e){
            $(this).toggleClass('playBJack');
            $('.text').remove();
        });

      //reset page render
      // $('.card').each(function(i,e) { $(e).html($(e).html()) });

});
