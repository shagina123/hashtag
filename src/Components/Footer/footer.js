import React from 'react'
import './footer.css'
import logo from '../../Assets/fanconvo.png'
export default class Footer extends React.Component{
    render(){
        return(
            <div className="font-face-poppins">
            <div className=" card-group footer">
              <div class="card" >
                <div class="card-body"  >
                    <img src={logo}></img>
                  </div>
                  </div>
                  <div class="card" >
                <div class="card-body"  >
<p> How fanconvo works?</p>    
              </div>
                  </div>
                  <div class="card" >
                <div class="card-body"  >
<p>Terms of use</p>                  </div>
                  </div>
                  <div class="card" >
                <div class="card-body"  >
<p>Contact us</p>                  </div>
                  </div>
                  </div>
                  <div className="last">
                      @2021 fanconvo
                  </div>
                  </div>
        )
    }
}