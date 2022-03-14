import { useIdentityContext } from "react-netlify-identity-gotrue";
import { useEffect } from "react";
export default function Second() {
  const identity = useIdentityContext();
  useEffect(() => {
    if (!identity.user) {
      return;
    }
    identity.authorizedFetch("/api/test");
  }, [identity, identity.user]);

  if (!identity.user) {
    return null;
  }
  return <p>{JSON.stringify(identity.user, null, 2)}</p>;
}
