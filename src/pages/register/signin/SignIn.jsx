import Button from '../../../component/button/Button';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signInWrapper">
      <div className="signInContent">
        <div style={{
          width: "460px",
          height: "300px",
          backgroundColor: "greenyellow",
          padding: "30px"
        }}>
          <div>
            <div>
              <span className="user" style={{ color: "white" }}>User Name</span><br />
              <input type="text" style={{ width: "98%", height: "25px" }} />
            </div>
            <div>
              <span className="pass" style={{ color: "white" }}>Password</span><br />
              <input type="password" style={{ width: "98%", height: "25px" }} />
            </div>
            <br />
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end"  }}>
              <Button
                width="54px"
                inerText="LOG IN"
                bgColor="green"
                color="white"
                borderRadius="5px"
              // onClick={moreThan}
              />
            </div>

          </div>


          {/* <span className="signUp">SIGNUP</span>
          <h1>Welcome To</h1>
          <span className="inecoMobile">InecoMobile</span>
          <p className="enjoyText">Enjoy the digital convenience in every transaction!</p>
          <input placeholder='+374 00 000000' /><br /><br />
         */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
