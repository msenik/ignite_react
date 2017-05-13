/*Задача 1
Используя деструктуризацию, присвойте свойства объекта options переменным с соответствующими именами и выведите их на экран.*/

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

let container = document.getElementById("root");
container.innerHTML = `
  title: ${title} <br>
  width: ${width} <br>
  height: ${height} <br>
`;
