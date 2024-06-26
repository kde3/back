import Load from "/temp/load.js";

fetch("/temp/footer")
.then(response => response.text())
.then(html => {

  const parser = new DOMParser();

  const doc = parser.parseFromString(html, 'text/html');
  const content = doc.querySelector('footer');             // 삽입할 컨텐츠 선택

  document.getElementById('footer-placeholder').appendChild(content);     // 원하는 곳에 컨텐츠 삽입

  new Load(doc);                                                          // css, js 파일 로드
})
.catch(error => console.error('Error fetching main banner :', error));    // 에러 메시지 설정