import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const notify = (type,message) => {
  if(type === 'success'){
      toast.success(message,{position: toast.POSITION.TOP_RIGHT,autoClose:8000})
  }
  if(type === 'error'){
       toast.error(message,{position: toast.POSITION.TOP_CENTER,autoClose:false,theme: "colored"})
  }
}

export default notify;