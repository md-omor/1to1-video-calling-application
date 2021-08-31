import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './VideoCard.module.css';

function VideoCard({ name, refrr, ...otherProps }) {
    return (
        <div className="flex-grow m-3 bg-gray-900 rounded-lg relative">
            <AccountCircleIcon className={"text-white absolute z-10 top-1/2 left-1/2 " + styles.avaterIcon} />
            <video playsInline autoPlay className="border-2 h-full object-cover relative z-20 border-gray-600 w-full rounded-lg" ref={refrr} {...otherProps} />
            <p className="absolute z-30 bottom-2 left-4 font-semibold text-white capitalize">{name}</p>
        </div>
    )
}

export default VideoCard
