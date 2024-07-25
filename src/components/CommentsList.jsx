/* eslint-disable react/prop-types */
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    if (comments) {
        return (
            <div>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        );
    }
};

export default CommentsList;
