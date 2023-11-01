function convertToRoman(num) {
  let rta = "";

  while (num >= 1000) {
    rta += "M";
    num -= 1000;
  }
  if (num >= 900) {
    rta += "CM";
    num -= 900;
  } else if (num >= 500) {
    rta += "D";
    num -= 500;
    while (num >= 100) {
      rta += "C";
      num -= 100;
    }
  } else if (num >= 400) {
    rta += "CD";
    num -= 400;
  } else {
    while (num >= 100) {
      rta += "C";
      num -= 100;
    }
  }

  if (num >= 90) {
    rta += "XC";
    num -= 90;
  } else if (num >= 50) {
    rta += "L";
    num -= 50;
    while (num >= 10) {
      rta += "X";
      num -= 10;
    }
  } else if (num >= 40) {
    rta += "XL";
    num -= 40;
  } else {
    while (num >= 10) {
      rta += "X";
      num -= 10;
    }
  }

  if (num >= 9) {
    rta += "IX";
    num -= 9;
  } else if (num >= 5) {
    rta += "V";
    num -= 5;
    while (num >= 1) {
      rta += "I";
      num -= 1;
    }
  } else if (num >= 4) {
    rta += "IV";
    num -= 4;
  } else {
    while (num >= 1) {
      rta += "I";
      num -= 1;
    }
  }

  console.log(num);

  return rta;
}

console.log(convertToRoman(2));
