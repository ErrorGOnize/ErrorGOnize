import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import Mypage from "./routes/Mypage";
import Note from "./routes/Note";
import Qna from "./routes/Qna";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/qna">
          <Qna />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
