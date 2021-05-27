// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */





// m by n - 4 by 5



var markinEveryDirection = function(grid, i, j, m, n) {

  // console.log(i,j);

  if(grid[i][j] === '1') {

    grid[i][j] = '2';


    if( j+1 < n) {
      markinEveryDirection(grid, i, j+1, m, n);
    }

    if( j-1 >= 0) {
      markinEveryDirection(grid, i, j-1, m, n);
    }

    if(i+1 < m) {
      markinEveryDirection(grid, i+1, j, m, n);
    }

    if(i-1 >= 0) {
      markinEveryDirection(grid, i-1, j, m, n);
    }

    

  }  

}


 var numIslands = function(grid) {

  let e, c = 0;

  const m = grid.length;
  const n = grid[0].length;

  // c is  toatl island count 

  for(let i = 0; i < m; i++) {

    for(let j = 0; j < n; j++) {

      e = grid[i][j];
      if(e === '1') {

        // console.log('=========================',i, j);
        c++;
        markinEveryDirection(grid, i, j, m, n);
      }

    }

  }

  // console.log(grid);
  return c;

};

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

const grid22 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid2));

