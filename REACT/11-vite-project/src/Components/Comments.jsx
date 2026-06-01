import React,{useState, useEffect} from 'react';

function Comments() {
    const [comments, setComments] = useState([]);
    const [visibility, setVisibility] = useState(5);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((resp) => resp.json())
        .then((data) => setComments(data.slice(0, visibility)));
    },[visibility]);
    function loadMore(){
        setVisibility(visibility +5);
    }
    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>
                Коментарі користувачів
            </h2>
            <div className='row g-4'>
                {comments.map((comment) => {
                    return (
                        <div className='col-md-6' key={comment.id}>
                            <div className='card h-100 shadow-sm'>
                                <div className='card-body'>
                                    <h4 className='card-title'>
                                        {comment.name}
                                    </h4>
                                    <h5 className='card-subtitle mb-2 text-muted'>
                                        {comment.email}
                                    </h5>
                                    <p className='card-text'>{comment.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className='p-5 text-center'>
                <button className="btn btn-success"
                onClick={loadMore}>Завантажити ще коментарі</button>
            </div>
        </div>
    );
}

export default Comments;