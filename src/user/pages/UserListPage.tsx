import { useEffect, useState } from "react";
import { UserService } from "src/user/service";
import { UserFilterModel, UserModel } from "src/user/models";
import { map } from "lodash-es";
import { PagingRenderer } from "src/utils";
import { Paging } from "src/core/models";

function UserListPage() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [paging, setPaging] = useState<Paging>({
    page: 1,
    recordsPerPage: 10,
    totalRecords: 1,
  });

  const getUsers = async (filter?: UserFilterModel) => {
    const response = await UserService.getUsers(filter);
    const userList: UserModel[] = response.item;
    setPaging(response);
    setUsers(userList);
  };

  const onPageChange = async (paging: Paging) => {
    await getUsers(paging);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {map(users, (user) => (
        <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <hr />
        </div>
      ))}
      <PagingRenderer
        page={paging.page}
        recordsPerPage={paging.recordsPerPage}
        totalRecords={paging.totalRecords}
        onPageChange={onPageChange}
      />
    </div>
  );
}
export default UserListPage;
