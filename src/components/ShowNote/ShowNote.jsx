import './ShowNote.css'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import API_URL from '../api/api'


export default function ShowNote() {

    const { category } = useParams()
    const navigate = useNavigate()

    const [notes, setNotes] = useState([])


    useEffect(() => {

        const getNotes = async () => {

            try {

                const response = await fetch(API_URL)

                if (!response.ok) {
                    throw new Error("Failed to fetch notes")
                }

                const data = await response.json()

                console.log("API URL:", API_URL)
                console.log("Data:", data)

                setNotes(data)

            } catch (error) {

                console.error("Error fetching notes:", error)

            }

        }

        getNotes()

    }, [])


    return (
        <div className="notes-container">

            {notes
                .filter(note =>
                    category === "all" ||
                    note.categories === category
                )
                .map((note) => {

                    return (
                        <div
                            className="note-card"
                            key={note.id}
                            onClick={() => navigate(`/note/${note.id}`)}
                        >

                            <div className="note-header">

                                <h3>
                                    {note.title}
                                </h3>

                                <span className="category">
                                    {note.categories}
                                </span>

                            </div>


                            <p className="note-content">
                                {note.content}
                            </p>

                        </div>
                    )

                })}


            <Link to="/add">
                <span className="add-button">
                    +
                </span>
            </Link>

        </div>
    )
}
