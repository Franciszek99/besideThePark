var Component = React.createClass({

    getInitialState: function () {
        return {color: lightgrey};    
    },

    componentDidMount: function () {
        setTimeout(function() { this.setState({color:transparen}); }.bind(this), 3000);
    },

    //render: function () {
    //     return (
    //        <div className="component">
    //            {this.state.position}
    //        </div>
    //     ); 
    //}

});

ReactDOM.render(
    <Component />,
    document.getElementByClassName('fadeOut')
);