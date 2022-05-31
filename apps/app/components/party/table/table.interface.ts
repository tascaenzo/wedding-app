import { Invited, Table } from '@prisma/client';

export interface TableProps {
  tables: (Table & { Invited: Invited[] })[];
}
