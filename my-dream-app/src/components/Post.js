import React, { useState } from 'react';
import './Post.css'; // We'll create this next

/**
 * A helper function to format the date strings from the database.
 */
const formatDate = (dateString) => {
    if (!dateString) return "";
    // We already converted the string to a Date object in Motivation.js
    return dateString.toLocaleString([], {
        dateStyle: 'short',
        timeStyle: 'short'
    });
};

/**
 * This component displays a single post.
 * It receives the 'post' object and all the handler functions as props
 * from the main Motivation.js page.
 */
function Post({ post, onDelete, onEdit, onReaction }) {
    // This state only exists inside this one component
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(post.text);

    // This runs when the user clicks the "Save" button
    const handleSave = () => {
        // Call the onEdit function that was passed down from Motivation.js
        onEdit(post.id, editText);
        setIsEditing(false); // Switch back to view mode
    };

    // This will display our file (image, etc.) when we add it
    const renderMedia = () => {
        if (!post.fileUrl) return null;

        if (post.fileType.startsWith('image/')) {
            return <img src={post.fileUrl} alt="post content" className="post-media-image" />;
        }

        // We can add logic for videos/PDFs here later
        return <div className="post-media-placeholder">Attached File: {post.fileUrl}</div>;
    };


    if (isEditing) {
        // ---- RENDER THIS IF isEditing is true ----
        return (
            <div className="post post-editing">
                <h3>Edit Post</h3>
                <textarea
                    className="post-edit-textarea"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
                <div className="post-actions">
                    <button onClick={handleSave} className="post-button save">Save</button>
                    <button onClick={() => setIsEditing(false)} className="post-button cancel">Cancel</button>
                </div>
            </div>
        );
    }

    // ---- RENDER THIS IF isEditing is false (default) ----
    return (
        <div className="post">
            {/* --- 1. Timestamps --- */}
            <div className="post-metadata">
                <span>Posted: {formatDate(post.createdAt)}</span>
                {post.lastEdited && (
                    <span className="edited-timestamp">(Edited: {formatDate(post.lastEdited)})</span>
                )}
            </div>

            {/* --- 2. Media (Image/File) --- */}
            {renderMedia()}

            {/* --- 3. Text Content --- */}
            {post.text && <p className="post-text">{post.text}</p>}

            {/* --- 4. Action Buttons --- */}
            <div className="post-actions-wrapper">
                <div className="post-reactions">
                    <button onClick={() => onReaction(post.id, 'like')} className="post-button reaction">
                        👍 {post.reactions.like || 0}
                    </button>
                    <button onClick={() => onReaction(post.id, 'love')} className="post-button reaction">
                        ❤️ {post.reactions.love || 0}
                    </button>
                    <button onClick={() => onReaction(post.id, 'idea')} className="post-button reaction">
                        💡 {post.reactions.idea || 0}
                    </button>
                </div>
                <div className="post-admin-actions">
                    <button onClick={() => setIsEditing(true)} className="post-button edit">Edit</button>
                    <button onClick={() => onDelete(post.id)} className="post-button delete">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Post;