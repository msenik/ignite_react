/*
Задача 2
Используя Promise, асинхронно загрузите на страницу файл image.jpg,
находящийся в папке Classwork рядом с файлом с задачами.
*/

function httpGet(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}


window.onload = function(){
  httpGet("image.jpg")
  .then(
    response => {
      const blb = new Blob([response], {type: 'image/jpg'});
      const url = (window.URL || window.webkitURL).createObjectURL(blb);
      const i = new Image();
      i.src = url;
      document.getElementById("root").append(i);
      return response;
    },
    error => alert(`Rejected: ${error}`)
  );
}
