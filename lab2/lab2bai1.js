let a = parseFloat(prompt("Nhập giá trị của a:"));
let b = parseFloat(prompt("Nhập giá trị của b:"));
let c = parseFloat(prompt("Nhập giá trị của c:"));

let delta = b * b - 4 * a * c;

if (a === 0) {
  console.log("Đây không phải là phương trình bậc 2");
} else if (delta < 0) {
  console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
  let x = -b / (2 * a);
  console.log("Phương trình có nghiệm kép x = " + x);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("Phương trình có hai nghiệm phân biệt:");
  console.log("x1 = " + x1);
  console.log("x2 = " + x2);
}