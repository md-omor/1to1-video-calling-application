import BottomBar from "../components/BottomBar"
import CallerId from "../components/CallerId"
import CallWating from "../components/CallWating"
import { ToastProvider } from 'react-toast-notifications';
import CallOther from "../components/CallOther";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { SocketContext } from '../contexts/Context';
import { useContext } from "react";

const MyCustomToast = ({ _, children }) => (
    <div className="bg-gray-800 w-64 p-4 rounded-lg">
        {children}
    </div>
);

function CallScreen() {
    const { me, name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <ToastProvider components={{ Toast: MyCustomToast }}>
            <div className="bg-black w-full h-screen relative" controls={false}>
                <CallerId id={me} />
                {!callAccepted && call.isReceivingCall && (
                    <CallWating />
                )}
                {!callAccepted && (
                    <CallOther />
                )}
                <div className="flex relative z-10 flex-col w-full mx-auto max-w-full md:flex-row h-screen">
                    <div className="flex-grow m-3 self-center bg-gray-900 rounded-lg relative">
                        {stream && (
                            <video playsInline muted autoPlay className="border-2 h-full object-cover relative z-20 border-gray-600 w-full rounded-lg" ref={myVideo} />
                        )}
                        {!myVideo.current?.srcObject?.getVideoTracks()[0].enabled && myVideo.current && (
                          <AccountCircleIcon className={"text-white absolute z-40 top-1/2 left-1/2 avaterIcon"} />  
                        )}
                        <p className="absolute z-30 bottom-2 left-4 font-semibold text-white capitalize">{name || "You"}</p>
                    </div>
                    {callAccepted && !callEnded && (
                        <div className="self-center flex-grow m-3 bg-gray-900 rounded-lg relative">
                            <video playsInline autoPlay className="border-2 h-full object-cover relative z-20 border-gray-600 w-full rounded-lg" ref={userVideo} />
                            {!userVideo.current?.srcObject?.getVideoTracks()[0].enabled  && userVideo.current && (
                                <AccountCircleIcon className={"text-white absolute z-40 top-1/2 left-1/2 avaterIcon"} />
                            )}
                            <p className="absolute z-30 bottom-2 left-4 font-semibold text-white capitalize">{call.name || 'Other'}</p>
                        </div>
                    )}
                </div>
                <BottomBar />
            </div>
        </ToastProvider>
    )
}

export default CallScreen
