// Найти различия между цифрами в 2 массивах

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

// const third = [8, 13, 222, 93, 43, 11];
// const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

const getUnique = (firstArr, secondArr) => {
 // 1 variant
 //  const thirdArray = [...firstArr, ...secondArr];
 //  const newArray = thirdArray.filter((number, index) => {
 //   return index === thirdArray.indexOf(number);
 //  });
 //  return newArray.reduce((acc, el) => {
 //   return !firstArr.includes(el) || !secondArr.includes(el) ? [...acc, el] : acc;
 //  }, []);
 // 2 variant
 return [...firstArr, ...secondArr]
  .filter((el, index, array) => {
   return index === array.indexOf(el);
  })
  .sort()
  .reduce((acc, el) => {
   return !firstArr.includes(el) || !secondArr.includes(el)
    ? [...acc, el]
    : acc;
  }, []);
};

console.log(getUnique(first, second));

// -----------------------------------------------------------
// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как The Karate Kid (2010) и After Earth (2013). Джейден также
// известен своей философией, которую он распространяет через Twitter.
// Когда он пишет в Твиттере, он известен тем, что почти всегда использует
// каждое слово с большой буквы. Для простоты вам придется писать каждое слово
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
// Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной
// буквы так, как он их изначально набирал.

// String.prototype.toJadenCase = function () {
//  return this.split(' ')
//   .map(el => el.replace(el[0], el[0].toUpperCase()))
//   .join(' ');
// };

// function toJadenCase(string) {
//  return string
//   .split(' ')
//   .map(el => el.replace(el[0], el[0].toUpperCase()))
//   .join(' ');
// }
// const sentence = "How can mirrors be real if our eyes aren't real";
// console.log(sentence.toJadenCase());
// console.log(toJadenCase(sentence));
