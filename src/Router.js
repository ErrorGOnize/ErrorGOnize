import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GoogleButton from "./components/Login/GoogleButton";
import Dashboard from "./routes/Dashboard";
import Mypage from "./routes/Mypage";
import Note from "./routes/Note";
import Qna from "./routes/Qna";
import NewQna from "./routes/NewQna";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/qna/newqna">
          <NewQna />
        </Route>
        <Route path="/qna">
          <Qna />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <GoogleButton />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
