import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EgoLogin from "./routes/EgoLogin";
import Dashboard from "./routes/Dashboard";
import Mypage from "./routes/Mypage";
import Note from "./routes/Note";
import Qna from "./routes/Qna";
import NewQna from "./routes/NewQna";
import Before from "./routes/Before";
import NewNote from "./routes/NewNote";
import DetailNote from "./routes/DetailNote";
import DetailQna from "./routes/DetailQna";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/qna/detailqna">
          <DetailQna />
        </Route>
        <Route path="/qna/newqna">
          <NewQna />
        </Route>
        <Route path="/qna">
          <Qna />
        </Route>
        <Route path="/note/detail">
          <DetailNote />
        </Route>
        <Route path="/note/newnote">
          <NewNote />
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
          <Before />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
