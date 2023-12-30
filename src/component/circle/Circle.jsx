import PropTypes from 'prop-types';

const Circle = (props) => {
    // const { bool, am, en } = props;
    // return (
    //     <div style={{ width: '150px'}}>
    //         <div style={{ textAlign: "center"}}>img</div>
    //         <p style={{ textAlign: "center "}}>{bool ? am : en}</p>
    //     </div>
    // );
};

Circle.propTypes = {
    bool: PropTypes.bool.isRequired,
    am: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired,
}

export default Circle;
