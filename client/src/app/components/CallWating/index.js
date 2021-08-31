import styles from "./CallWating.module.css"
import { SocketContext } from '../../contexts/Context';
import { useContext } from "react";

function CallWating() {
    const { call, answerCall } = useContext(SocketContext);

    return (
        <div className={"absolute z-40 top-60 md:top-48 flex p-6 items-center rounded-xl bg-gray-900 left-1/2 " + styles.wrapper}>
            <p className="text-gray-400 w-48"><span className="font-semibold">{call?.name}</span> is calling you!</p>
            <button onClick={answerCall} className="text-gray-300 px-5 cursor-pointer rounded-lg ml-4 bg-gray-800 py-2">Answer</button>
        </div>
    )
}

export default CallWating
