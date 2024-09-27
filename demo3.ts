let arr = [-15, -7, 0, 5, 12, 23, -34, 46, -50, 78,
-99, 18, -29, 37, 54, 66, -45, 82, 91, -10
];
//Tìm giá trị lớn nhất của mảng
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log(`Giá trị lớn nhất trong mảng là ${max} `);

//Tìm giá trị lớn nhất của mảng
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
}
console.log(`Giá trị nhỏ nhất trong mảng là ${min} `);