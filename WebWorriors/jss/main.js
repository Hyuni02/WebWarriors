function popup_best(){

}

function alert_noimplement(){
  alert("해당 서비스는 준비중입니다.")
}

function login(id,pwd){
  if(id == ""){
    alert("아이디를 입력해 주세요")
    return
  }
  if(pwd == ""){
    alert("비밀번호를 입력해 주세요")
    return
  }
  alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
}

function register(id, pwd, name, birth, phonenum, email){
  if(id == ""){
    alert("아이디를 입력해 주세요")
    return
  }
  if(pwd == ""){
    alert("비밀번호를 입력해 주세요")
    return
  }
  if(name == ""){
    alert("이름 입력해 주세요")
    return
  }
  if(birth == ""){
    alert("생년월일을 입력해 주세요")
    return
  }
  if(phonenum == ""){
    alert("휴대폰번호를 입력해 주세요")
    return
  }
  if(email == ""){
    alert("이메일을 입력해 주세요")
    return
  }

  alert("휴대폰 번호 인증을 완료해 주십시오");
}

function phonecheck(){
  alert("서버 점검으로 인해 해당 서비스를 이용하실 수 없습니다.")
}
