import { useRef } from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

export default function Categories() {

    const allRef = useRef(null)
    const linksRef = useRef(null)
    const notesRef = useRef(null)
    const favoritesRef = useRef(null)
    const archiveRef = useRef(null)

    function allClick() {
        allRef.current.classList.add('active')

        notesRef.current.classList.remove('active')
        linksRef.current.classList.remove('active')
        favoritesRef.current.classList.remove('active')
        archiveRef.current.classList.remove('active')

    }

    function linksClick() {
        linksRef.current.classList.add('active')

        allRef.current.classList.remove('active')
        notesRef.current.classList.remove('active')
        favoritesRef.current.classList.remove('active')
        archiveRef.current.classList.remove('active')
    }

    function notesClick() {
        notesRef.current.classList.add('active')

        allRef.current.classList.remove('active')
        linksRef.current.classList.remove('active')
        favoritesRef.current.classList.remove('active')
        archiveRef.current.classList.remove('active')
    }

    function favoritesClick() {
        favoritesRef.current.classList.add('active')

        notesRef.current.classList.remove('active')
        allRef.current.classList.remove('active')
        linksRef.current.classList.remove('active')
        archiveRef.current.classList.remove('active')
    }

    function archiveClick() {
        archiveRef.current.classList.add('active')

        favoritesRef.current.classList.remove('active')
        notesRef.current.classList.remove('active')
        allRef.current.classList.remove('active')
        linksRef.current.classList.remove('active')
    }




    return (
        <div class="chips">

            <Link to='/show/all' className='reactLink'>
                <div class="chip " ref={allRef} onClick={allClick} >All <span class="count">~</span></div>
            </Link>

            <Link to='/show/links' className='reactLink'>
                <div class="chip" ref={linksRef} onClick={linksClick}>Links<span class="count">~</span></div>
            </Link>

            <Link to='/show/notes' className='reactLink'>
                <div class="chip" ref={notesRef} onClick={notesClick}>Notes <span class="count">~</span></div>
            </Link>

            <Link to='/show/Favorites' className='reactLink'>
                <div class="chip" ref={favoritesRef} onClick={favoritesClick}>Favorites <span class="count">~</span></div>
            </Link>

            <Link to='/show/Archive' className='reactLink'>
                <div class="chip" ref={archiveRef} onClick={archiveClick}>Archive <span class="count">~</span></div>
            </Link>
        </div>
    )
}