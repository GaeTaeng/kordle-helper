
import "./KordleNoticePopup.css"
import "./popup.css"
function KordleNoticePopup({isOpenNotice, handleCloseNoticePopup}) {
    
    return (
        <div style={isOpenNotice ? {display:"block"} : {display:"none"}}>
            {isOpenNotice && <div className="dimmed" />}
            <dialog className="popup" open={isOpenNotice}>
                <h1>해당 페이지는 꼬들/꼬오오오오들 문제풀이를 도와주는 헬프 페이지입니다.</h1>
                <p>꼬들/꼬오오오오들은 한글 버전의 숫자야구게임/아나그램 입니다. </p>
                <p style={{color:"#468d6b", fontWeight:"900"}}>상단 초록칸에 확정된 글자(숫자야구에임의 strike)를 입력 하고 </p> 
                <p style={{color:"#f1c232", fontWeight:"900"}}>하단 노란칸에 포함되지만 칸이 다른 글자(숫자야구게임의 ball)를 입력하고 </p> 
                <p style={{color:"grey", fontWeight:"900"}}>우측(현재는 하단) 회색칸에 사용되지 않는 글자(숫자야구게임의 out)을 입력하여 </p> 
                <p>남은 자/모를 확인하며 단어조합에 약간이나마 도움을 주기위해 작성된 페이지입니다.</p> 

                <br />
                <div>
                    <h2>기타</h2>
                    <h3>사용간 불편한 사항이나 건의사항은 아래 메일 또는 카카오톡 오픈채팅을 통해 전달주시면 감사합니다.</h3>
                    <p><h3>E-Mail</h3> nuckly60@gmail.com </p>
                    <p><h3>KAKAO TALK</h3>  <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a></p>
                    <br />

                </div>
                <p>그럼 즐거운 게임되세요! </p>
                <p>감사합니다 </p>

                <button className="noticeButton" onClick={handleCloseNoticePopup}>닫기</button>
                
            </dialog>

        </div>
       
    )
}

export default KordleNoticePopup;