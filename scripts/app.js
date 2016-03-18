var moves = 0;
var wins = 0;
var games = 0;
var cards = [
    "<img src='images/default/monsters-01.png'>",
    "<img src='images/default/monsters-02.png'>",
    "<img src='images/default/monsters-03.png'>",
    "<img src='images/default/monsters-04.png'>",
    "<img src='images/default/monsters-05.png'>",
    "<img src='images/default/monsters-06.png'>",
    "<img src='images/default/monsters-07.png'>",
    "<img src='images/default/monsters-08.png'>",
    "<img src='images/default/monsters-09.png'>",
    "<img src='images/default/monsters-11.png'>",
    "<img src='images/default/monsters-13.png'>",
    "<img src='images/default/monsters-14.png'>",
    "<img src='images/default/monsters-15.png'>",
    "<img src='images/default/monsters-16.png'>"
];

//document.write(cards[0]);
var gridSize, gameTiles, gridArray, rowSize;

$(document).ready(function() {


    $('input').click(function() {
        var diff = $(this).val();
        if (diff == 'easy') {
            rowSize = 5;
            gridSize = rowSize * 2;
        } else if (diff == 'med') {
            rowSize = 5;
            gridSize = rowSize * 4;
        } else if (diff == 'hard') {
            rowSize = 7;
            gridSize = rowSize * 4;
        }

        $('#button-bucket').toggle();
        gameTiles = cards.slice(0, (gridSize / 2));
        gridArray = $.merge(gameTiles, gameTiles);


        for (var i = 0; i < gridArray.length; i++) {
            var html = "<div class='mg-tile'>";
            html += "<div class='mg-tile-inner unmatched flipped'>";
            html += "<div class='mg-tile-outside'></div>";
            html += "<div class='mg-tile-inside'>" + gridArray[i] + "</div>";
            html += "</div>";
            html += "</div>";

            $('#mg-contents').append(html);
        }


        setTimeout(function() {
            $('.mg-tile-inner').removeClass('flipped');
        }, 2000);

        //$('.mg-tile-inner')

        $('.mg-tile').click(function() {
            $(this).find('.mg-tile-inner').addClass("flipped");
            //console.log(getWholeNumberFromString($('.flipped img').attr('src')));

            //var imgNumber = getWholeNumberFromString($('.flipped img').attr('src'));



            if ($('.flipped.unmatched').length == 2) {

                moves++;
                var visibleCards = $(".flipped.unmatched img");
                if (visibleCards[0].src == visibleCards[1].src) {

                    $('.flipped.unmatched').addClass('matched');
                    $('.flipped.unmatched').removeClass('unmatched');
                } else {
                    setTimeout(function() {
                        $('.flipped.unmatched').removeClass('flipped');
                    }, 500);
                }

                if ($('.flipped.matched').length == gridArray.length) {
                    wins++;
                }
            }

            $('#move-counter').html(moves);
            $('#wins-counter').html(wins);
        });
    });


    function getWholeNumberFromString(_val) {
        var output = '';

        for (var i = 0; i < _val.length; i++) {
            for (var b = 0; b < _val[i].length; b++) {
                if (!_val[i].charAt(b).match(/[^,$\d]/)) {
                    output = output.concat("" + _val[i]);
                }
            }

        }

        return output;
    }
});