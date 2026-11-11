// 백엔드 주소.
// - 내 컴퓨터(127.0.0.1 / localhost)에서 열면 로컬 서버(127.0.0.1:8000)를 사용합니다.
// - Vercel 주소에서 열면 PROD_API(Railway 주소)를 사용하니, Railway 배포 후 실제 주소로 바꾸세요. (끝에 / 없이)
const PROD_API = "https://day3backend-production-40b80c61.up.railway.app";
const isLocal = ["localhost", "127.0.0.1", ""].includes(location.hostname);
window.API_BASE = isLocal ? "http://127.0.0.1:8000" : PROD_API;
