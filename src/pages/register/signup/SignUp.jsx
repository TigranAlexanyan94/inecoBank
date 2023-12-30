import Button from '../../../component/button/Button';
import './SignUp.css';

const Signup = () => {
  return (
    <>
      <div className="signUpWrapper">
        <div className="signUpContent">
          <div>
            <span className="signUp">SIGNUP</span>
            <h1>Welcome To</h1>
            <span className="inecoMobile">InecoMobile</span>
            <p className="enjoyText">Enjoy the digital convenience in every transaction!</p>
            <input placeholder='+374 00 000000'/><br /><br />
            <Button
              width="400px"
              inerText="Create Account ->"
              bgColor="#48a74a"
              color="white"
              borderRadius="5px"
            // onClick={moreThan}
            />
          </div>
        </div>
        <div style={{ width: "100%", height: "100vh", backgroundColor: '#48a74a' }}></div>
      </div>
    </>
  );
};

export default Signup;
