/* eslint-disable react/prop-types */
const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center mx-1 my-4">
            <div className="mx-2">
                <img
                    className="h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTN02kiBd6bxj8_oo2Wn5V0nRgm_kSdBSVw&s"
                    alt="user icon"
                />
            </div>
            <h1 className="mr-4 text-lg font-bold">{name}</h1>
            <h2>{message}</h2>
        </div>
    );
};

export default ChatMessage;
