let a = parseFloat(prompt("Nhập cạnh a:"));
let b = parseFloat(prompt("Nhập cạnh b:"));
let c = parseFloat(prompt("Nhập cạnh c:"));

if (a + b > c && b + c > a && a + c > b) {
  if (a === b && b === c) {
    console.log("Tam giác đều");
  } else if (a === b || b === c || c === a) {
    if (a*a + b*b === c*c || b*b + c*c === a*a || a*a + c*c === b*b) {
      console.log("Tam giác vuông cân");
    } else {
      console.log("Tam giác cân");
    }
  } else if (a*a + b*b === c*c || b*b + c*c === a*a || a*a + c*c === b*b) {
    console.log("Tam giác vuông");
  } else {
    console.log("Tam giác thường");
  }
} else {
  console.log("Đây không phải là 3 cạnh của tam giác");
}