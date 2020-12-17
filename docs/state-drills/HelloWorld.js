import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {who: "world"}
    }
    render() {
        function clicker() {
            console.log('button clicked')
           // this.setState({ who: "friend" })
        }
  return (
    <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.clicker()} type="button" id="friend">Friend</button>
        <button onClick={clicker} type="button" id="world">World</button>
        <button onClick={clicker} type="button" id="react">React</button>
    </div>
  );
}
}

export default HelloWorld;