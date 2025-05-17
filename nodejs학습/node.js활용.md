코드이름: main.js
```py
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3002);

```
Node.js를 활용해 웹 브라우저에 화면을 띄우는 방법

1.HTML, CSS, JavaScript 코드가 들어 있는 폴더의 위치를 탐색기에서 확인한다.

2.확인한 폴더 경로를 명령어 프롬프트(또는 VS Code 터미널)에 붙여넣는다.

3.폴더 위치로 이동되었는지 확인한 후, cd 명령어로 이동하고 node main.js를 실행한다.

4.실행이 완료되면 브라우저에서 http://localhost:3002를 열어, 화면이 제대로 표시되는지 확인한다.




