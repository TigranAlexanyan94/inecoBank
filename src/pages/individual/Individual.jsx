// import PropTypes from 'prop-types';
import './Individual.css';
import NavBar from '../../component/navbar/NavBar';
import Carousel from "../../component/carousel/Carousel";
import { countries } from '../../constants/DataSlider';
import { contents } from '../../constants/DataContents';
import Card from '../../component/card/Card';
import Footer from '../../component/footer/Footer';
import Button from '../../component/button/Button';

const Individual = () => {

  const moreThan = () => {
    console.log("imanal");
  };

  return (
    <>
      <div className="wrap">
        <NavBar />
        <div className="container">
          <div style={{ height: "100%" }}>
            <Button
              inerText="imanal avelin"
              bgColor="white"
              posAbs="absolute"
              color="#48a74a"
              margin="455px 0px"
              onClick={moreThan} />
          </div>
        </div>
        <Carousel images={countries} />
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

export default Individual;
