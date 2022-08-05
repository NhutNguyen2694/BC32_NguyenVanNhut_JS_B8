let numbers = [];
//them n vao màng
function themSoN() {
  let number = +document.getElementById("numberN").value;
  numbers.push(number);
  document.getElementById("spanSoN").innerHTML = numbers.join(",");
}
// bai 1: tổng số dương
// [1, 2, 3, 4, 5]
function tongN() {
  let total = numbers.reduce((total, value) => {
    return value >= 0 ? total + value : total;
  }, 0);
  document.getElementById("spanTongN").innerHTML =
    "Tổng các số dương: " + total;
}
//Bài 2: đếm số dương
function demNduong() {
  let numberOfNegative = numbers.reduce((count, value) => {
    return value > 0 ? count + 1 : count;
  }, 0);
  document.getElementById("spanDemN").innerHTML =
    "Đếm các số dương: " + numberOfNegative;
}
// Bài 3 : tìm số nhỏ nhất
function soMin() {
  let numberMin = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numberMin) {
      numberMin = numbers[i];
    }
  }

  document.getElementById("spanSoMin").innerHTML =
    "Số nhỏ nhất là : " + numberMin;
}
// Bài 4 : tìm số dương nhỏ nhât
function soDMin() {
  let soDuong = [];
  soDuong = numbers.filter((value) => {
    return value > 0;
  });
  // console.log(soDuong);
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > 0) {
  //     soDuong.push(numbers[i]);
  //   }
  // }
  let minInNumbers = 0;
  if (soDuong.length === 0) {
    minInNumbers = "không có số dương nào";
  } else {
    minInNumbers = "Số dương nhỏ nhất là : " + Math.min.apply(Math, soDuong);
  }
  document.getElementById("spanSoDMin").innerHTML = minInNumbers;
}
// Bài 5 : Tìm số chẵn cuối cùng
function soChanC() {
  let soChans = numbers.filter((value) => {
    return value % 2 === 0;
  });
  let SearchSoChanLast = 0;
  if (soChans.length === 0) {
    SearchSoChanLast = "Không có số chẵn";
  } else {
    SearchSoChanLast = "Số chẵn cuối cùng là : " + soChans[soChans.length - 1];
  }
  document.getElementById("spanSoChan").innerHTML = SearchSoChanLast;
}
// Bài 6 : Đổi chỗ
function doiCho() {
  let number1 = +document.getElementById("number1").value;
  let number2 = +document.getElementById("number2").value;

  let newnumbers = [...numbers];

  let tem = newnumbers[number1];
  newnumbers[number1] = newnumbers[number2];
  newnumbers[number2] = tem;

  document.getElementById("spanDoiCho").innerHTML = newnumbers;
}
// Bài 7 : Sắp xếp tăng dần
function tangDan() {
  let sapSep = numbers.sort((a, b) => a - b);

  document.getElementById("spanTangDan").innerHTML = "Kết quả là : " + sapSep;
}
// Bài 8 : Tìm số nguyên tố đầu
function soNT() {
  let soNguyenTo = "";
  for (let i = 0; i < numbers.length; i++) {
    let kiemTraSNT = checkSNT(numbers[i]);
    if (kiemTraSNT && numbers[i] > 1) {
      soNguyenTo = numbers[i];
      break;
    } else {
      soNguyenTo = "-1";
    }
  }

  function checkSNT(number) {
    let soNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        soNguyenTo = false;
        break;
      }
    }
    return soNguyenTo;
  }

  document.getElementById("spanSoNT").innerHTML =
    "Số nguyên tố đầu tiên là : " + soNguyenTo;
}
// Bài 9 : Đếm số nguyên
let number4 = [];
function them() {
  let number = +document.getElementById("number3").value;
  number4.push(number);
  document.getElementById("spanThemSoN").innerHTML = number4.join(",");
}
function demSN() {
  let dem = 0;
  for (let i = 0; i < number4.length; i++) {
    let checkSoNguyen = Number.isInteger(number4[i]);
    if (checkSoNguyen) {
      dem++;
    }
  }

  document.getElementById("spanDemSoN").innerHTML =
    "Số nguyên trong mảng là : " + dem;
}
// Bài 10 : So sánh số lượng số âm và dương
function soSanh() {
  let soDuong = 0;
  let soAm = 0;
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      soDuong++;
    }
    if (numbers[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    result = "Số dương > Số âm";
  } else if (soDuong < soAm) {
    result = "Số dương < Số âm";
  } else {
    result = "Số âm = Số dương";
  }

  document.getElementById("spanSoSanh").innerHTML = result;
}
