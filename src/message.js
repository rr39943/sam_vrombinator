class Message extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div id="fin">{this.props.message}</div>
    }
}
export default Message;
