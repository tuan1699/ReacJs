function Hello({ name, age = "24" }) {
  return <div>Hello {name}</div>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Hello.defaultProps = {
  name: "Tuấn",
};
