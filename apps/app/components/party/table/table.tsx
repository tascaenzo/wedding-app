import { GRAY } from '@wedding/app/constants';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField } from '../../commons';
import { TableProps } from './table.interface';
import { Container } from './table.tyled';

export const Table = ({ tables }: TableProps) => {
  return (
    <Container>
      <TextField
        onChange={(text) => null}
        placeholder="Cerca..."
        icon={<AiOutlineSearch size={24} color={GRAY} />}
      />
    </Container>
  );
};
