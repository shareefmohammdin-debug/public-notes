import './OpenNote.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from '../api/api';


export default function OpenNote() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);


    // Get note by ID
    useEffect(() => {

        const getNote = async () => {

            try {

                const response = await fetch(`${API_URL}/${id}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch note");
                }

                const data = await response.json();

                // Backend returns an array
                if (data.length === 0) {
                    throw new Error("Note not found");
                }

                setNote(data[0]);

            } catch (error) {

                console.error("Error fetching note:", error);

            }

        };

        getNote();

    }, [id]);


    // Delete note
    const deleteNote = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmDelete) return;

        try {

            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("Failed to delete note");
            }

            navigate("/show/all");

        } catch (error) {

            console.error("Error deleting note:", error);

            alert("Something went wrong while deleting the note.");

        }

    };


    // Loading ===============================
    if (!note) {
        return (
            <div className="open-note-loading">
                {/* Loading... */}
            </div>
        );
    }


    return (

        <div className="open-note">

            {/* Top bar */}

            <div className="open-note-top">

                <button
                    className="back-btn"
                    onClick={() => navigate("/show/all")}
                >
                    ← Back
                </button>


                <button
                    className="share-btn"
                    onClick={() =>
                        navigator.clipboard.writeText(
                            window.location.href
                        )
                    }
                >
                    Share
                </button>

            </div>


            {/* Note */}

            <main className="open-note-content">

                <span className="open-note-category">
                    {note.categories}
                </span>


                <h1 className="open-note-title">
                    {note.title}
                </h1>


                <p className="open-note-author">
                    Written by{" "}
                    <strong>
                        {note.author || "Anonymous"}
                    </strong>
                </p>


                <div className="open-note-body">
                    {note.content}
                </div>


                {note.url && (

                    <a
                        className="open-note-url"
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🔗 {note.url}
                    </a>

                )}

            </main>


            {/* Delete */}

            <div className="open-note-footer">

                <button
                    className="delete-btn"
                    onClick={deleteNote}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}
