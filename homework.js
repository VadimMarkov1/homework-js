function printDay(number) {
  switch(number) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четверг";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return "Некоректний порядковий номер дня"
  }
}

function changeString(str) {
  return str.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join('');
}

function insertX() {
  const xArray = [];
  for (let i = 0; i < 10; i++) {
    xArray.push('x');
  }
  return xArray;
} 

function oneTwoFunction(variable) {
  let func;
  if (variable > 0) {
      func = function() {
          console.log('один!');
      };
  } else {
      func = function() {
          console.log('два!');
      };
  }
  func();
}

function sumFunctionResults(func1=()=>3, func2=()=>4) {
  return func1() + func2();
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
      return false;
  }
  for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
          return false;
      }
  }
  return true;
}

function chunkArray(array, chunkSize) {
  const result = [];
  let index = 0;
  while (index < array.length) {
      result.push(array.slice(index, index + chunkSize));
      index += chunkSize;
  }
  return result;
}







