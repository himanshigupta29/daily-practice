{ // TDZ starts at beginning of scope

  console.log('hiiiiiiiiii start');
  console.log(bar); // undefined
  console.log(foo); // ReferenceError

  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
  console.log('hiiiiiiiiii end');

}
