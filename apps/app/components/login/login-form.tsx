import { MdDriveFileRenameOutline } from 'react-icons/md';
import { TextField, TextFieldError } from '../commons';
import { Button, Form } from './login-form.styled';
import { GRAY, HOME } from '@wedding/app/constants';
import { Prisma } from '@prisma/client';
import { useState } from 'react';
import { CREATE_USER } from '@wedding/app/constants/api-routing';
import { useFetch } from '@wedding/app/hooks/use-fatch';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export const LoginForm = () => {
  const { post } = useFetch();
  const router = useRouter();

  const [, setCookie] = useCookies(['auth']);
  const [data, setData] = useState<Prisma.UserCreateInput>(null);
  const [error, setError] = useState<Prisma.UserCreateInput>({
    firstName: '',
    lastName: '',
  });

  const onSubmit = async () => {
    if (!data?.firstName || !data?.lastName) {
      let firstName = '';
      let lastName = '';

      if (!data?.firstName) firstName = 'Campo Obligatorio';
      if (!data?.lastName) lastName = 'Campo Obligatorio';

      setError({ firstName, lastName });

      return;
    }
    try {
      const response = await post(CREATE_USER, { body: data });
      setCookie('auth', response);
      router.push(HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <div>
        <TextField
          onChange={(firstName) => setData({ ...data, firstName })}
          placeholder="Nome"
          icon={<MdDriveFileRenameOutline size={24} color={GRAY} />}
        />
        <TextFieldError>{error?.firstName}</TextFieldError>
      </div>
      <br />
      <div>
        <TextField
          onChange={(lastName) => setData({ ...data, lastName })}
          placeholder="Cognome"
          icon={<MdDriveFileRenameOutline size={24} color={GRAY} />}
        />
        <TextFieldError>{error?.lastName}</TextFieldError>
      </div>
      <br />
      <Button onClick={onSubmit}>Accedi</Button>
    </Form>
  );
};
