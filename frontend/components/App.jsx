import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container'

const App = () => (
  <div>
    <Modal />
    <Switch>
    <Route path='/listings/:listingId' component={ListingShowContainer} />
    <Route path='/listings' component={ListingsIndexContainer} />
    <Route exact path='/' component={LandingPage} />
    <Redirect to='/' />
    </Switch>
    {/* <NavBarContainer /> */}
  </div>
)

export default App;