let arr = [-34, 58, -12, 77, 8, -67, 29, 0, -85, 14, 92, -45, 37, -3, 21, -99, 64, 5, -26, 18];
let s1 = 0;
for (let i = 0; i < arr.length; i++) {
    s1 += arr[i];
}
console.log(`Tổng mảng la: ${s1}`);
// Tổng các phần tử dương 
let s2 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) s2 += arr[i];
}
console.log(`Tổng mảng có phẩn tử là số dương là: ${s2}`);

// Tính tổng các phần tử chẵn và có giá trị nằm trong  khoảng (min;max) 
let s3 = 0;
let min = -10;
let max = 20;
for (let number of arr) {
    if (number % 2 == 0 && number >= min && number <= max) s3 += number;
}
console.log(`Tổng các phần tử chẵn và có giá trị nằm trong  khoảng (min;max) là: ${s3}`);

