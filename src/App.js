import NetlifyIdentityContext from "react-netlify-identity-gotrue";
import First from "./First";
import Second from "./Second";
function App() {
  return (
    <NetlifyIdentityContext
      url={"https://netlify-thinks-jonasholbech-is-great.netlify.app"}
    >
      <First />
      <Second />
    </NetlifyIdentityContext>
  );
}

export default App;
