/* 13번 문제
x = 14
if ((10 < x) && (x < 20)) {
  console.log(x);
} */

/* 14번 문제
 i = 1;
 while (i <=10) {
  if(i % 5 == 0) {
    console.log(i);
  }
  i++;
} */

/* 15번 문제
for(let i = 10; i >= 0; i -= 3) {
  console.log(i);
} */

/* 16번 문제
let cm = prompt('센티미터를 입력하세요');
console.log(cm + 'cm은 ' + cm/2.54 + '인치, ' + cm/2.54/12 + '피트 입니다.')

/* 17번 문제
let r = prompt('반지름?');
let h = prompt('높이?');
console.log('원기둥의 부피 : ' + r * r * 3.14 * h);

/* 18번 문제
let input = prompt("입력해주세요", "입력")
console.log('천의 자리 :', parseInt(input/1000), '백의 자리 :', parseInt(input%1000/100), '십의 자리 :', parseInt(input%100/10), '일의 자리 :', parseInt(input%10)); */

/* 19번 문제
data = ['원숭이', '닭', '개', '돼지', '쥐', '소', '범', '토끼', '용', '뱀', '말', '양']
let input = prompt("태어난 연도를 입력해주세요.", "입력")
console.log(data[input % 12]+'띠'); */

// document 내에서 작동하는 코드
/* 20번 문제
for(i = 1; i <= 10; i++) {
  for(j = 0; j < i; j++){
    document.write('*')
  }
  document.write("<br>");
} */

/* data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num = 0
for (i = 0; i < data[i]; i++) {
  while (num < data[i]) {
    console.log('*');
    console.log(i);
    num++;
  }
} */

/* 21번 문제
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n-1);
}
let num = prompt("입력해주세요.", "입력");
alert('factorial('+num+') = ' + factorial(num)); */

// 22번 문제

let object = {
  이름: 'C#프로그래밍(2판)',
  초판발행: '2021년 1월 5일',
  지은이: '윤인성',
  펴낸이: '전태호',
  펴낸곳: '한빛아카데미(주)',
  책임편집: '김성무',
  기획: '김성무',
  편집: '정서린',
  디자인: '최연희, 이아란'
};
console.log(object['이름']);
for (let i in object) {
  console.log(i + ':' + object[i]);
}