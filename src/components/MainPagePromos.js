import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Jumbotron, Button, CardLink} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import featured from '../data/featured';

class Promos extends Component{ 
    constructor(props){
        super(props);
    }     
    render(){
        const arr = featured;
        const items = arr.map((item) => {
            var source = require('../' + item.image);                        
            return(
                <div className="mt-2 cardItem">                    
                    <Card style={{height:"100%", borderRadius:"0px"}}>
                        <NavLink className="nav-link" to={`/itemDetail/${item.prod_id}`}>                                                    
                            <CardBody>                            
                                <CardImg style={{objectFit:"contain"}} src={source}></CardImg>                                
                                <div style={{textAlign: "center", color:"black"}}>
                                    {item.name}                                
                                </div> 
                                <div style={{textAlign: "center", textDecorationLine: "line-through", color:"maroon"}}>
                                    <h6>{item.price}</h6>                                
                                </div>                                                       
                            </CardBody> 
                        </NavLink>                                              
                    </Card>                    
                </div>                    
            );                      
        });
        return(
            <div className="container">                
                    <div className="row" style={{justifyContent:"center", alignItems:"center"}}>
                        <h1 className="basic-font col-md-3">E MART</h1>
                        <div className="col-md-6">                                                        
                            <input className="search" type="text" placeholder="Search not developed yet"></input>                                                       
                        </div>                        
                    </div>                                      
                <div className="row" style={{marginTop:"100px", marginBottom:"15px"}}>   
                    <h4 className="col-12 basic-font">Products you might be interested in...</h4>                   
                    {items}
                </div>
            </div>            
        );
    }
}

export default Promos;