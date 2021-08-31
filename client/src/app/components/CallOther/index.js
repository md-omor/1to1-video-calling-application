import styles from "./CallOther.module.css"
import { SocketContext } from '../../contexts/Context';
import { useContext, useState } from "react";

function CallOther() {
    const { name, setName, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    const handleCall = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleCall} className={"absolute flex items-center z-40 top-20 md:top-5 p-6 rounded-xl bg-gray-900 left-1/2 " + styles.wrapper}>
            <div className="flex-grow">
                <input value={name} onChange={e => setName(e.target.value)} type="text" className="text-white md:w-80 my-2 mr-2 max-w-full outline-none bg-gray-800 rounded-xl px-3 py-2" placeholder="Your name" required />
                <input value={idToCall} onChange={e => setIdToCall(e.target.value)} type="text" className="text-white my-2 mr-2 md:w-80 max-w-full outline-none bg-gray-800 rounded-xl px-3 py-2" placeholder="Give the ID you want to call" required />
            </div>
            <button type="submit" className="text-gray-300 block mx-auto px-5 cursor-pointer rounded-lg ml-1 bg-gray-800 py-2"  onClick={() => callUser(idToCall)}>Call</button>
        </form>
    )
}

export default CallOther
