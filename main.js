			var gameOn = false;
			var playerS = 0;
			var gameF = [];
			var playerC = [];
			playerC[1] = "red"; 
			playerC[2] = "yellow";
			
			function start() {
				
				if (gameOn == true) return false; 

				gameOn = true;  
				for (row=0; row<=5; row++) {
					gameF[row] = [];
					for (col=0; col<=6; col++) {
						gameF[row][col] = 0;
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
						
						document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+gameF[row][col]+"'> </span>";
					}	
				}
			}
			
			function check() {
			
				for (i=1; i<=2; i++) {
				
					for (col = 0; col <=3; col++) {
						for (row = 0; row <=5; row++) {
						
							if (gameF[row][col] == i) {
								if ((gameF[row][col+1] == i) && (gameF[row][col+2] == i) && (gameF[row][col+3] == i)) {
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
						
							if (gameF[row][col] == i) {
								if ((gameF[row+1][col] == i) && (gameF[row+2][col] == i) && (gameF[row+3][col] == i)) {
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
        					if (gameF[row][col] == i) {
								if ((gameF[row+1][col+1] == i) && (gameF[row+2][col+2] == i) && (gameF[row+3][col+3] == i)) {
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
						
							if (gameF[row][col] == i) {
								if ((gameF[row-1][col+1] == i) && (gameF[row-2][col+2] == i) && (gameF[row-3][col+3] == i)) {
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
						if (gameF[row][col] == 0) {
					
							gameF[row][col] = playerS;
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