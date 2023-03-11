import { isEmpty } from "lodash-es";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditUserForm } from "src/user/forms";
import { UserService } from "src/user/service";
import { UserModel } from "../models";

function EditUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<UserModel>();

  const getUser = async (id: string) => {
    const response = await UserService.getUserById(id);
    setUser(response);
  };

  useEffect(() => {
    id && getUser(id);
  }, [id]);

  if (isEmpty(id) || isEmpty(user)) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <EditUserForm user={user} />
    </div>
  );
}

export default EditUserPage;
