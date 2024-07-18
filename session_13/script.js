const array = [
  8,
  "55",
  [
    2,
    "Hello World",
    {
      a: 2,
      b: 5,
    },
    false,
  ],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];
const [
  ,
  ,
  ,
  {
    arr: [, , , [, number]],
    obj: { d: name },
  },
] = array;
console.log(`The Number is: ${number}, The Name is: ${name}`);
function checkDuplicates(myArray, idFunc) {
  let tempArray = new Array();
  for (const el of myArray) {
    const id = idFunc(el);
    if (tempArray.includes(id)) return true;
    tempArray.push(id);
  }
  return false;
}

console.log(
  "The array has duplicates?",
  checkDuplicates(
    [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"],
    JSON.stringify
  )
);
