let arr = [3, 7, 15, 22, 8, 5, 12, 19, 30, 25,
    14, 9, 18, 11, 27, 4, 6, 20, 13, 21
    ];
// Counter số âm
let count = 0;
for (let number of arr) {
    if (number < 0) count++;
}
if (count != 0)
    console.log(`Số phần tử âm là: ${count}`);
else
    console.log('Mảng không tồn tại số âm ');
