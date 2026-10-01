import './Beginning.css'
import { Link } from 'react-router-dom'


export default function Beginning() {
    return (
        <div className='startContainer'>
            <div className="start">
                <Link to='/add' className='reactLink'>
                    <div className="add"> + </div>
                </Link>
                <div className="addText">Add a new note</div>
                <div>
                    <div className="stepText">Click the button to create a note or save a link.</div>
                    <div className="stepText">Everything stays here for later.</div>
                </div>
            </div>
        </div>

    )
}