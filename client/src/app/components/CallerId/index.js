import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useToasts } from 'react-toast-notifications'

const content = (
    <div className="flex">
        <p className="text-gray-300">ID copied to clipboard</p>
    </div>
);

function CallerId({ id = "mag-mzqb-zgz" }) {
    const { addToast } = useToasts()

    const onCopy = () => {
        navigator.clipboard.writeText(id);
        addToast(content, {
            appearance: 'info',
            autoDismiss: true,

        })
    }

    return (
        <div className="absolute z-50 top-0 flex p-6 items-center rounded-xl left-0">
            <p className="text-gray-400 font-semibold">{id}</p>
            <FileCopyOutlinedIcon onClick={onCopy} className="text-gray-600 ml-4 cursor-pointer" />
        </div>
    )
}

export default CallerId
