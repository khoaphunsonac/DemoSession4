let arr = [5, 12, 7, 5, 19, 3, 12, 8, 15, 10,
    21, 5, 30, 8, 12, 19, 25, 30, 5, 7,
    14, 17, 22, 8, 10, 15, 6, 8, 19, 30,
    11, 17, 5, 14, 22, 33, 5, 4, 10, 9,
    18, 12, 20, 25, 22, 17, 5, 6, 7, 19,
    30, 33, 25, 5, 15, 12, 10, 8, 19, 24,
    33, 2, 3, 5, 7, 8, 9, 10, 11, 12,
    15, 19, 21, 22, 25, 30, 5, 5, 6, 6,
    7, 8, 9, 10, 11, 12, 12, 12, 12, 12        
];

//1. Tính giá trị trung bình dương của mảng
let sum = 0;
let count = 0;
for (let number of arr) {
    if (number > 0) {
        sum += number;
        count++;
    }
}
let Ave = sum / count;
console.log(`1. Trung bình cộng của các phần tử dương trong mảng là: ${Ave}`);

//2. Dem co bao nhieu phan tu co gia tri bang voi gia tri lon nhat cua mang.
let max = arr[0];
count = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
for (let i = 1; i < arr.length; i++) {
    if (arr[i] == max) count++;
}
console.log(`2. Số phần tử có giá trị lớn nhất là: ${count}`);

//3. Liet ke cac uoc so cua moi phan tu duong trong mang. Goi y: Su dung 2 vong lap de tim
console.log("3. Ước của các số dương trong mảng: ")
for (let number of arr) {
    if (number <= 0) continue;
    let String = "";
    for (let i = 1; i < number; i++) {
        if (number % i == 0) String += i + " ";
    }
    console.log(`\t ${number} : ${String}`);
}

//4. Liet ke cac phan tu la so nguyen to trong mang
let String = "";
for (let number of arr) {
    if (number <= 0) continue;
    let count = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) count++;
    }
    if (count == 1) String += number + " ";
}
if (String == "") console.log("4. Mảng không có số nguyên tố");
else console.log(`4. Các phần tử là số nguyên tố trong mảng là: ${String}`);
//5. Kiem tra mang co ton tai so nguyen to hay khong?
let flag = false;
for (let number of arr) {
    if (number <= 0) continue;
    let count = 0;

    for (let i = 1; i < number; i++) {
        if (number % i == 0) count++;
    }
    if (count == 1) {
        flag = true;
        break;
    };
}
if(flag) console.log("5. Mảng tồn tại số nguyên tố");
else console.log("5. Mảng không tồn tại số nguyên tố");
//6. Dem so lan xuat hien cua bien x trong mang 
let x = arr[7];
count = 0;
for (let number of arr) {
    if (number == x) count++;
}
console.log(`6. Phần tử ${x} xuất hiện ${count} lần `);


