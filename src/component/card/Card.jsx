import PropTypes from 'prop-types';
import './Card.css';

export const CardContent = ({ title, subTitle, text, img }) => {
  return (
    <div className="contents">
      <div className="card-title">
        <h2>{title} </h2>
        <h4>{subTitle}</h4>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
      <div className="wrap-sub-card">
        <div className="sub-card">
          <div className="sub-card-content">
            <img src={img} alt="" style={{ width: "40px", height: "40px" }} />
            <br />
            <a style={{ color: "black" }}>parz</a>
          </div>
        </div>
        <div className="sub-card">
          <div className="sub-card-content">
            <img src={img} alt="" style={{ width: "40px", height: "40px" }} />
            <br />
            <a style={{ color: "black" }}>parz</a>
          </div>
        </div>
        <div className="sub-card">
          <div className="sub-card-content">
            <img src={img} alt="" style={{ width: "40px", height: "40px" }} />
            <br />
            <a style={{ color: "black" }}>parz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardImage = ({ img }) => {
  return (
    <div className="card-img">
      <img src={img} alt="" />
    </div>
  );
};

const Card = ({ index, title, subTitle, text, img }) => {
  return (
    <div className="card">
      {(index + 1) % 2 === 1 ?
        <>
          <CardContent title={title} subTitle={subTitle} text={text} img={img} />
          <CardImage img={img} /></>
        :
        <>
          <CardImage img={img} />
          <CardContent title={title} subTitle={subTitle} text={text} img={img} />
        </>}
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
