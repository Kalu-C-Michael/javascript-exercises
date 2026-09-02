const repeatString = (string, num) => {
 if (num < 0) {
    return `ERROR`;
 }

 let reps = '';
 for (let i = 0; i < num; i++) {
  reps += string;
 }
 return reps;
};

// Do not edit below this line
module.exports = repeatString;
