import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Layouts/Header.js';
import Body from './Layouts/Body.js';
import Footer from './Layouts/Footer';
import './index.css';


class App extends React.Component {
    render() {
                return (
                  <div className="container-center-horizontal">
                    <div className="desktop-9 screen">
                    <Header />
                    <Body />
                    <Footer />
                    </div>
                  </div>
                );
    }
}

export default App;


  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  