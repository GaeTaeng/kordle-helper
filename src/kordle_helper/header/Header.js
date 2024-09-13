function Header({isOnHint, onToggleOnHint}) {

    const handleToggleHint = (e) => {
        console.log("E : ", e)
        console.log("E : ", e.target)

        onToggleOnHint();
    }
    
    console.log("isOnHint : ", isOnHint)
    return (
        <header style={{marginTop:"20px"}}>
        <p>문의사항 : nuckly60@gmail.com / <a href="https://open.kakao.com/o/gdYCzqOg"  target='_blank'>카카오톡</a></p>
        <p>설명 {isOnHint ? 'ON' : 'OFF'} : <input type="checkbox" checked={isOnHint} onChange={handleToggleHint}/></p>
        </header>
    )
}


export default Header;