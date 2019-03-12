import Lettre from './lettre.js'

class Mot extends React.Component {
    constructor(props){
        super(props)
  }
    componentDidMount() {
       document.addEventListener('keypress', this.props.handleKeyPress);
    }
    render() {
        return (<div id='mot'>
            <p>
             {this.props.mot.map((value, index) => {
        return <Lettre key={index} carac={ value.carac } hide={value.hide} />
      })}</p>
            </div>
        );
    }
}

export default Mot
