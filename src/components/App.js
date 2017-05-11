/**
 * Created by intelligrape on 9/5/17.
 */
import React, {Component} from 'react';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;