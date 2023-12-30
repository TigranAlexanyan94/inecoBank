import PropTypes from 'prop-types';

const Language = (props) => {
    // const { onClick, bool } = props;
    // return (
    //     <div style={{ backgroundColor: "green"}}>
    //         <div style={{ width: "95%", paddingTop: "30px", display: "flex", justifyContent: "flex-end" }}>
    //             {bool ? <div style={{ color: "white" }} onClick={onClick}>ENG</div> : <div style={{ color: "white" }} onClick={onClick}>Հայ</div>}
    //         </div>
    //     </div>
    // );
};

Language.propTypes = {
    bool: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Language;
