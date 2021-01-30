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
                    "Multipurpose Bot with All the features you need to moderate and keep the server active! Features Ranging from starboard, suggestions, moderation features and lots more!"
                </div>
            <div className='buttons'>
                <a target='_blank' href='https://discord.com/oauth2/authorize?client_id=756477427554713611&scope=bot&permissions=268758110'>

            <Button className='btn primary' variant="contained" color="primary">
            Invite
            </Button>
                </a>
                <a target='_blank' href='Change this to your link for the support thingy'>

            <Button className='btn secondary' variant="contained" color="primary">
            Support
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