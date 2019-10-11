class Apps extends React.Component{
    render(){
        return(
            <div className='Apps'>          
                <div className='Justapps'>
                    <h3>Apps</h3>
                    <div className='Justappsflex'>
                        <AppBoxes className='appboxes' title='Online Chatroom' image='images/chatroom.png' source='https://nidvar.github.io/chatroom/' />
                        <AppBoxes className='appboxes' title='Notes' image='images/todo_list.png' source='https://nidvar.github.io/landing/' />
                        <AppBoxes className='appboxes' title='Games' image='images/games.png' source='https://nidvar.github.io/games/' />
                        <AppBoxes className='appboxes' title='Weather App' image='images/weather.png' source='https://nidvar.github.io/weather/' />
                        <AppBoxes className='appboxes' title='Find Images' image='images/search.png' source='https://nidvar.github.io/searchimage/' />
                        <AppBoxes className='appboxes' title='Typing Test' image='images/typingtest.png' source='https://nidvar.github.io/typingtest/' />
                        <AppBoxes className='appboxes' title='Youtube Clone' image='images/youtube.png' source='https://nidvar.github.io/myvideo/' />
                        <AppBoxes className='appboxes' title='Recipe Finder' image='images/recipe.png' source='https://nidvar.github.io/recipe/' />
                    </div>
                </div>   
            </div>
        )
    }
}
