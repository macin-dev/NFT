import { Row } from "./Row";

export const Table = ({ users }) => {
  const allUsers =
    !!users.collection_1 && users.collection_1.concat(users.collection_2);
  return (
    <div className="flex flex-col items-start self-stretch">
      {allUsers
        ? allUsers.map((u, i) => (
            <Row key={i} number={i + 1} url={u.url} name={u.name} />
          ))
        : users.map((u, i) => (
            <Row key={i} number={i + 1} url={u.url} name={u.name} />
          ))}
    </div>
  );
};
