import React from 'react'
import Header from './shared-components/Header'
import Footer from './shared-components/Footer'
// import { Button } from 'react-bulma-components';

class AppLayout extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            {this.props.children}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default AppLayout