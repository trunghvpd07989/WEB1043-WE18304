let fullName = prompt("Nhập họ và tên:");
let gender = prompt("Nhập giới tính (Nam hoặc Nữ):");

// Tách chuỗi họ tên thành các phần riêng biệt
let parts = fullName.split(" ");
let lastName = parts[0];
let middleName = "";
let firstName = "";

if (parts.length === 3) {
  middleName = parts[1];
  firstName = parts[2];
} else if (parts.length === 2) {
  firstName = parts[1];
}

console.log("Họ: " + lastName);
console.log("Tên đệm: " + middleName);
console.log("Tên: " + firstName);

if (gender === "Nam") {
  middleName = "Văn";
} else if (gender === "Nữ") {
  middleName = "Vẽ";
}

console.log("Tên mới: " + lastName + " " + middleName + " " + firstName);