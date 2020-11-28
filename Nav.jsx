class Nav extends React.Component{
    apps=(e)=>{
        this.props.grab_data(e.target.innerText)
    }
    render(){
        return(
            <div className='Nav'>
            </div>
        )
    }
}
