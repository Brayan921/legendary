			var gameOn = false;
			var playerS = 0;
			var gameB = [];
			var playerC = [];
			playerC[1] = "red"; 
			playerC[2] = "yellow";
			
			function start() {
				
				if (gameOn == true) return false; 

				gameOn = true;  
				for (row=0; row<=5; row++) {
					gameB[row] = [];
					for (col=0; col<=6; col++) {
						gameB[row][col] = 0;
					}	
				}		
				
				draw(); 		
				playerS = 1; 
				turn(); 
			}
			
		
			function draw() {
				check(); 
				for (col = 0; col<=6; col++) {
					for (row=0; row<=5; row++) {
						
						document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+gameB[row][col]+"'> </span>";
					}	
				}
			}
			
			function check() {
			
				for (i=1; i<=2; i++) {
				
					for (col = 0; col <=3; col++) {
						for (row = 0; row <=5; row++) {
						
							if (gameB[row][col] == i) {
								if ((gameB[row][col+1] == i) && (gameB[row][col+2] == i) && (gameB[row][col+3] == i)) {
									endGame(i);
									return true; 
								}
							}
						}
					}
                }
                
				for (i=1; i<=2; i++) {

					for (col = 0; col <=6; col++) {
						for (row = 0; row <=2; row++) {
						
							if (gameB[row][col] == i) {
								if ((gameB[row+1][col] == i) && (gameB[row+2][col] == i) && (gameB[row+3][col] == i)) {
									endGame(i); 
									return true; 
								}
							}
						}
					}
				}

				for (i=1; i<=2; i++) {
					
					for (col = 0; col <=3; col++) {
					    for (row = 0; row <=2; row++) {
        					if (gameB[row][col] == i) {
								if ((gameB[row+1][col+1] == i) && (gameB[row+2][col+2] == i) && (gameB[row+3][col+3] == i)) {
									endGame(i);
									return true;
								}
							}
						}
					}
				}
								
		
				for (i=1; i<=2; i++) {
					for (col = 0; col <=3; col++) {
					
						for (row = 3; row <=5; row++) {
						
							if (gameB[row][col] == i) {
								if ((gameB[row-1][col+1] == i) && (gameB[row-2][col+2] == i) && (gameB[row-3][col+3] == i)) {
									endGame(i);
									return true;
								}
							}
						}
					}
				}
			}
			

		
			function turn() {
				if (gameOn) { 
					
					document.getElementById('game_info').innerHTML = "Current Player: Player " + playerS + " <span class='player"+playerS+"'>(" + playerC[playerS] + ")</span>";
				}
			}			
			

			function drop(col) {

					for (row=5; row>=0; row--) {
						if (gameB[row][col] == 0) {
					
							gameB[row][col] = playerS;
							draw();
					
							if (playerS == 1) {
								playerS = 2;
							} else {
								playerS = 1;
							}
						
							turn(); 

							return true;
						}
					}
			}

			function endGame(Winner) {
				
				document.getElementById("info").innerHTML = "Player "+ playerS + " Wins"
				gameOn = false; return true;
			}