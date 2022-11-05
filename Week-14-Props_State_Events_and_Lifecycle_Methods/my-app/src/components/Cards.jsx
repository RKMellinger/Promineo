import PropTypes from "prop-types";
function Cards({ children, reverse }) {
  console.log("Here's Cards");
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}>
      {children}
    </div>
  );
}
Cards.defaultProps = {
  reverse: false,
};
Cards.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Cards;
