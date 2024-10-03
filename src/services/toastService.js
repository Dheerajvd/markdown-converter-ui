import { toast } from 'react-toastify';

const toastConfig = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'my-toast'
}
const toastService = {
    success: (message) => {
        toast.success(message, toastConfig);
    },
    error: (message) => {
        toast.error(message, toastConfig);
    },
    info: (message) => {
        toast.info(message, toastConfig);
    },
    warn: (message) => {
        toast.warn(message, toastConfig);
    },
};

export default toastService;
