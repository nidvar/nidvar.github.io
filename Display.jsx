class Display extends React.Component{
    state={
        display:'NIDVAR',
    }
    grab_data=(data)=>{
        this.setState({display:data})
    }
    display_on_page=()=>{
        if(this.state.display==='NIDVAR'){
            return <Main />
        }else if(this.state.display==='Apps'){
            return <Apps />
        }else if(this.state.display==='Websites'){
            return <Websites />
        }else if(this.state.display==='About'){
            return <About />
        }
    }
    render(){
        return(
            <div>
                <Nav grab_data={this.grab_data} />
                {this.display_on_page()}
            </div>
        )
    }
}