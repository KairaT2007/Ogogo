import { useEffect, useState } from "react";
import { db, auth, storage } from "~/config/firebase";
import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function Comments() {
    const [commentsList, setCommentsList] = useState([]);

    const [newCommentsTitle, setNewCommentsTitle] = useState("");
    const [newCommentsName, setNewCommentsName] = useState("");
    const [newCommentsDesc, setNewCommentsDesc] = useState("");
    const [newCommentsImage, setNewCommentsImage] = useState("");

    const commentsCollectionRef = collection(db, "comments");

    const getCommentsList = async () => {
        try {
            const data = await getDocs(commentsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCommentsList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCommentsList();
    }, []);

    const onSubmitComments = async () => {
        try {
            await addDoc(commentsCollectionRef, {
                title: newCommentsTitle,
                name: newCommentsName,
                desc: newCommentsDesc,
                image: newCommentsImage,
            });
            getCommentsList();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteComment = async (id) => {
        const commentDoc = doc(db, "comments", id);
        await deleteDoc(commentDoc);
    };

    return (
        <div className="App">
            <div>
                <input
                    placeholder="Movie t..."
                    onChange={(e) => setNewCommentsTitle(e.target.value)}
                />
                <input
                    placeholder="Movie d..."
                    onChange={(e) => setNewCommentsDesc(e.target.value)}
                />
                <input
                    placeholder="Movie n..."
                    onChange={(e) => setNewCommentsName(e.target.value)}
                />
                <input
                    placeholder="Movie n..."
                    onChange={(e) => setNewCommentsImage(e.target.value)}
                />
                <button onClick={onSubmitComments}> Submit Movie</button>
            </div>
            <div>
                {commentsList.map((comment) => (
                    <div>
                        <h1>
                            {comment.title}
                        </h1>
                        <h1>
                            {comment.name}
                        </h1>
                        <h1>
                            {comment.desc}
                        </h1>
                        <img src={comment.image} alt="" />
                        <button onClick={() => deleteComment(comment.id)}> Delete Movie</button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
