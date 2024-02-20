import { errorMessage } from 'const';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { selectNotify } from 'services/redux/commonSelectors';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';

export const Notify = () => {
  const { error } = useTypeSelector(selectNotify);

  useEffect(() => {
    if (error && error !== errorMessage.user_unauthorized_token) {
      toast.error(error);
    }
  }, [error]);

  return <ToastContainer />;
};
