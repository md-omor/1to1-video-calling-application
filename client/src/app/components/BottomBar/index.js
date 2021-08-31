import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import styles from './BottomBar.module.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { SocketContext } from '../../contexts/Context';
import { useContext } from "react";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicOffIcon from '@material-ui/icons/MicOff';

function BottomBar() {
    const { playStop, leaveCall, camera, mute, muteUnmute } = useContext(SocketContext);

    return (
        <div className="z-50 absolute bottom-3 space-x-6 w-full left-0 p-8 flex items-center justify-center">
            <IconButton className={styles.btn} onClick={playStop}>
                {!camera ? (
                    <VideocamIcon />
                ) : (
                    <VideocamOffIcon color="secondary" />
                )}
            </IconButton>
            <IconButton color="secondary" className={styles.endBtn} onClick={leaveCall}>
                <CallIcon />
            </IconButton>
            <IconButton className={styles.btn} onClick={muteUnmute}>
                {!mute ? (
                    <MicNoneIcon />
                ) : (
                    <MicOffIcon color="secondary" />
                )}
            </IconButton>
        </div>
    )
}

export default BottomBar
