import CommentsList from "./CommentsList";

const CommentsContainer = () => {
    const commentsData = [
        {
            name: "Akarsh Pahariya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
            replies: [
                {
                    name: "Akarsh Pahariya",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                    replies: [
                        {
                            name: "Akarsh Pahariya",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                            replies: [
                                {
                                    name: "Akarsh Pahariya",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                                    replies: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Akarsh Pahariya",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                    replies: [],
                },
            ],
        },
        {
            name: "Akarsh Pahariya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
            replies: [],
        },
        {
            name: "Akarsh Pahariya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
            replies: [
                {
                    name: "Akarsh Pahariya",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                    replies: [],
                },
            ],
        },
        {
            name: "Akarsh Pahariya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
            replies: [],
        },
        {
            name: "Akarsh Pahariya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
            replies: [
                {
                    name: "Akarsh Pahariya",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis.",
                    replies: [],
                },
            ],
        },
    ];

    return (
        <div className="mx-8">
            <h1 className="text-2xl font-bold mt-[-10px]">Comments:</h1>
            <div>
                <CommentsList comments={commentsData} />
            </div>
        </div>
    );
};

export default CommentsContainer;
