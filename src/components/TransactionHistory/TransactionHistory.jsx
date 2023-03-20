import {
  Table,
  TableBody,
  TableBodyItem,
  TableHead,
  TableHeadItem,
} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableBodyItem>{item.type}</TableBodyItem>
              <TableBodyItem>{item.amount}</TableBodyItem>
              <TableBodyItem>{item.currency}</TableBodyItem>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
