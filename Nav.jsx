class Nav extends React.Component{
    apps=(e)=>{
        this.props.grab_data(e.target.innerText)
    }
    render(){
        return(
            <div className='Nav'>
                <a href='#' onClick={this.apps}><h1>NIDVAR</h1></a>
                <ul>
                    <li><a href='#' onClick={this.apps}>Apps</a></li>
                    <li><a href='#' onClick={this.apps}>Websites</a></li>
                    <li><a href='#' onClick={this.apps}>About</a></li>
                </ul>
            </div>
        )
    }
}