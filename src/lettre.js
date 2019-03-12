class Lettre extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <span>{ this.props.hide ? '_' : this.props.carac } </span>
    );
  }
}
export default Lettre;
