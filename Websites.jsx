class Websites extends React.Component{
    render(){
        return(
            <div className='Websites'>
                <h3>Websites</h3>
                <div className='flex_row'>
                    <Boxes className='boxes' image='images/taxfactor.png' source='https://thetaxfactor.com.au/' />
                    <Boxes className='black boxes' image='images/u4c.png' source='http://u4cmartialarts.com.au/' />
                    <Boxes className='boxes' image='images/osga.png' source='https://osga.com.au' />
                    <Boxes className='black boxes' image='images/cube.png' source='http://cube4security.com.au/' />
                    <Boxes className='boxes' image='images/meadanhomes.png' source='https://www.meadanhomes.com.au/' />
                    <Boxes className='boxes' image='images/intelligentss.png' source='http://intelligentss.com.au/' />
                    <Boxes className='boxes' image='images/elco.jpg' source='https://elcoconstructions.com.au/' />
                    <Boxes className='boxes' image='images/goldenfalafel.png' source='http://goldenfalafel.com.au/' />
                    <Boxes className='black boxes' image='images/microfocus.png' source='https://microfocusgroup.com.au/' />
                </div>
            </div>
        )
    }
}