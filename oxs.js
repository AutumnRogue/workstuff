let oxs = {
  player1: "x",
  player2: "o",
  grid: [["x", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]],
  game() {
    for (i = 0; i < 3; i++) {
      console.log(this.grid[i]);
    }
  },
  gamePlay(pos, pos2) {
    this.grid[pos][pos2] = this.player1;
    // this.grid.splice([pos][pos2],1,this.player1)
  },
  returnGame() {
    return this.game();
  },
  checkLine(val1, val2, val3) {
      if( val1 == 'x' && val2 == 'x' && val3 == 'x'){
          return true
      } else if(val1 == 'o' && val2 == 'o' && val3 == 'o') {
    return true
  } else {
      return false
  }
},
checkWin(){
for(i=0; i<3; i++){
    if (this.checkLine(this.grid[i][0], this.grid[i][1], this.grid[i][2])) {
        return true
        } else if(this.checkLine(this.grid[0][i], this.grid[1][i],this.grid[2][i])) {
        return true
    }
}
    if(this.checkLine(this.grid[0][0], this.grid[1][1],this.grid[2][2])) {
        return true
        
    }   else if(this.checkLine(this.grid[0][2], this.grid[1][1],this.grid[2][0])) {
            return true
    } return false
},
   printWin() {
     while (this.checkWin()) {
       console.log("Winner!");
       break;
     }
   }
};
oxs.gamePlay(1,1);
oxs.gamePlay(2,2);
oxs.returnGame();
oxs.checkWin();
oxs.printWin()



