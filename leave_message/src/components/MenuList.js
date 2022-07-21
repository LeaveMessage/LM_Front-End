import { useState } from "react";
import "../styles/components/MenuList.css";

const MenuList = () => {
    const [menuList] = useState([
        ['작성하기.', '못다한 이야기를 남겨보세요.'],
        ['수정하기.', '이야기를 수정해 보세요.'],
        ['삭제하기.', '이야기를 지우시겠어요?'],
        ['코드 입력하기.', '이메일 회신 코드를 입력해주세요.']
    ])

    function clickMenu(index){
        switch(index){
            case 0:
                createPost();
                break
            case 1:
                updatePost();
                break
            case 2:
                deletePost();
                break
            case 3:
                checkLife();
                break
        }
    }

    function createPost(){
        // 토큰이 있으면
        window.location.href = '/create';
    }
    function updatePost(){
        // 작성된 유서가 있으면
        window.location.href = '/update';
    }
    function deletePost(){
        // 작성된 유서가 있으면
        if (window.confirm("당신의 이야기가 사라집니다.\n정말 삭제하시겠습니까?")){
            //삭제
        }
    }
    function checkLife(){
        // 인증코드를 발송했으면
        const life_code = window.prompt('이메일에 수신된 코드를 입력해주세요.');
    }

    function showMenu(){
        const list = []
        for(let i = 0; i < 4; i++){
            list.push(
                <div key={i} className='MenuBox'>
                    <div className="MenuBox_Title" onClick={()=>{clickMenu(i)}}>
                        {menuList[i][0]}
                    </div>
                    <div className="MenuBox_Text">
                        {menuList[i][1]}
                    </div>
                </div>
            );
        }
        return list;
    }

    return(
        <div className="MenuList">
            <div className="MenuList_Box">
                {showMenu()}
            </div>
        </div>
    );
}

export default MenuList;