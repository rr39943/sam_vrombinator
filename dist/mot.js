import Lettre from './lettre.js';

class Mot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.props.handleKeyPress);
  }

  render() {
    return React.createElement("div", {
      id: 'mot'
    }, React.createElement("p", null, this.props.mot.map((value, index) => {
      return React.createElement(Lettre, {
        key: index,
        carac: value.carac,
        hide: value.hide
      });
    })));
  }

}

export default Mot;