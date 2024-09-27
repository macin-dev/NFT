import { UserCard } from ".";
import { users } from "./users";

export const UserSection = () => {
  return (
    <section className="w-mobile tablet:w-tablet tablet:px-10 tablet:pb-10 desktop:w-desktop desktop:px-20 desktop:pb-20 mx-auto">
      <div className="grid gap-3 py-6 px-4 tablet:gap-y-4 tablet:gap-x-3 tablet:grid-cols-2 tablet:py-0 tablet:px-0 desktop:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} background={user.bgURL} user={user.avatar} />
        ))}
      </div>
    </section>
  );
};
