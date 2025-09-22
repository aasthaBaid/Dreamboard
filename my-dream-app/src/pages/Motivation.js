import React, { useState, useEffect } from 'react';
import Post from '../components/Post'; // Import the component we just made
import './Motivation.css';
import axios from 'axios'; // Used to talk to our backend

// This is the URL of your backend server
const API_URL = 'http://localhost:4000/api/posts';

function Motivation() {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState("");
    // We'll keep the file state, but disable the input for now
    // const [newPostFile, setNewPostFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // For loading states

    // --- NEW: Function to load posts from your API ---
    const getPosts = async () => {
        setIsLoading(true);
        try {
            // Fetch all posts from our backend
            const res = await axios.get(API_URL);

            // Convert date strings from MongoDB back into real Date objects
            const loadedPosts = res.data.map(doc => {
                const { _id, ...post } = doc; // Pull the _id out and get the 'rest' of the post
                return {
                    ...post, // Spread the rest of the post data (text, reactions, etc.)
                    id: _id,  // <-- And re-assign _id to a new property named 'id'
                    createdAt: new Date(post.createdAt),
                    lastEdited: post.lastEdited ? new Date(post.lastEdited) : null
                };
            });
            setPosts(loadedPosts);
        } catch (err) {
            console.error("Error fetching posts:", err);
        }
        setIsLoading(false);
    };

    // --- Load posts once when the page first opens ---
    useEffect(() => {
        getPosts();
    }, []); // The empty array [] means this runs ONCE

    // --- UPDATED: handleAddPost (Text Only) ---
    const handleAddPost = async (e) => {
        e.preventDefault();
        if (newPostText.trim() === "") return;

        setIsLoading(true);

        const newPost = {
            text: newPostText,
        };

        try {
            // Send the new post object to our API
            await axios.post(`${API_URL}/add`, newPost);

            // Clear the form and refresh the post list from the server
            setNewPostText("");
            e.target.reset();
            await getPosts();
        } catch (err) {
            console.error("Error adding post:", err);
        }
        setIsLoading(false);
    };

    // --- UPDATED: handleDeletePost ---
    const handleDeletePost = async (idToDelete) => {
        try {
            await axios.delete(`${API_URL}/delete/${idToDelete}`);
            // For a faster-feeling UI, we remove the post from the state immediately
            setPosts(posts.filter(post => post.id !== idToDelete));
        } catch (err) {
            console.error("Error deleting post:", err);
            getPosts(); // Re-sync with DB if delete failed
        }
    };

    // --- UPDATED: handleEditPost ---
    const handleEditPost = async (idToEdit, newText) => {
        try {
            // Send the ID and the new text to the API
            await axios.patch(`${API_URL}/edit/${idToEdit}`, { newText: newText });
            // Refresh the whole list to show the change
            await getPosts();
        } catch (err) {
            console.error("Error editing post:", err);
        }
    };

    // --- UPDATED: handleReaction ---
    const handleReaction = async (idToReact, reactionType) => {
        try {
            // Send the ID and the reaction type to the API
            await axios.patch(`${API_URL}/reaction/${idToReact}`, { reactionType });
            // Refresh the whole list to show the new count
            await getPosts();
        } catch (err) {
            console.error("Error reacting to post:", err);
        }
    };

    // --- This is the JSX layout ---
    return (
        <div className="page-container motivation-page">
            <div className="motivation-layout">

                {/* --- The Left Sidebar (Form) --- */}
                <aside className="layout-sidebar">
                    <h2>Create a Post</h2>
                    <p>Share your positive energy. Add a thought!</p>
                    <form onSubmit={handleAddPost} className="new-post-form">
                        <textarea
                            value={newPostText}
                            onChange={(e) => setNewPostText(e.target.value)}
                            placeholder="What's on your mind?"
                            rows="4"
                            disabled={isLoading}
                        />

                        {/* --- File input is disabled until we build that feature --- */}

                        <input
                            id="file-upload"
                            type="file"
                            // onChange={(e) => setNewPostFile(e.target.files[0])}
                            disabled={true}
                        />

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Posting..." : "Post"}
                        </button>
                    </form>
                </aside>

                {/* --- The Right Side (Post Feed) --- */}
                <main className="layout-main-content">
                    <h2>Everything is Alright! You are right on track</h2>
                    {isLoading && posts.length === 0 && <p>Loading posts...</p>}
                    <div className="post-list">
                        {/* We map over the 'posts' and render one 'Post' component for each */}
                        {posts.map(post => (
                            <Post
                                key={post.id}
                                post={post}
                                onDelete={handleDeletePost}
                                onEdit={handleEditPost}
                                onReaction={handleReaction}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Motivation;