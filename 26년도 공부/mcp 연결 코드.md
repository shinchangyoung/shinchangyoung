```py
Python 기반 MCP 서버 구축 방법
직접 파이썬 코드로 제어하고 싶다면 앤스로픽에서 제공하는 mcp 파이썬 SDK를 사용합니다.

단계 1: 환경 설정
Bash
pip install mcp notion-client
단계 2: 기본 코드 구조 (Notion MCP Server)
아래는 노션의 페이지 리스트를 가져오는 기능을 제공하는 간단한 MCP 서버 예시입니다.

Python
from mcp.server.fastmcp import FastMCP
from notion_client import Client
import os

# MCP 서버 이름 설정
mcp = FastMCP("Notion-Manager")
# 환경 변수나 직접 입력으로 토큰 설정
notion = Client(auth=os.environ.get("NOTION_TOKEN"))

@mcp.tool()
async def search_notion(query: str):
    """노션 내의 페이지나 데이터베이스를 검색합니다."""
    results = notion.search(query=query).get("results")
    return [{"id": r["id"], "title": r.get("properties", {}).get("title", {}).get("title", [{}])[0].get("plain_text", "Untitled")} for r in results]

if __name__ == "__main__":
    mcp.run()
3. 설정 및 실행 (Claude Desktop 예시)
작성한 파이썬 서버를 실제 AI 호스트(예: Claude Desktop)에 연결해야 합니다.

설정 파일 열기:

macOS: ~/Library/Application Support/Claude/claude_desktop_config.json

JSON 설정 추가:

JSON
{
  "mcpServers": {
    "my-notion-server": {
      "command": "python",
      "args": ["/path/to/your/notion_mcp.py"],
      "env": {
        "NOTION_TOKEN": "your_integration_token_here"
      }
    }
  }
}
Claude 재시작: 오른쪽 하단에 🛠️ 아이콘이 뜨면 성공
```
