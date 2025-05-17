
var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id

    console.log(queryData.id);
    if(_url == '/'){
      title = 'toyoaki';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template=` 
<!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
    
  </ul>
  <h2>${title}</h2>
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>
    `;
    response.end(template);
    //queryData를 읽어온다
 
});
app.listen(3000);

//http://localhost:3000/?id=CSS
//웹 브라우저 -> id값 CSS만 출력
//웹 브라우저에서 css가 나오는걸 확인할 수 있다.
//var template변수 안에  li ->ul로 바꿔봄


//이 코드의 설명 
//html 파일이 1에서 3까지 있는데 이 코드들은 형식적으로는 모든 같은 유형의 코드인걸 확인이 가능하다
//그래서 html1의 코드를 template변수에 담아 여기서 title태그하고 h2태그를 ${title}의 코드로 수정
//title은 위에서 qureyData가 포함하고 있는데 이는 페이지별로 무슨 페이지의 이름인지 구분하기 위해 만든 변수
//기본적으로 웹 화면을 띄울땐 http://localhost:3000/가 출력
//HTML태그를 입력하면 http://localhost:3000/?id=HTML로 변형 
//id는 페이지별로 각각 다름

//이걸 한 목적
//이 main코드에서 html코드를 다른 html도 하나하나 수정할 필요없이 한꺼번에 변경이 가능하다!
//li -> ul 태그를 바꾸고 다 변형할 수 있는것처럼

//gpt로 정리한 문구
// 이 코드는 Node.js의 http, fs, url 모듈을 사용하여 간단한 웹 서버를 만드는 예제입니다.
// 사용자가 웹 페이지에 접속하면, URL 쿼리스트링의 id 값에 따라 제목(title)을 변경해 응답합니다.

// 예: http://localhost:3000/?id=CSS → title이 'CSS'로 바뀜
