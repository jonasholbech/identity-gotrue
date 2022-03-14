import { useIdentityContext } from "react-netlify-identity-gotrue";

export default function First() {
  const identity = useIdentityContext();
  const login = async (e) => {
    e.preventDefault();
    await identity
      .login({
        email: "jh@jonasholbech.dk",
        password: "shh",
      })
      .then((res) => console.log(res))
      .catch((e) => console.warn(e.message));
  };
  const createUser = async (evt) => {
    evt.preventDefault();

    identity
      .signup({
        password: "shh",
        email: "jh@jonasholbech.dk",
        user_metadata: {
          full_name: "Jonas Holbech",
        },
      })
      .then((msg) => console.log(msg))
      .catch((err) => console.warn(err));
  };
  return identity.user ? (
    <p>Welcome to your account, {identity.user.email}</p>
  ) : (
    <>
      <p>
        Please <button onClick={login}>log in</button>
      </p>
      <p>
        Or <button onClick={createUser}>create a user</button>
      </p>
    </>
  );
}
