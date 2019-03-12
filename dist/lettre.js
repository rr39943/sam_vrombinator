class Lettre extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("span", null, this.props.hide ? '_' : this.props.carac, " ");
  }

}

export default Lettre;