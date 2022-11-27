import "./Login.css"

function Login(){
    return (
      <div class ="col-14 col-s-4 center">
        <div id="register-page">
          <a href="/" ><img src = "/img/Bonekify.png" id ="logo"/></a>
              <h1>To continue,<br/> log in to Bonekify.</h1>
              <br/>
        </div> 
        <div>
        <form id = "register-form" method="post" onsubmit="return ValidateForm()" action="<?= BASEURL?>/login">
          <label for="emailnama">Alamat email atau nama pengguna</label>
          <input type="text" id="emailnama" name="emailnama" onkeyup="checkemailnama()" placeholder="Alamat email atau nama pengguna"/>
      
          <label for="sandi">Kata sandi</label>
          <input type="password" autocomplete="off" id="sandi" name="sandi" onkeyup="checksandi()" placeholder="Kata sandi"/>
        
          <input type="submit" value="Masuk"/>
          <div id ="submitWarning"><p><br/>Username/email salah</p></div>
        </form>
        <p> <strong>Belum punya akun?</strong> <a id = "gantiwarna" href="register">Daftar.</a> </p>
        </div>
      </div>
    )
  }

export default Login