class AppBoxes extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                <a href={this.props.source}><img src={this.props.image} /></a>
                <p>{this.props.title}</p>
            </div>
        )
    }
}