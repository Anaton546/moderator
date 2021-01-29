import Qarray from './faq.json'
import './FAQ.css'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';



const styles = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
})


const FAQ = (props) => {
    return(
        <div className='faqContainer'>
            <div className='faqTitle'><span className='q'>Frequently</span> Asked  Questions </div>
            <div className='faqdesc'>Here are some <span className='qq'>questions</span> that get often asked about the bot</div>
            {Qarray.map(q => {
                return(<>
                <div className='accordion'>
                  <Accordion>
                <AccordionSummary
                className='summary'
                expandIcon={<ExpandMoreIcon color='primary' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                 <div className='question'>
                        {q.q}
                   </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='answer'>
                        {q.a}
                   </div>
                </AccordionDetails>
            </Accordion>
            </div>
                    </>
                )
            })}
        </div>
    )
}

export default FAQ