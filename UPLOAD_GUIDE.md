# 📁 Nature Report Korea - 파일 업로드 가이드

## 📂 폴더 구조

```
nature-report-pro/
├── public/
│   ├── images/
│   │   ├── hero/           # 각 페이지 히어로 이미지
│   │   ├── cards/          # Field Observations 카드 이미지
│   │   └── thumbnails/     # 썸네일 이미지 (선택사항)
│   └── reports/            # 생태 보고서 PDF/Markdown
└── src/
    └── data/
        └── videos.json     # 영상 데이터 (재생목록 URL 포함)
```

---

## 🖼️ 이미지 파일 업로드

### 1. 히어로 이미지 (Hero Images)
**경로**: `public/images/hero/`

각 페이지 상단 풀스크린 배경 이미지입니다.

| 파일명 | 용도 | 권장 크기 |
|--------|------|-----------|
| `home-hero.jpg` | 홈페이지 배경 | 1920x1080px 이상 |
| `stream-hero.jpg` | 중랑천 페이지 배경 | 1920x1080px 이상 |
| `mountain-hero.jpg` | 산 페이지 배경 | 1920x1080px 이상 |
| `species-hero.jpg` | 종 가이드 페이지 배경 | 1920x1080px 이상 |
| `observations-hero.jpg` | 관찰 기록 페이지 배경 | 1920x1080px 이상 |

**업로드 방법**:
```bash
# GitHub에 직접 업로드
1. https://github.com/CassianK/Nature-report 접속
2. branch-1 브랜치 선택
3. public/images/hero/ 폴더로 이동
4. "Add file" → "Upload files" 클릭
5. 위 파일명으로 이미지 업로드
```

---

### 2. 카드 이미지 (Card Images)
**경로**: `public/images/cards/`

Field Observations 섹션의 카드 커버 이미지입니다.

#### 중랑천 (Stream) 카드 이미지
| 파일명 | 설명 |
|--------|------|
| `stream-card-01.jpg` | 중백로 사냥 행동 |
| `stream-card-02.jpg` | 물새류 무리 행동 |
| `stream-card-03.jpg` | 가마우지 |
| `stream-card-04.jpg` | 너구리 가족 |
| `stream-card-05.jpg` | 개구리 |
| `stream-card-06.jpg` | 쇠물닭 |
| `stream-card-07.jpg` | 왜가리 |
| `stream-card-08.jpg` | 뱀 |

#### 산 (Mountain) 카드 이미지
| 파일명 | 설명 |
|--------|------|
| `mountain-card-01.jpg` | 북한산 고양이 |
| `mountain-card-02.jpg` | 중흥사 |
| `mountain-card-03.jpg` | 북한산 거미 |
| `mountain-card-04.jpg` | 도봉산 암석 |
| `mountain-card-05.jpg` | 운악산 구름 |
| `mountain-card-06.jpg` | 소요산 새소리 |
| `mountain-card-07.jpg` | 소요산 곤충 |
| `mountain-card-08.jpg` | 산 개구리 |
| `mountain-card-09.jpg` | 여치 |
| `mountain-card-10.jpg` | 딱정벌레 |

**권장 크기**: 800x600px 이상 (가로 4:3 비율)

---

### 3. 썸네일 이미지 (선택사항)
**경로**: `public/images/thumbnails/`

YouTube 썸네일을 직접 호스팅하려면 이 폴더에 업로드하세요.

| 파일명 패턴 | 예시 |
|-------------|------|
| `thumb-{video-id}.jpg` | `thumb-video001.jpg` |

---

## 📄 생태 보고서 업로드

### 경로: `public/reports/`

상세한 생태 보고서를 PDF 또는 Markdown 형식으로 업로드합니다.

#### 파일명 규칙
```
{location}-{date}-{subject}.pdf
또는
{location}-{date}-{subject}.md
```

#### 예시
| 파일명 | 설명 |
|--------|------|
| `jungnangcheon-2025-07-17-herons.pdf` | 중랑천 왜가리 관찰 보고서 |
| `jungnangcheon-2025-07-17-herons.md` | 중랑천 왜가리 관찰 보고서 (Markdown) |
| `soyosan-2025-06-06-leopard-cat-habitat.pdf` | 소요산 삵 서식지 평가 |
| `national-arboretum-2025-07-12-butterfly.pdf` | 국립수목원 나비 관찰 |
| `bukhansan-2025-ecology-overview.pdf` | 북한산 생태계 개요 |
| `dobongsan-2025-rock-formations.pdf` | 도봉산 암석 지형 |

#### Markdown 템플릿
```markdown
# [제목]

## 📅 기본 정보
- **날짜**: YYYY-MM-DD
- **시간**: HH:MM AM/PM
- **장소**: 구체적 위치
- **날씨**: 날씨 조건
- **관찰자**: 이름

## 🐦 관찰된 종
- **종명**: 학명 (Common Name)
- **개체수**: N마리
- **행동**: 관찰된 행동

## 📸 사진/영상
- YouTube 링크
- 사진 파일명

## 🔬 생태학적 관찰
상세 설명...

## 💭 관찰 소감
개인적 소감...

## 🔬 과학적 의의
생태학적 의미...
```

---

## 🎬 YouTube 재생목록 연결

### 경로: `src/data/videos.json`

재생목록 URL을 추가하려면 이 파일을 수정하세요.

#### 현재 구조
```json
{
  "playlists": {
    "stream": "https://www.youtube.com/playlist?list=PL2C1hebSz5MH0V_zUuBnzNrdC3UljovoN",
    "bukhansan": "https://www.youtube.com/playlist?list=...",
    "dobongsan": "https://www.youtube.com/playlist?list=...",
    "unaksan": "https://www.youtube.com/playlist?list=...",
    "soyosan": "https://www.youtube.com/playlist?list=...",
    "myeongseongsan": "https://www.youtube.com/playlist?list=...",
    "nature": "https://www.youtube.com/playlist?list=..."
  },
  "videos": [
    {
      "id": "video001",
      "title": "제목",
      "description": "설명",
      "category": "stream",
      "location": "Jungnangcheon Stream",
      "species": ["Intermediate Egret"],
      "url": "https://youtube.com/shorts/AIkFiOy0PGw",
      "playlistUrl": "https://www.youtube.com/playlist?list=...",
      "thumbnail": "geese",
      "coverImage": "/images/cards/stream-card-01.jpg",
      "reportUrl": "/reports/jungnangcheon-2025-07-17-herons.pdf"
    }
  ]
}
```

#### 추가할 필드
- `playlistUrl`: 재생목록 URL
- `coverImage`: 카드 커버 이미지 경로
- `reportUrl`: 생태 보고서 경로 (선택사항)

---

## 🚀 업로드 후 배포

### GitHub에서 직접 업로드
1. https://github.com/CassianK/Nature-report 접속
2. **branch-1** 브랜치 선택
3. 해당 폴더로 이동
4. "Add file" → "Upload files" 클릭
5. 파일 업로드 후 커밋 메시지 작성
6. "Commit changes" 클릭

### 자동 배포
- branch-1에 푸시하면 자동으로 빌드 및 gh-pages 배포
- 5-10분 후 https://cassiank.github.io/Nature-report/ 에서 확인

---

## 📝 체크리스트

### 이미지 업로드
- [ ] `public/images/hero/home-hero.jpg`
- [ ] `public/images/hero/stream-hero.jpg`
- [ ] `public/images/hero/mountain-hero.jpg`
- [ ] `public/images/hero/species-hero.jpg`
- [ ] `public/images/hero/observations-hero.jpg`
- [ ] `public/images/cards/stream-card-01.jpg` ~ `stream-card-08.jpg`
- [ ] `public/images/cards/mountain-card-01.jpg` ~ `mountain-card-10.jpg`

### 보고서 업로드
- [ ] `public/reports/jungnangcheon-2025-07-17-herons.pdf`
- [ ] `public/reports/soyosan-2025-06-06-leopard-cat-habitat.pdf`
- [ ] `public/reports/national-arboretum-2025-07-12-butterfly.pdf`

### 데이터 업데이트
- [ ] `src/data/videos.json` - 재생목록 URL 추가
- [ ] `src/data/videos.json` - coverImage 경로 추가
- [ ] `src/data/videos.json` - reportUrl 경로 추가

---

## 🆘 문제 해결

### 이미지가 안 보여요
1. 파일명이 정확한지 확인 (대소문자 구분)
2. 파일 형식이 `.jpg` 또는 `.png`인지 확인
3. 경로가 `public/images/...`인지 확인

### 재생목록 링크가 안 돼요
1. `videos.json`에 `playlistUrl` 필드 추가 확인
2. URL이 `https://www.youtube.com/playlist?list=...` 형식인지 확인

### 보고서 링크가 안 돼요
1. 파일이 `public/reports/`에 있는지 확인
2. `videos.json`에 `reportUrl` 필드가 `/reports/...`로 시작하는지 확인

---

## 📞 연락처

문제가 있으면 GitHub Issues에 등록하거나 저에게 문의하세요!

