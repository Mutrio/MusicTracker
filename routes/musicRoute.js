const router = express.Router();


// GET 요청에 대한 핸들러
router.get("/music_page", (req, res) => {
    // music 페이지 렌더링
    res.render("music_page");
  });

router.post("/music_page", (req, res) => {
  // music 페이지에서 버튼을 눌렀을 때 처리하는 부분
  res.redirect("/timeline_page");
});

module.exports = router;