// typescript da ozgaruvchilar static elon qilinadi javascriptda esa dinamik
//  elon qilinadi .
// static bu - ozgaruvchi tipini oldindan belgilab qoyish kerak degani
//  dinamik bu - ozgaruvchi tipi elon qilinmasa qanday malumot kirsa shunday
//  xotiradan joy olib ozi uchun type belgilab oladi.

// REMEMBER

// ** Why and when to use TypeScript
//  Nega va qachon  typescriptdan foydalanamiz

// 1.Safety - Xavfsiz  -- xatoni tez topish mumkin
// 2.Readibility - Oqish qobiliyati  --tushunish oson.
// 3.Tooling - Uskunalar

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
