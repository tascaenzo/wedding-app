import { Role } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoMdSend } from 'react-icons/io';
import {
  AppBar,
  CircleBtn,
  Layout,
  TextField,
  TextFieldError,
} from '../components';
import { NOTIFICATIONS } from '../constants';
import { CREATE_NOTIFICATION } from '../constants/api-routing';
import { WHITE } from '../constants/color';
import { useFetch } from '../hooks/use-fatch';

export function AddNotification() {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>(null);
  const [cookies] = useCookies(['auth']);
  const { post } = useFetch();
  const { push } = useRouter();

  useEffect(() => {
    if (cookies.auth?.role !== Role.ADMIN) push(NOTIFICATIONS);
  }, [cookies.auth?.role, push]);

  const onSubmit = async () => {
    if (message === '') {
      setError('Campo obligatorio');
      return;
    }

    await post(CREATE_NOTIFICATION, { body: { message } });
    push(NOTIFICATIONS);
  };

  return (
    <Layout>
      <AppBar />

      <div style={{ margin: '22px' }}>
        <TextField
          type="textarea"
          onChange={(text) => setMessage(text)}
          placeholder="Messaggio"
        />
        <TextFieldError>{error}</TextFieldError>
      </div>
      <CircleBtn
        icon={<IoMdSend size={30} color={WHITE} />}
        onClick={onSubmit}
      />
    </Layout>
  );
}

export default AddNotification;
