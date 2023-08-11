import React, { useEffect } from 'react'
import { Sport } from './componenet/sport';
import Header from './componenet/header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import { All } from './componenet/All';
import { Sci_news } from './componenet/Sci_news';
import { Trend_news } from './componenet/Trend_news';
import { Top_news } from './componenet/Top_news';
import { Enter_news } from './componenet/Enter_news';

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<All />}>
          </Route>
          <Route exact path='/all' element={<All />}>
          </Route>
          <Route exact path='/scie' element={<Sci_news />} >

          </Route>
          <Route exact path='/trend' element={<Trend_news />} >

          </Route>
          <Route exact path='/top' element={<Top_news />} >

          </Route>
          <Route exact path='/enter' element={<Enter_news />} >

          </Route>
          <Route exact path='/sport' element={<Sport />} >

          </Route>


        </Routes>
      </Router>
    </>


  );



}

export default App;
