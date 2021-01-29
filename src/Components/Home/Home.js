import './Home.css'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {JackInTheBox, Fade} from 'react-awesome-reveal'
 const Home = (props) => {
     return (
        <>
        <div className = 'home'>
            <div className = 'first-part'>
                <div className = 'bot-icon'></div>
            </div>
            <div className = 'second-part'>
                <Fade direction='up' cascade>

                <div className='quote'>
                    "The best moderation bot you will find! Filled with different types of automod features and more"
                </div>
            <div className='buttons'>
                <a target='_blank' href='https://discord.com/oauth2/authorize?client_id=756477427554713611&scope=bot&permissions=268758110'>

            <Button className='btn primary' variant="contained" color="primary">
            Invite
            </Button>
                </a>
             <a className='alink' href='/commands'>
               <Button className='btn secondary' variant="outlined" color="primary">
            Commands
            </Button>
            </a>
            </div>
                </Fade>
            </div>
        </div>
        </>
        )
 }

export default Home