```py

Nailart 라즈베리파이 연결 


맥북에서 라즈베리파이를 연결
학교 ipf로 접속한 경우 (선문대 본관 ip)

일답적으로 접속을 할려고 할때(선문대 ip기준)
이걸 일반적으로 접속을 시도할려고 하면 내 집의 ip주소를 알아야함
ssh tae4an@172.16.9.180

로컬호스트 3000으로 접속하는 경우
ssh -L 3000:localhost:3000 tae4an@172.16.9.180
와이파이는 선문게스트라고 적혀있는 와이파이로 접속 
비번 : toyo0907

라즈베리파이를 연결하게 되었을때 외부접속을 시도하려는 맥북의 ip주소도 같은 와이파이를 사용을 해야함


위에서 비번으로 입력 한 후 파일 이동후 실행
tae4an@raspberrypi:~ $ cd nailart
tae4an@raspberrypi:~/nailart $ pnpm run start


작업하고 있는 코드를 수정하게 되었을 경우 맥북에서 커밋후 푸쉬

깃허브에 올리게 되면 라즈베리파이에서 
tae4an@raspberrypi:~ $ cd nailart
로 이동후 깃허브 pull명령어를 입력 해야함
 cat .env. local 있는지 확인 
없으면  nano .env. local로 파일을 열고 
 NEXT_PUBLIC_SUPABASE_URL=https://cmrvcqrmrlwzjtdewaud.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcnZjcXJtcmx3emp0ZGV3YXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMzM5MTMsImV4cCI6MjA4NzYwOTkxM30.hDqzZhgahMtsEuuLj2jCNSobkNWpjOCaZ6aI7FmQsio
이걸 북붙하고 cmd+o -> enter -> cmd+x로 저장 

그리고  pnpm run start 실행


```
