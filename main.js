var gameOn = false;
var playerS = 0;
var game = [];
var playerC = [];
    playerC[1] = "red";
    playerC[2] = "yellow";


function start() {

    if(gameOn == true) return false;

    gameOn = true;

    for (row = 0; row <= 5; row++) {
        game[row] = [];
        for (col = 0; col <= 6; col++) {
            game[row][col] = 0;
        }
    }
    draw();
    playerS = 1;
    turn();
}
function draw() {
    check();
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 5; row++) {
            document.getElementById('square_'+ row + '_' +col).innerHTML ="<span class='piece player"+game[row][col]+"'> </span>";
        }
    }
}

function turn() {
    if(gameOn) {
        document.getElementById('info').innerHTML = "Current Player: Player "+ playerS + "<span class='player"+playerS+"'>("+ playerC[playerS] + ")</span>";
    }
}

function drop(col) {
    for (row = 5; row >= 0; row--) {
        if(game[row][col] == 0) {
            game[row][col] = playerS;
            draw();

            if(playerS == 1) {
                playerS = 2;
            }
            else {
                playerS = 1;
            }
            turn();

            return true;
        }
    }
}

function check() {
    for (i = 1; i <= 2; i++) {
        for(col = 0; col <= 3; col++) {
            for(row = 0; row <= 5; row++) {
                if(game[row][col+1] == i) { 
                    if ((game[row][col+1] == i) && (game[row][col+2] == i)) {
                    end(i);
                    return true;
                }
            }
            }
        }
    }
    for(i = 1; i <=2; i++) {
        for(col = 0; col <= 6; col++) {
            if(game[row+1][col] == i) {
                if((game[row+1][col] == i) && (game[row+2][col] == i)) {
                    end(i);
                    return true;
                }
            }
        }
    }
    for(i = 1; i <= 2; i++) {
        for(col = 0; col <= 3; col++) {
            for(row = 0; row <= 2; row++) {
                if(game[row][col] == i) {
                    if((game[row+1][col+1] == i) && (game[row+2][col+2] == i)) {
                        end(i);
                        return true;
                    }
                }
            }
        }
    } 
    for(i = 1; i <= 2; i++) {
        for(col = 0; col <= 3; col++) {
            for(row = 3; row <= 5; row++) {
                if(game[row][col] == i) {
                    if((game[row-1][col+1] == i) && (game[row-2][col+2] == i)) {
                        end(i);
                        return true;
                    }
                }
            }
        }
    } 
}

function end(winner) {
    gameOn == false;
    document.getElementById('info').innerHTML = "Successor: " + winner;
}