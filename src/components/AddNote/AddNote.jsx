import './AddNote.css'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API_URL from '../api/api'


function AddNote() {

    const noteRef = useRef(null)
    const linkRef = useRef(null)

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [content, setContent] = useState('')
    const [categories, setCategories] = useState('notes')

    const [loading, setLoading] = useState(false)


    // for link and note button
    function noteClick() {
        noteRef.current.classList.add('headAndLinkClick')
        linkRef.current.classList.remove('headAndLinkClick')
    }


    function linkClick() {
        linkRef.current.classList.add('headAndLinkClick')
        noteRef.current.classList.remove('headAndLinkClick')
    }


    // Submit note to backend
    const submitNote = async (e) => {

        e.preventDefault()

        if (!title.trim() || !author.trim() || !content.trim()) {
            alert("Please fill in the required fields.")
            return
        }

        try {

            setLoading(true)

            const response = await fetch(API_URL, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    title,
                    author,
                    url,
                    content,
                    categories
                })
            })


            if (!response.ok) {
                throw new Error("Failed to create note")
            }


            const data = await response.json()

            console.log("Note created:", data)

            navigate('/show/all')


        } catch (error) {

            console.error("Error creating note:", error)

            alert("Something went wrong while saving the note.")

        } finally {

            setLoading(false)

        }
    }


    return (
        <div className="bigForm">

            <div className="continer">

                <div className="head">

                    <div
                        className="note headAndLinkClick"
                        ref={noteRef}
                        onClick={noteClick}
                    >
                        Note
                    </div>

                    <div
                        className="link"
                        ref={linkRef}
                        onClick={linkClick}
                    >
                        Link
                    </div>

                </div>


                <div className="med">

                    <input
                        type="text"
                        className="addTitle"
                        placeholder="Note title…"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <input
                        type="text"
                        className="authorName"
                        placeholder="Author name…"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />


                    <input
                        type="text"
                        className="addLink"
                        placeholder="Paste a URL (optional)"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />


                    <textarea
                        name="content"
                        className="addContent"
                        placeholder="Start writing your note here…"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                </div>


                <div className="down">

                    <div className="choose">

                        <select
                            id="Category"
                            name="Category"
                            className="categoryBut"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                        >

                            <option value="notes">
                                Note
                            </option>

                            <option value="links">
                                Link
                            </option>

                            <option value="Favorites">
                                Favorites
                            </option>

                            <option value="Archive">
                                Archive
                            </option>

                        </select>

                    </div>


                    <div className="save">

                        <button
                            className="cancel"
                            onClick={() => navigate('/show/all')}
                        >
                            Cancel
                        </button>


                        <button
                            className="saveNote"
                            onClick={submitNote}
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Note"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddNote
