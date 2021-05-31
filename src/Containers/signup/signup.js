import React from 'react'
import Menu from '../../Components/menu/menu'
import Footer from '../../Components/Footer/footer'
import SignUpForm from '../../Components/signupform/signupform'
export default class Signup extends React.Component{

    render(){
        return(
            <div>signup
                <Menu/>
                <SignUpForm/>
                <Footer/>
            </div>
        )
    }
}