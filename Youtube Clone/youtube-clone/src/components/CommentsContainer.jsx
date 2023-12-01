import React from 'react'

const commentsData = [
    {
        name: "Sharadindu Das",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: [

        ]
    },
    {
        name: "Akshay Saini",
        text: "Youtube Clone looks amazing ❤. Keep working hard and Hope you are enjoying my Namaste React Course",
        replies: [
            {
                name: "Random User",
                text: "Hello Sir",
                replies: []
            },
            {
                name: "Random User",
                text: "Hello Sir",
                replies: []
            },
        ]
    },
    {
        name: "Hitesh Choudhary",
        text: "Nice and Sleek Design",
        replies: [
            {
                name: "Random User",
                text: "Hello Sir",
                replies: []
            },
            {
                name: "Random User",
                text: "Hello Sir",
                replies: []
            },
        ]
    },
    {
        name: "Harshit",
        text: "Good one",
        replies: []
    },
    {
        name: "Code with XYZ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: []
    },
    {
        name: "Code with XYZ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: []
    },
    {
        name: "Code with XYZ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: []
    },
    {
        name: "Code with XYZ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: []
    },
    {
        name: "Code with XYZ",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in.",
        replies: []
    },

]

// Comment Data Section
const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className='mb-4 pt-2 pb-3 flex items-start gap-4'>
            <img src="./images/user.png" alt="user-img" className='w-7 cursor-pointer' />
            <div className='flex flex-col justify-center gap-2'>
                <h3 className='text-sm cursor-pointer'>{name}</h3>
                <p className='text-sm'>{text}</p>
            </div>
        </div>
    )
}

// Comment Section
const CommentsList = ({ comments }) => {
    return comments?.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            {/* Replies */}
            {
                comment.replies.length !== 0 && <div className='pl-5'>
                    <CommentsList comments={comment.replies} />
                </div>
            }
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div>
            <h2 className='text-xl font-extrabold pt-5 pb-5'>Comments</h2>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer