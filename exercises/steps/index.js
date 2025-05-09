// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let step = 1;

//     while (step <= n) {
//         console.log('#'.repeat(step) + ' '.repeat(n - step));
//         // console.log(Array(step + 1).join("#") + Array(n - step + 1).join(" "))
//         step++
//     }
// }

// Recursion solution
// function steps(n, row = 0, stair = '') { // default values needed
//     if (n === row) { // Steps essentially is a square, so if it matches, the end
//         return;
//     }

//     if (n === stair.length) { // If true, the stair string is completed for the CURRENT row
//         console.log(stair);
//         return steps(n, row + 1); // This means moving on to the next row
//     }

//     if (stair.length <= row) { // This builds the current row
//         stair += '#'
//     } else {
//         stair += ' ';
//     }
//     steps(n, row, stair);
// }

function steps(n) {
    if (n <= 0) {
        return;
    }

    let step = 1;

    while(step <= n) {
        console.log('#'.repeat(step) + ' '.repeat(n - step));
        step++;
    }
}

steps(3)
module.exports = steps;
