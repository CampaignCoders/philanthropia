import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import WebFont from 'webfontloader';
import './App.css';

// Our Routed Pages
import Loading from "./routes/Loading";

const AsyncHome = Loadable({
    loader: () => import("./routes/Home"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

const AsyncDonate = Loadable({
    loader: () => import("./routes/Donate"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

const AsyncLogin = Loadable({
    loader: () => import("./routes/Login"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

const AsyncNewCampaign = Loadable({
    loader: () => import("./routes/NewCampaign"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

const AsyncCreate = Loadable({
    loader: () => import("./routes/Register"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

const AsyncDetail = Loadable({
    loader: () => import("./routes/Detail"),
    loading: Loading,
    delay: 200,
    timeout: 10000
});

class App extends Component {
    constructor(props) {
        super(props);
        WebFont.load({
            google: {
                families: ['Lato:400,400i,700,700i', 'sans-serif']
            }
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                    <Route exact path="/" component={AsyncHome} />
                    <Route path="/donate" component={AsyncDonate} />
                    <Route path="/Login" component={AsyncLogin} />
                    <Route path="/Register" component={AsyncCreate} />
                    <Route path="/NewCampaign" component={AsyncNewCampaign}/>
                    <Route path="/Details/:id" component={AsyncDetail}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
