import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const RestaurantDetail = React.lazy(() => import('./routes/RestaurantDetail'));
const UpdatePage = React.lazy(() => import('./routes/UpdatePage'));

const App = () => {

  return (
    <RestaurantsContextProvider>
      <div className="container">
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
    </RestaurantsContextProvider>
  )
}

export default App;
