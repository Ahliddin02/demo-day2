import Carousel from 'react-bootstrap/Carousel';
import React, {Component} from 'react';
import CarouselComponent from './component/Carousel';
import Nover from './component/Carousel';
import Card from './component/Card';
import {NavDropdown, Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import './App.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import  Shirt   from './component/Shirt/Shirt';
import Sneakers from './component/Sneakers/Sneakers';
import Sundress from './component/Sundress/Sundress';
import AnkleBoots from './component/AnkleBoots/AnkleBoots';
import  DownJacket from './component/DownJacket/DownJacket';
import ChildrensShirt from './component/ChildrensShirt/ChildrensShirt';
import Header from './component/Header/Header'
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './component/MainPage/MainPage';

function App() {
  const MainPageLoadable = React.lazy(()=>import('./component/MainPage/MainPage'),)
  const ShirtLoadable = React.lazy(()=>import('./component/Shirt/Shirt'),)
  const SneakersLoadable = React.lazy(()=>import('./component/Sneakers/Sneakers'),)
  const SundressLoadable = React.lazy(()=>import('./component/Sundress/Sundress'),)
  const AnkleBootsLoadable = React.lazy(()=>import('./component/AnkleBoots/AnkleBoots'),)
  const DownJacketLoadable = React.lazy(()=>import('./component/DownJacket/DownJacket'),)
  const ChildrensShirtLoadable = React.lazy(()=>import('./component/ChildrensShirt/ChildrensShirt'),)
  const Login = React.lazy(()=>import('./component/Auth/Login'),)
  const Register = React.lazy(()=>import('./component/Auth/Register'),)
   return (
      <div>
        <Router>
        <Suspense fallback={<div>
          Loading...
        </div>}>
        <Header/>
          <Switch>
          <Route
            path='/'
            render={()=><MainPageLoadable />}
            exact
            /> <Route
            path='/shirt'
            render={()=><ShirtLoadable />}
            exact
            /> <Route
            path='/sneakers'
            render={()=><SneakersLoadable />}
            exact
            /> <Route
            path='/sundress'
            render={()=><SundressLoadable />}
            exact
            /> <Route
            path='/ankle-boots'
            render={()=><AnkleBootsLoadable />}
            exact
            /> <Route
            path='/down-jacket'
            render={()=><DownJacketLoadable />}
            exact
            />
            <Route
            path='/childrens-shirt'
            render={()=><ChildrensShirtLoadable />}
            exact
            />
            <Route
            path='/login'
            render={()=><Login/>}
            exact
            />
              <Route
            path='/register'
            render={()=><Register/>}
            exact
            />
          </Switch>
          <Footer />
        </Suspense>
        </Router>
     </div>
   );
};

 class Footer extends Component {
    render() {
       return (
        <div className="bol">
            <div class="container">
              <div class="row">
              <div class="col-sm-4">
                <div className="foo"><b>Интернет-магазин одежды</b></div>
                <div className="foo"><b>Душанбе, Таджикистан</b></div>
                <div className="foo"><b>Как нас найти?</b></div>
                <div className="foo"><b>Телефон: (+992)92-515-15-15</b></div>
              </div>
              <div class="col-sm-4">
              <div className="foo"><b>Давайте дружить</b></div>
              <div className="foo"><li><u><b>Facebook</b></u></li></div>
              <div className="foo"><li><u><b>Instagram</b></u></li></div>
              <div className="foo"><li><u><b>Telegram</b></u></li></div>
              </div>
              <div class="col-sm-4">
              <div className="foo"><b>О нас</b></div> 
              <div className="foo"><b>Помощь</b></div>    
              <div className="foo"><b>Разработано:</b></div>   
              <div className="foo"><b><u>Ahliddin Mazbutov</u></b></div>     
              </div>
           </div>
        </div>
            
          </div>
       )
    }
 }
 <br />
export default App;