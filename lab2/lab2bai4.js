let daysOfWeek = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới vào mảng
daysOfWeek.splice(0, 0, "Mon"); // Thêm "Mon" vào vị trí đầu tiên (index 0)
daysOfWeek.splice(2, 0, "We"); // Thêm "We" vào vị trí thứ 3 (index 2)
daysOfWeek.splice(4, 0, "Fri"); // Thêm "Fri" vào vị trí thứ 5 (index 4)
daysOfWeek.splice(6, 0, "Sun"); // Thêm "Sun" vào vị trí cuối cùng (index 6)

// Xóa phần tử "Nine" ra khỏi mảng
let indexToDelete = daysOfWeek.indexOf("Nine");
if (indexToDelete > -1) {
  daysOfWeek.splice(indexToDelete, 1);
}

console.log(daysOfWeek); // ["Mon", "Tue", "We", "Thu", "Fri", "Sat", "Sun"]