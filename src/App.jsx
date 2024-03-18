import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; // Import Home component for the default route
import Projects from './Projects'; // Import Projects component for projects section
import Skills from './Skills'; // Import Skills component for skills section
import Experience from './Experience'; // Import Experience component for experience section
import Contact from './Contact'; // Import Contact component for contact section

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        {/* Define routes here */}
                        {/* Home page */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* Projects section */}
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        {/* Skills section */}
                        <Route path="/skills">
                            <Skills />
                        </Route>
                        {/* Experience section */}
                        <Route path="/experience">
                            <Experience />
                        </Route>
                        {/* Contact section */}
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
