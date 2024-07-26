import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { addMessages } from "../utils/chatSlice";
import {
    uniqueNamesGenerator,
    colors,
    animals,
    countries,
    languages,
    names,
} from "unique-names-generator";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            const messageConfig = {
                dictionaries: [colors, animals, countries, languages, names],
                separator: " ",
                length: 5,
            };
            const randomName = uniqueNamesGenerator({
                dictionaries: [colors],
                length: 1,
                style: "capital",
                separator: " ",
            });
            const randomMessage = uniqueNamesGenerator(messageConfig);

            dispatch(
                addMessages({
                    name: randomName,
                    message: randomMessage,
                })
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full my-2 ml-[-15px] px-4 py-2 border-black border-2 h-[480px] bg-slate-100 rounded-lg overflow-y-scroll">
            <h1 className="text-2xl font-mono font-semibold">Live Chat</h1>
            <div>
                {chatMessages.map((c, i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
            </div>
        </div>
    );
};

export default LiveChat;
