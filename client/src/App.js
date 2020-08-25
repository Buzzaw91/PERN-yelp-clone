import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';

const RestaurantDetail = React.lazy(() => import('./routes/RestaurantDetail'));
const UpdatePage = React.lazy(() => import('./routes/UpdatePage'));

const App = () => {
  return <div>
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={UpdatePage} />
          <Route exact path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </Router>
    </Suspense>
  </div>
}

export default App;
