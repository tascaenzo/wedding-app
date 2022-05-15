import { TextField } from '../commons';
import { Button, Form } from './login-form.styled';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { GRAY } from '@wedding/app/constants';

export const LoginForm = () => {
  return (
    <Form>
      <TextField
        placeholder="Nome"
        icon={<MdDriveFileRenameOutline size={24} color={GRAY} />}
      />
      <br />
      <TextField
        placeholder="Cognome"
        icon={<MdDriveFileRenameOutline size={24} color={GRAY} />}
      />
      <br />
      <br />
      <Button type="submit">Accedi</Button>
    </Form>
  );
};
