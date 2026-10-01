import './Navbar.css'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='logo'>
                <h2 id='N'>N</h2>
                <h2 id='notes'>Public Notes</h2>
            </div>
            <div className="search">
                <p></p>
                <input type="search" placeholder='Search notes' />
                <span id="user"></span>
            </div>
        </div>
    )
}