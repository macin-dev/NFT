import { users } from "../../../data/users";
import {UserCard} from "../../components/feature-specific/user-preview-card/UserCard.jsx";

export const UsersPage = () => {
  return (
    <section className="w-mobile tablet:w-tablet tablet:px-10 tablet:pb-10 desktop:w-desktop desktop:px-20 desktop:pb-20 mx-auto">
      <div className="grid gap-3 py-6 px-4 tablet:gap-y-4 tablet:gap-x-3 tablet:grid-cols-2 tablet:py-0 tablet:px-0 desktop:grid-cols-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            userID={user.id}
            username={user.username}
            background={user.bgURL}
            user={user.avatar}
          />
        ))}
      </div>
    </section>
  );
};
