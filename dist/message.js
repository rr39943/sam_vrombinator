class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      id: "fin"
    }, this.props.message);
  }

}

export default Message;