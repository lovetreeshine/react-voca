import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"> {/*  exact를 적어줘야 정확한 path 입력받음 */}

            <DayList/>
          </Route>
          <Route path="/day/:day"> {/* :뒤의 변수로 값 전달  */}
            <Day />
          </Route>
          <Route>  {/* path가 없는 라우터는 맨 마지막에 적기  */}
            <EmptyPage/>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
