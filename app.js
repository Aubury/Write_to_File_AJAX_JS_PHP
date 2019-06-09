let text = document.querySelector('#text'),
    button = document.querySelector('#send');

button.addEventListener('click',function(){
  
 let param = '&text='+text.value;
 let request = new XMLHttpRequest();
 request.open("POST", 'postData.php');
//В заголовке говорим что тип передаваемых данных закодирован. 
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 request.addEventListener('readystatechange', function(){
          //если запрос пришёл и статус запроса 200 (OK)
          if ((request.readyState==4) && (request.status==200)) {
            // например, выведем объект XHR в консоль браузера
            console.log(request);
            // и ответ (текст), пришедший с сервера в окне alert
            console.log(request.responseText);
          }
      });
      
request.send(param);     
text.value = '';
});






// // получаем объект формы
// let form = new FormData(document.forms.data);

//   let request = new XMLHttpRequest();
 
//   request.open("POST", 'postData.php');
     
//     request.addEventListener('readystatechange', function(){
//         //если запрос пришёл и статус запроса 200 (OK)
//         if ((request.readyState==4) && (request.status==200)) {
//           // например, выведем объект XHR в консоль браузера
//           console.log(request);
//           // и ответ (текст), пришедший с сервера в окне alert
//           console.log(request.responseText);
//         }
//     });
// //  document.querySelector('#output').innerHTML = form.innerHTML;
//  request.send(form);
