// 1. use map method on dice
//

function score(dice) {
  const scoringValues = {
    threeOnes: 1000,
    threeSixes: 600,
    threeFives: 500,
    threeFours: 400,
    threeThrees: 300,
    threetwos: 200,
    one1: 100,
    one5: 50,
  };

  dice.map((num) => {});
}

// console.log(score([2, 3, 4, 6, 2])); // 0
// console.log(score([4, 4, 4, 3, 3])); // 400
// console.log(score([2, 4, 4, 5, 4])); // 450
// console.log(score([5, 1, 3, 4, 1])); // 250
console.log(score([1, 1, 1, 3, 1])); // 1100
// console.log(score([2, 4, 4, 5, 4])); // 450
