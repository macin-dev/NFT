import { BarContainer, Table } from "./index.js";

export const TableContainer = ({ users }) => {
  return (
    <div className="flex flex-col items-start self-stretch gap-3 bg-white desktop:flex-grow">
      <BarContainer />
      <Table users={users} />
    </div>
  );
};
