$(function(){

      //Created list of 52 cards
      var deck = [];
      for(var i=0; i < 52; i++){
                      deck.push(i);
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

      //displaying cards on page for Dealer, Player, and Facedown
        function renderDealer(renC) {
          //determine suit
          var suit = suits(renC);
          //determine card number
          var value = valueCard(renC);
          if(value == 1){
            value = 'A';
          } else if (value == 0){
            value = 'K'
          } else if (value == 11){
            value = 'J'
          } else if (value == 12){
            value = 'Q'
          }
          var card = $('<div class="card"></div>').appendTo('#dealer');
          var svg = $('<svg></svg>').appendTo(card);
          var value = $('<text y=25>').text(value).appendTo(svg);
          if (suit == 0){
            $('<path transform="translate(-100, 10)" d="M151.299,93.486 C149.846,87.955 147.772,82.763 145.077,77.912 C142.381,73.06 137.167,65.525 129.432,55.306 C123.76,47.806 120.268,43.049 118.956,41.033 C116.799,37.752 115.241,34.74 114.28,31.998 C113.319,29.256 112.838,26.478 112.838,23.666 C112.838,18.463 114.573,14.103 118.042,10.588 C121.51,7.072 125.799,5.314 130.909,5.314 C136.065,5.314 140.542,7.142 144.338,10.799 C147.198,13.517 149.518,17.572 151.299,22.963 C152.846,17.666 155.026,13.635 157.838,10.869 C161.729,7.119 166.229,5.244 171.338,5.244 C176.401,5.244 180.69,6.99 184.206,10.482 C187.721,13.974 189.479,18.135 189.479,22.963 C189.479,27.182 188.448,31.576 186.385,36.146 C184.323,40.717 180.338,46.705 174.432,54.111 C166.745,63.814 161.143,71.783 157.628,78.017 C154.862,82.939 152.753,88.096 151.299,93.486 L151.299,93.486 z" fill="#D40000" id="heart"/>').appendTo(svg);
          } else if (suit == 1) {
            $('<path transform="translate(10, -100)" d="M39.419,107.322 C29.928,122.904 19.033,137.607 7.076,151.385 C19.044,165.157 30.124,179.822 39.419,195.541 C48.715,179.822 59.794,165.157 71.763,151.385 C59.806,137.607 48.911,122.904 39.419,107.322 z" fill="#D40000" id="diamond"/>').appendTo(svg);
          } else if (suit == 2) {
            $('<path transform="translate(-100, -100)" d="M151.143,108.151 C145.612,108.151 140.979,110.01 137.206,113.713 C133.432,117.416 131.549,121.823 131.549,126.932 C131.549,131.104 133.159,135.463 136.393,140.057 C133.591,137.722 130.798,136.338 125.487,136.338 C115.096,136.338 107.643,144.868 107.643,155.526 C107.643,166.827 115.891,175.432 126.893,175.432 C137.909,175.432 146.175,167.918 150.237,158.776 C150.049,166.229 148.917,172.127 146.831,176.463 C144.745,180.799 141.549,184.385 137.237,187.244 C134.331,189.166 129.096,190.854 121.549,192.307 L120.987,194.713 L151.143,194.713 L181.331,194.713 L180.768,192.307 C173.221,190.854 167.987,189.166 165.081,187.244 C160.768,184.385 157.573,180.799 155.487,176.463 C153.401,172.127 152.268,166.229 152.081,158.776 C156.143,167.918 164.409,175.432 175.424,175.432 C186.427,175.432 194.674,166.827 194.674,155.526 C194.674,144.868 187.222,136.338 176.831,136.338 C171.52,136.338 168.726,137.722 165.924,140.057 C169.159,135.463 170.768,131.104 170.768,126.932 C170.768,121.823 168.885,117.416 165.112,113.713 C161.338,110.01 156.674,108.151 151.143,108.151 z" fill="#000000" id="club"/>').appendTo(svg);
          } else if (suit == 3) {
            $('<path transform="translate(10, 0)" d="M39.419,4.459 C38.201,9.521 36.326,14.068 33.794,18.053 C31.263,22.037 26.755,26.951 20.263,32.834 C13.771,38.717 9.654,43.224 7.919,46.365 C6.185,49.506 5.326,52.693 5.326,55.928 C5.326,60.428 6.826,64.178 9.826,67.178 C12.826,70.178 16.482,71.678 20.794,71.678 C28.514,71.678 34.485,66.041 38.419,59.896 C38.12,66.615 37.013,71.993 35.076,76.021 C32.99,80.357 29.796,83.945 25.482,86.803 C22.577,88.726 17.341,90.412 9.794,91.865 L9.232,94.271 L39.388,94.271 L69.576,94.271 L69.013,91.865 C61.466,90.412 56.23,88.726 53.326,86.803 C49.012,83.945 45.818,80.357 43.732,76.021 C41.797,71.999 40.689,66.632 40.388,59.928 C44.322,66.063 50.334,71.678 58.044,71.678 C62.357,71.678 66.013,70.178 69.013,67.178 C72.013,64.178 73.513,60.428 73.513,55.928 C73.513,52.693 72.654,49.506 70.919,46.365 C69.185,43.224 65.068,38.717 58.576,32.834 C52.083,26.951 47.576,22.037 45.044,18.053 C42.513,14.068 40.638,9.521 39.419,4.459 z" fill="#000000" id="spade"/>').appendTo(svg);
          };
          return card;
        }

        function renderPlayer(renC) {
          //determine suit
          var suit = suits(renC);
          //determine card number
          var value = valueCard(renC);
          if(value == 1){
            value = 'A';
          } else if (value == 0){
            value = 'K'
          } else if (value == 11){
            value = 'J'
          } else if (value == 12){
            value = 'Q'
          }
          var card = $('<div class="card"></div>').appendTo('#player');
          var svg = $('<svg></svg>').appendTo(card);
          var value = $('<text y=25>').text(value).appendTo(svg);
          if (suit == 0){
            $('<path transform="translate(-100, 10)" d="M151.299,93.486 C149.846,87.955 147.772,82.763 145.077,77.912 C142.381,73.06 137.167,65.525 129.432,55.306 C123.76,47.806 120.268,43.049 118.956,41.033 C116.799,37.752 115.241,34.74 114.28,31.998 C113.319,29.256 112.838,26.478 112.838,23.666 C112.838,18.463 114.573,14.103 118.042,10.588 C121.51,7.072 125.799,5.314 130.909,5.314 C136.065,5.314 140.542,7.142 144.338,10.799 C147.198,13.517 149.518,17.572 151.299,22.963 C152.846,17.666 155.026,13.635 157.838,10.869 C161.729,7.119 166.229,5.244 171.338,5.244 C176.401,5.244 180.69,6.99 184.206,10.482 C187.721,13.974 189.479,18.135 189.479,22.963 C189.479,27.182 188.448,31.576 186.385,36.146 C184.323,40.717 180.338,46.705 174.432,54.111 C166.745,63.814 161.143,71.783 157.628,78.017 C154.862,82.939 152.753,88.096 151.299,93.486 L151.299,93.486 z" fill="#D40000" id="heart"/>').appendTo(svg);
          } else if (suit == 1) {
            $('<path transform="translate(10, -100)" d="M39.419,107.322 C29.928,122.904 19.033,137.607 7.076,151.385 C19.044,165.157 30.124,179.822 39.419,195.541 C48.715,179.822 59.794,165.157 71.763,151.385 C59.806,137.607 48.911,122.904 39.419,107.322 z" fill="#D40000" id="diamond"/>').appendTo(svg);
          } else if (suit == 2) {
            $('<path transform="translate(-100, -100)" d="M151.143,108.151 C145.612,108.151 140.979,110.01 137.206,113.713 C133.432,117.416 131.549,121.823 131.549,126.932 C131.549,131.104 133.159,135.463 136.393,140.057 C133.591,137.722 130.798,136.338 125.487,136.338 C115.096,136.338 107.643,144.868 107.643,155.526 C107.643,166.827 115.891,175.432 126.893,175.432 C137.909,175.432 146.175,167.918 150.237,158.776 C150.049,166.229 148.917,172.127 146.831,176.463 C144.745,180.799 141.549,184.385 137.237,187.244 C134.331,189.166 129.096,190.854 121.549,192.307 L120.987,194.713 L151.143,194.713 L181.331,194.713 L180.768,192.307 C173.221,190.854 167.987,189.166 165.081,187.244 C160.768,184.385 157.573,180.799 155.487,176.463 C153.401,172.127 152.268,166.229 152.081,158.776 C156.143,167.918 164.409,175.432 175.424,175.432 C186.427,175.432 194.674,166.827 194.674,155.526 C194.674,144.868 187.222,136.338 176.831,136.338 C171.52,136.338 168.726,137.722 165.924,140.057 C169.159,135.463 170.768,131.104 170.768,126.932 C170.768,121.823 168.885,117.416 165.112,113.713 C161.338,110.01 156.674,108.151 151.143,108.151 z" fill="#000000" id="club"/>').appendTo(svg);
          } else if (suit == 3) {
            $('<path transform="translate(10, 0)" d="M39.419,4.459 C38.201,9.521 36.326,14.068 33.794,18.053 C31.263,22.037 26.755,26.951 20.263,32.834 C13.771,38.717 9.654,43.224 7.919,46.365 C6.185,49.506 5.326,52.693 5.326,55.928 C5.326,60.428 6.826,64.178 9.826,67.178 C12.826,70.178 16.482,71.678 20.794,71.678 C28.514,71.678 34.485,66.041 38.419,59.896 C38.12,66.615 37.013,71.993 35.076,76.021 C32.99,80.357 29.796,83.945 25.482,86.803 C22.577,88.726 17.341,90.412 9.794,91.865 L9.232,94.271 L39.388,94.271 L69.576,94.271 L69.013,91.865 C61.466,90.412 56.23,88.726 53.326,86.803 C49.012,83.945 45.818,80.357 43.732,76.021 C41.797,71.999 40.689,66.632 40.388,59.928 C44.322,66.063 50.334,71.678 58.044,71.678 C62.357,71.678 66.013,70.178 69.013,67.178 C72.013,64.178 73.513,60.428 73.513,55.928 C73.513,52.693 72.654,49.506 70.919,46.365 C69.185,43.224 65.068,38.717 58.576,32.834 C52.083,26.951 47.576,22.037 45.044,18.053 C42.513,14.068 40.638,9.521 39.419,4.459 z" fill="#000000" id="spade"/>').appendTo(svg);
          };
          return card;
        }

        function faceDown(){
          var card = $('<div class="card"></div>').appendTo('#dealer');
          // var img = $('<img src="/images/card-back.png"/>').appendTo(card);
          var img = card.addClass('backImg');
          // var backD = $('<img src="/images/card-back.png"/>').appendTo(svg);
          return card;
        }

      // Starting a new game with a fresh shuffledDeck
      var shuffleDeck = shuffle(deck);


      var PlayerHand = [];
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
                if (newHandOrder[i] % 13 === 1 && sum > 11){
                  sum = sum + 1;
                } else if(newHandOrder[i] % 13 === 1){
                  sum = sum + 11;
                } else if (newHandOrder[i] % 13 === 0 || newHandOrder[i] % 13 === 11 || newHandOrder[i] % 13 === 12){
                  sum = sum + 10
                } else {
                  sum = sum + (newHandOrder[i] % 13);
                }
          }
          return sum;
      };


      //Notification sum of the cards
      // function score(card1,card2){
      //     var total = cardValue(card1) + cardValue(card2);
      //     return total;
      // };


      //Player Hand
      function Player(){
        var dealCard = shuffleDeck.pop();
        renderPlayer(dealCard);
        PlayerHand.push(dealCard);
      }

      //New Game
      function newGame(){
        var dealCard1 = shuffleDeck.pop();
        var dealCard2 = shuffleDeck.pop();
        var deck = shuffleDeck;
        var playerDeck = Player() + Player ();
        var dealerDeck = renderDealer(shuffleDeck.pop()) + faceDown();
        var scoring = $('p').text('Your total is ' + cardValue());
        $('#Hit').attr('disabled',false);
        $('#Stand').attr('disabled',false);
        $('.card').each(function(i,e) { $(e).html($(e).html()) });
      };

      //This buttons are not yet in play
      $('#Hit').attr('disabled','disabled');
      $('#Stand').attr('disabled','disabled');

      //Adds additional Cards to players deck
      $('#Hit').on('click',function(){
          var newCard = shuffleDeck.pop();
          Player();
          $('p').text('Your total is ' + cardValue());
          $('.card').each(function(i,e) { $(e).html($(e).html()) });
      });

      //If a player chooses to stay with their current cards
      $('#Stand').on('click', function(){
         $('#Hit').attr('disabled','disabled');
      });

      //button New Game
      $('#newGame').on('click', function(e){
        $('.card').remove();
        PlayerHand = [];
        newGame();
      });

      //reset Game
      $('#Reset').on('click',function(){
        $('.card').remove();
        $('p').text('');
      });

      //
      var aceValue = function(card){
        if (ace != 0){
          if(card % 13 === 0 && sum > 21){
            return cardValue(card) = 1;
          } else {
            return 11;
          }
        };
      };

      //reset page render
      // $('.card').each(function(i,e) { $(e).html($(e).html()) });

});