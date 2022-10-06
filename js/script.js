const inputan = 5; // Msaukan nilai disini nati akan di proses didalam functio switch dan dicek, hasil cek akan di tampung ke dalam variable num;
let num;
switch (inputan) {
  case 1:
    num = "1";
    break;
  case 2:
    num = "2";
    break;
  case 3:
    num = "fizz";
    break;
  case 4:
    num = "4";
    break;
  case 5:
    num = "buzzz";
    break;
  case 6:
    num = "fizz";
    break;
  case 7:
    num = "7";
    break;
  case 8:
    num = "8";
    break;
  case 9:
    num = "fizz";
    break;
  case 10:
    num = "buzz";
    break;
  case 11:
    num = "11";
    break;
  case 12:
    num = "fizz";
    break;
  case 13:
    num = "13";
    break;
  case 14:
    num = "14";
    break;
  case 15:
    num = "fizzbuzz";
    break;
}
document.body.innerHTML = num;
console.log(num);
