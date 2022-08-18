
/* 
        - 조건 -
        id 길이 12자 이하
        pw 길이 8자 이상 / 특수문자 포함
        confirm_pw == pw 같아야 댐
        display_name 딱히 필요없을듯
*/

function signUp() {         // 회원가입하는 함수
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    var confirm_pw = document.getElementById("confirm-pw").value;
    var display_name = document.getElementById("display-name").value;

    var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;     // 특수문자
    var blank_pattern = /[\s]/g;                    // 공백
    console.log(`id: ${id}, pw: ${pw},  confirm_pw: ${confirm_pw}, display_name: ${display_name}`); // 확인

    if(id.length > 12 || blank_pattern.test(id)) {
        alert("아이디 길이 or 공백 포함!");          // 아이디 틀림
        return 0;
    }  
    else {
        if(pw.length < 8 || !(pattern_spc.test(pw))) {
            alert("비밀번호 길이 or 특수문자 미포함!");         // 비밀번호 틀림
            return 0;
        }
        else{
            if(pw != confirm_pw) {
                alert("비밀번호가 일치하지 않습니다!");         // 비밀번호 확인 틀림
            }
            else {
                alert("회원가입 완료!");                       // 회원가입 완료!
                console.log("회원가입 완료!");

                var elem = document.createElement('ul');
                elem.innerHTML = 
                `<li>--------------------------</li>
                <div class="createMember">
                    <input type="checkbox" class="checkBox">
                    <div>
                        <li>이름: ${display_name}</li>
                        <li>아이디: ${id}</li>
                        <li>비밀번호 : ${pw}</li>
                    </div>
                </div>`;

                document.querySelector('.check_data').append(elem);     // 회원가입이 완료되면 회원조회에 추가

                id = "";
                pw = "";
                confirm_pw = "";
                display_name = "";                          // 회원가입 완료 후 입력되어 있던 값들 사라지게 함
            }
        }
    }
}

function check_Member() {               // 회원조회 함수
    var member = document.querySelector('.check_data');
    console.log("회원조회!");
    
    if(member.style.display=='none') { 		
    	member.style.display = 'flex';
    }
    else {
        member.style.display = 'none';
    }
}

function delete_Member() {               // 회원삭제 함수
    var list = document.querySelectorAll(".checkBox");
    console.log("회원삭제!");

    for(let i =0; i<list.length; i++) {
        if(list[i].checked) {
            list[i].parentElement.parentElement.remove();
        }
    }
}