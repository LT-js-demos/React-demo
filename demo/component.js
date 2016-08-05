class Box extends React.Component {
    render() {
        return (
            <div className="box">I am a box</div>
        );
    }
}
ReactDOM.render(
    <Box/>,
    document.getElementById('example')
);
