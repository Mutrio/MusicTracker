const router = require('express').Router(),
    musicController = require('../controllers/musicController');
    
    console.log("음악 페이지");
// music 경로에 대한 렌더링 핸들러 등록
router.get("/", musicController.music);

// router.post("/music_page", (req, res) => {
//     // music 페이지에서 버튼을 눌렀을 때 처리하는 부분
//     res.redirect("/timeline_page");
// });

// 각 버튼을 눌렀을 때의 리다이렉션 라우트 추가
router.get("/happy", (req, res) => {
  res.redirect("/music/happy

router.get("/sad", (req, res) => {
  res.redirect("/music/sad");
});

router.get("/angry", (req, res) => {
  res.redirect("/music/angry");
});

router.get("/comfortable", (req, res) => {
  res.redirect("/music/comfortable");
});

router.get("/cheerful", (req, res) => {
  res.redirect("/music/cheerful");");
});
});

module.exports = router;
