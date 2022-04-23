import { ChangeEvent } from "react";
import {
  useUserDispatchContext,
  useUserStateContext,
} from "../context/userContext";
import { updateUserDetails } from "../reducer/userReducer";

export function UserDetails() {
  const userState = useUserStateContext();
  const dispatch = useUserDispatchContext();
  const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeStage("firstName", event.target.value);
  };

  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeStage("lastName", event.target.value);
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeStage("address", event.target.value);
  };

  const onChangeStage = (key: string, value: string) => {
    const obj = {
      ...userState.userDetails,
      [key]: value,
    };
    updateUserDetails(dispatch, obj);
  };

  return (
    <div>
      <div>User Details</div>
      FirstName: {userState.userDetails.firstName}
      <br />
      LastName: {userState.userDetails.lastName}
      <br />
      Address: {userState.userDetails.address}
      <br />
      <form>
        <input
          type="text"
          value={userState.userDetails.firstName}
          onChange={onChangeFirstName}
        />
        <br />
        <input
          type="text"
          value={userState.userDetails.lastName}
          onChange={onChangeLastName}
        />
        <br />
        <input
          type="text"
          value={userState.userDetails.address}
          onChange={onChangeAddress}
        />
      </form>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  );
}
