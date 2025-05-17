// http 모듈과 파일 시스템 모듈(fs)을 불러옵니다.
var http = require('http');
var fs = require('fs');

// 서버를 생성합니다. 클라이언트가 요청을 보낼 때마다 이 함수가 호출됩니다.
var app = http.createServer(function(request, response) {
    var url = request.url;  // 요청된 URL을 가져옵니다.

    // 루트 경로 ('/')로 접속하면 index.html 파일을 열도록 설정합니다.
    if (request.url == '/') {
        url = '/index.html';
    }

    // 브라우저가 자동으로 요청하는 favicon.ico 요청은 무시하고 404로 응답합니다.
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }

    response.writeHead(200);  // 성공(200) 상태 코드로 응답 헤더를 작성합니다.

    console.log(__dirname + url);  // 현재 디렉토리와 요청된 파일 경로를 출력합니다.

    // 요청된 파일을 동기적으로 읽어와서 클라이언트에 응답합니다.
    response.end(fs.readFileSync(__dirname + url));
});

// 서버를 3002번 포트에서 실행합니다.
app.listen(3002);


//터미널에서 node mian.js를 입력
//브라우저에 http://localhost:3002 를 입력
//-> 입력후 C:\Users\toyoa\OneDrive\바탕 화면\nodejs\helloword/index.html 라는 문구가 아래에 바라뜸
//ctrl+c -> ^C를 입력하면 웹 서버가 꺼짐
//