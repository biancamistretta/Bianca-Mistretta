// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        {/* Define routes here */}
                        {/* My name is Bianca and I am studying Full Stack Engineering! */}
                        <Route path="/">
                            <h2>Welcome to My Portfolio</h2>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;

