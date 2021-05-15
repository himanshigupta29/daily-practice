let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}

// let x = 1;

// switch(x) {
//   case 0: {
//     let foo;
//     break;
//   }
//   case 1: {
//     let foo;
//     break;
//   }
// }