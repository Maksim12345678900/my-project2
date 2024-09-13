import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Books from './Books';
import BookDetails from './BookDetails';
import CreateBook from './CreateBook';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О сайте</Link></li>
            <li><Link to="/books">Книги</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/books/:id" component={BookDetails} />
          <Route path="/create-book" component={CreateBook} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;