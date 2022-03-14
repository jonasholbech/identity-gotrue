import NetlifyIdentityContext from "react-netlify-identity-gotrue";
import First from "./First";
function App() {
  return (
    <NetlifyIdentityContext
      url={"https://netlify-thinks-jonasholbech-is-great.netlify.app"}
    >
      <First />
    </NetlifyIdentityContext>
  );
}

export default App;
