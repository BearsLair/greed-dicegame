function score(dice) {
  const scoringValues = {
    threeOnes: 1000,
    threeSixes: 600,
    threeFives: 500,
    threeFours: 400,
    threeThrees: 300,
    threeTwos: 200,
    one1: 100,
    one5: 50,
  };

  let finalScore = 0;

  let ones = [];
  let twos = [];
  let threes = [];
  let fours = [];
  let fives = [];
  let sixes = [];

  dice.map((num) => {
    switch (num) {
      case 1:
        ones.push(num);
        break;
      case 2:
        twos.push(num);
        break;
      case 3:
        threes.push(num);
        break;
      case 4:
        fours.push(num);
        break;
      case 5:
        fives.push(num);
        break;
      case 6:
        sixes.push(num);
        break;
    }
  });

  if (ones.length >= 3) {
    finalScore += scoringValues.threeOnes;
  }

  if (twos.length >= 3) {
    finalScore += scoringValues.threeTwos;
  }

  if (threes.length >= 3) {
    finalScore += scoringValues.threeThrees;
  }

  if (fours.length >= 3) {
    finalScore += scoringValues.threeFours;
  }

  if (fives.length >= 3) {
    finalScore += scoringValues.threeFives;
  }

  if (sixes.length >= 3) {
    finalScore += scoringValues.threeSixes;
  }

  if (ones.length > 3 || (ones.length < 3 && ones.length > 0)) {
    if (ones.length < 3) {
      finalScore += scoringValues.one1 * ones.length;
    } else if (ones.length > 3) {
      finalScore += scoringValues.one1 * (ones.length - 3);
    }
  }

  if (fives.length > 3 || (fives.length < 3 && fives.length > 0)) {
    if (fives.length < 3) {
      finalScore += scoringValues.one5 * fives.length;
    } else if (fives.length > 3) {
      finalScore += scoringValues.one5 * (fives.length - 3);
    }
  }

  return finalScore;
}

console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450
console.log(score([5, 1, 3, 4, 1])); // 250
console.log(score([1, 1, 1, 3, 1])); // 1100
console.log(score([3, 1, 3, 3, 5])); // 450

console.log(score([2, 2, 2, 2, 3])); // 200
console.log(score([2, 2, 2, 2, 2])); // 200
console.log(score([5, 5, 5, 2, 5])); // 550
