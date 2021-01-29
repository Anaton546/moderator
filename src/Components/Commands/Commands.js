import CommandsArr from './commands.json'
import './Commands.css'
import {useEffect, useState} from 'react'
import {Fade} from 'react-awesome-reveal'
const Commands = (props) => {
    const [presentCommands, setPresentCommands] = useState([])
    const [activeModule, setActiveModule] = useState('Moderation')

    useEffect(() => {
        if(!activeModule) return
        console.log(activeModule)
        // setPresentCommands(CommandsArr[activeModule].commands)
        const commands = CommandsArr.filter(module => module.name == activeModule)
        console.log(commands[0].commands)
        setPresentCommands(commands[0].commands)
    }, [activeModule])

    return(
        
        <div className='commandsContainer'>
            <Fade>
            <div className='modulesContainer'>
                <ul>
                {CommandsArr.map(module => {
                    return (
                        <div className={'module ' + (activeModule == module.name? ' activeModule': null)} onClick={() => setActiveModule(module.name)} >
                        <li>{module.name}</li>
                        </div>
                        )
                    })}
                </ul>
            </div>
            </Fade>

            <div className='activeCommandsContainer'>
            {presentCommands.length > 0 && (
                presentCommands.map(command => {
                    return (
                        <div className='commandContainer'>
                            <div className='title'>{command.name}</div>
                            <div className='value'>Usage: {command.value}</div>
                            <div className='desc'>{command.description}</div>
                        </div>    
                    )
                })
                )}
            </div>
        </div>
    )
}


export default Commands