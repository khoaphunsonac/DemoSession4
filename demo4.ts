let arr = [-15, -7, 0, 5, 12, 23, -34, 46, -50, 78,
-99, 18, -29, 37, 54, 66, -45, 82, 91, -10
];
let count = 0;
for (let number of arr) {
    if (number < 0) {
        console.log("Mảng tồn tại số âm");
        break;
    }
    count++;
}
if (count == arr.length) console.log("Mảng không tồn tại số âm");