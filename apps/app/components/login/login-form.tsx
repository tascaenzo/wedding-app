import { MdDriveFileRenameOutline } from 'react-icons/md';
import { AvatarSelector, TextField, TextFieldError } from '../commons';
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
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Prisma.UserCreateInput>(null);
  const [error, setError] = useState<Prisma.UserCreateInput>({
    firstName: '',
    lastName: '',
    avatar: '',
  });

  const onSubmit = async () => {
    if (!data?.firstName || !data?.lastName) {
      let firstName = '';
      let lastName = '';

      if (!data?.firstName) firstName = 'Campo Obligatorio';
      if (!data?.lastName) lastName = 'Campo Obligatorio';

      setError({ firstName, lastName, avatar: '' });

      return;
    }
    setStep(1);
  };

  const selectAvatar = async (avatar: string) => {
    try {
      const response = await post(CREATE_USER, { body: { ...data, avatar } });
      setCookie('auth', response, { maxAge: 3600 * 24 * 15 }); //15 giorni
      router.push(HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {step === 0 && (
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
      )}

      {step === 1 && <AvatarSelector onSelect={selectAvatar} />}
    </>
  );
};
