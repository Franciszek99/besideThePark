var Component = React.createClass({

    getInitialState: function () {
        return {color: lightgrey};    
    },

    componentDidMount: function () {
        setTimeout(function() { this.setState({color:transparent}); }.bind(this), 3000);
    },

    render: function () {
         return (
            <div className="component">
               {this.state.color}
            </div>
        ); 
    }

});

ReactDOM.render(
    <Component />,
    document.getElementByClassName('fadeOut')
);