
# 오늘 공부한 SQL & Oracle 계층형 쿼리 요약

## 1. 기본 SQL 키워드

### 1.1 DISTINCT

* 중복 제거

```sql
SELECT DISTINCT 컬럼명 FROM 테이블명;
```

* 여러 컬럼 사용 가능

```sql
SELECT DISTINCT col1, col2 FROM 테이블명;
```

### 1.2 BETWEEN

* 범위 비교 연산자, **이상(>=)과 이하(<=) 포함**

```sql
SELECT * FROM emp WHERE empno BETWEEN 100 AND 105;
```

### 1.3 집합 연산자

| 연산자       | 설명  | 특징                         | Oracle 지원 여부 |
| --------- | --- | -------------------------- | ------------ |
| UNION     | 합집합 | 중복 제거                      | ✅            |
| UNION ALL | 합집합 | 중복 포함                      | ✅            |
| INTERSECT | 교집합 | 공통 행 반환                    | ✅            |
| MINUS     | 차집합 | 첫 번째 쿼리에서 두 번째 쿼리 제거       | ✅            |
| EXCEPT    | 차집합 | SQL 표준, Oracle에서는 MINUS 사용 | ❌            |

## 2. Oracle 계층형 쿼리 키워드

| 키워드 / 함수          | 뜻 / 역할        | 사용 예시                                                       | 출력 예시 / 특징                               | Oracle 지원 여부 |
| ----------------- | ------------- | ----------------------------------------------------------- | ---------------------------------------- | ------------ |
| LEVEL             | 트리 깊이(루트 = 1) | `SELECT LEVEL, ename FROM emp CONNECT BY PRIOR empno = mgr` | LEVEL 1 = 루트, LEVEL 2 = 자식, LEVEL 3 = 손자 | ✅            |
| CONNECT_BY_ROOT   | 루트 노드 값       | `SELECT ename, CONNECT_BY_ROOT ename FROM emp ...`          | 모든 행에서 루트(시작점) 값 표시                      | ✅            |
| CONNECT_BY_ISLEAF | 마지막 노드인지 여부   | `SELECT ename, CONNECT_BY_ISLEAF FROM emp ...`              | 1 = leaf, 0 = 내부 노드                      | ✅            |
| PRIOR             | 부모 컬럼 지정      | `CONNECT BY PRIOR empno = mgr`                              | PRIOR 뒤 컬럼 = 부모, 나머지 컬럼 = 자식             | ✅            |
| CONNECT BY        | 부모-자식 계층 연결   | `CONNECT BY PRIOR empno = mgr`                              | 트리 구조 연결                                 | ✅            |
| ORDER SIBLINGS BY | 같은 부모 형제끼리 정렬 | `ORDER SIBLINGS BY ename`                                   | 형제 노드끼리 이름순 정렬, 트리 구조 유지                 | ✅            |

### 2.1 CONNECT BY PRIOR 예시

```sql
SELECT ename, empno, mgr, LEVEL
FROM emp
START WITH mgr IS NULL
CONNECT BY PRIOR empno = mgr;
```

* PRIOR 뒤 컬럼 = 부모, 나머지 컬럼 = 자식
* 부모 → 자식 연결 트리 생성

### 2.2 ORDER SIBLINGS BY 예시

```sql
SELECT LEVEL, ename, empno, mgr
FROM emp
START WITH mgr IS NULL
CONNECT BY PRIOR empno = mgr
ORDER SIBLINGS BY ename;
```

* 같은 부모 형제끼리 이름순 정렬
* 트리 구조는 그대로 유지

### 2.3 역방향 계층 조회

```sql
SELECT LEVEL, ename, empno, mgr
FROM emp
START WITH empno = 105
CONNECT BY PRIOR mgr = empno;
```

* 자식 → 부모 방향 탐색
* LEVEL 1 = 시작점, 루트까지 올라감

## 3. 트랜잭션 관련

* 트랜잭션: DB 작업의 최소 단위, **원자성 보장**
* SAVEPOINT 사용하여 부분 롤백 가능

```sql
BEGIN;
UPDATE table1 SET col = 10;
SAVEPOINT s1;
UPDATE table1 SET col = 20;
ROLLBACK TO s1;
COMMIT;
```

* s1 시점으로 롤백 후 커밋 가능

## 4. NULL 관련

* `NULL + 숫자` = NULL
* `NULL + 문자열` = NULL
* 비교 연산: `NULL = NULL` → 결과 UNKNOWN (FALSE)
* `IS NULL`, `IS NOT NULL` 사용

---

*오늘 공부한 내용을 데이터베이스 기
