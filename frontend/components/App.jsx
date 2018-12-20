import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container'
import ProfileIndexContainer from './profile/profile_index_container'
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
    <Route path='/listings/:listingId' component={ListingShowContainer} />
    <AuthRoute path='/profile/:userId' component={ProfileIndexContainer} />
    <Route path='/listings' component={ListingsIndexContainer} />
    <Route path='/search' component={SearchContainer} />
    <Route exact path='/' component={LandingPage} />
    <Redirect to='/' />
    </Switch>
  </div>
)

export default App;