import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './screen/Home';
import About from './screen/About';
import Services from './screen/Services';
import Gallery from './screen/Gallery';
import Contact from './screen/Contact';


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/about-us" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;