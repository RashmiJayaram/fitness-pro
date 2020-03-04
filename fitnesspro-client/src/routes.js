import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import LandingPage from './pages/landingPage/landingPage';

import MembershipPage from './pages/membership/MembershipPage';
import BillingPage from './pages/billing/BillingPage';
import SupportPage from './pages/support/SupportPage';
import WorkoutPlanPage from './pages/workoutplan/WorkoutPlanPage';
import ProfilePage from './pages/profile/ProfilePage';

import { history } from './redux/store';

const Routes = () => {
    return (
        <ConnectedRouter history={history}>
                <Switch>
                    <Route path='/' exact component={LandingPage}></Route>
                    <Route path='/profile' exact render={(props) => <ProfilePage {...props} isEditProfile={false} />}></Route>
                    <Route path='/profile/update' exact render={(props) => <ProfilePage {...props} isEditProfile={true} />}></Route>
                    <Route path='/membership' exact component={MembershipPage}></Route>
                    <Route path='/billing' exact component={BillingPage}></Route>
                    <Route path='/support' exact component={SupportPage}></Route>
                    <Route path='/workoutplan' exact component={WorkoutPlanPage}></Route>
                </Switch>
        </ConnectedRouter>
    );
}

export default Routes;