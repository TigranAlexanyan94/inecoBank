// import PropTypes from 'prop-types';
import './Business.css';
import NavBar from '../../component/navbar/NavBar';
import Button from '../../component/button/Button';
import Card from '../../component/card/Card';
import { contents } from '../../constants/DataContents';
import Footer from '../../component/footer/Footer';

const Business = () => {
  return (
    <>
      <div className="wrap">
        <NavBar />
        <div style={{ width: "100%", height: "93vh", backgroundColor: "red" }}>
          <div className="container">
            <div className="wrapper-text-block">
              <div className="block-text-wrapper">
                <div className="block-text">
                  <h2>FEEL THE CONVENIENCE</h2>
                  <p>OF ACCEPTING PAYMENTS</p>
                  <div style={{ width: "118px" }}>
                    <Button inerText="imanal avelin" color="#48a74a" bgColor="white" />
                  </div>
                </div>
              </div>
              <div className="block-wrapper">
                <div className="block">
                  <div className="block-image">1</div>
                  <h5>player</h5>
                </div>
                <div className="block">
                  <div className="block-image">2</div>
                  <h5>POS</h5>
                </div>
                <div className="block">
                  <div className="block-image">3</div>
                  <h5>vPOS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {contents.map((item, index) =>
            <Card
              key={index}
              index={index}
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              text={item.text}
              img={item.img}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

// Individual.propTypes = {
//     bool: PropTypes.bool.isRequired
// }

export default Business;
