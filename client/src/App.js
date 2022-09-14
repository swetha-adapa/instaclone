import{BrowserRouter,Route,Routes} from "react-router-dom";
import LandingPage from "./landing-page";
import PostView from "./post-view";
import Form from "./form";
function App() {
  return (
<BrowserRouter>
<Routes>
  
<Route exact path="/" element={<LandingPage/>}></Route>
  <Route exact path="/post-view" element={<PostView/>}></Route>
  <Route exact path="/form" element={<Form/>}></Route>
</Routes>


</BrowserRouter>
  );
}
export default App;