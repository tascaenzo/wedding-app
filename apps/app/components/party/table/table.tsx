import { Container, TableContainer, TableItem, Title } from './table.tyled';
import { TableProps } from './table.interface';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GRAY } from '@wedding/app/constants';
import { TextField } from '../../commons';
import { Invited, Table as TablePrisma } from '@prisma/client';

export const Table = ({ tables }: TableProps) => {
  const [searchText, setSearchText] = useState('');
  const [tableFiltred, setTableFiltred] =
    useState<(TablePrisma & { Invited: Invited[] })[]>(tables);

  const invited: { label: string; table: string }[] = [];

  tables.map((table) =>
    table.Invited.map((invite) =>
      invited.push({
        label: `${invite.firstName} ${invite.lastName}`,
        table: table.id,
      })
    )
  );

  useEffect(() => {
    if (searchText === '') {
      setTableFiltred(tables);
      return;
    }

    const tableFiltred: string[] = [];
    invited.forEach((invite) => {
      if (
        invite.label.toLowerCase().includes(searchText.toLowerCase()) &&
        !tableFiltred.includes(invite.table)
      )
        tableFiltred.push(invite.table);
    });

    setTableFiltred(tables.filter((table) => tableFiltred.includes(table.id)));

    console.log(tableFiltred);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Container>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <br />
        <TextField
          onChange={setSearchText}
          placeholder="Cerca..."
          icon={<BsSearch size={24} color={GRAY} />}
        />
      </div>
      <br />
      <small style={{ paddingLeft: '12px' }}>Tavoli:</small>
      {tableFiltred.map((table, index) => (
        <TableContainer key={index}>
          <Title>{table.label}</Title>
          <br />
          {table.Invited.map((person, index) => (
            <TableItem
              key={index}
            >{`${person.firstName} ${person.lastName}`}</TableItem>
          ))}
        </TableContainer>
      ))}
    </Container>
  );
};
