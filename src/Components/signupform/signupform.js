import React from 'react'
import './signupform.css'
import Api from '../../api'
import swal from 'sweetalert';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
const Validations = Yup.object().shape({

    fname: Yup.string().required("required")
        .min(2, "too short"),
        lname: Yup.string().required("required")
        .min(1, "too short"),
        uname: Yup.string().required("required")
        .min(6, "too short"),
        uname: Yup.string().required("required")
        .min(6, "too short"),
        pwd: Yup.string().required("required")
        .min(6, "too short")

}
)
export default class SignUpForm extends React.Component {
    state = {
        user: "",
        time:""
    }
    submit = (values) => {

        // let amount = values.amount
        let fname=values.fname
        let lname=values.lname
        let uname=values.uname
        let email=values.email
        let pwd=values.pwd
        let time=this.state.time
        let user = this.state.user

        Api.signup(user,fname,lname,uname,email,pwd,time)
            .then(response => {
                // alert("succ")
                swal("Successfully signedup", response.data.message, "success")
            })
            .catch(error => {
                // alert("fail")
                swal("Sign up failed", error.response.data.message, "warning")
            })



    }
    setFan = () => {
        this.setState({ user: "fan" })
    }
    setTalent = () => {
        this.setState({ user: "talent" })
    }
  selection=(e)=>{
      this.setState({time:e.target.Value})

  }
    render() {

        return (
            <Formik 
            initialValues={{
                fname: "",
                lname:"",
                uname:"",
                email:"",
                pwd: ""
            }}

                onSubmit={this.submit
                }
                validationSchema={Validations}
            >     
                      {({ errors, touched }) => (
                    <div className='signupform font-face-poppins'>

                        <ul className="nav nav-pills mb-3 signuptab" id="pills-tab" role="tablist" >
                            <li className="nav-item" role="presentation" onClick={this.setFan}>
                                <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Fan Signup</button>
                            </li>
                            <li className="nav-item" role="presentation" onClick={this.setTalent}>
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Talent Signup</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">{this.setFan}</div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">{this.setFan}</div>

                        </div>

<div><h3 className="font-face-poppins">Create your fan account</h3></div>
                        <Form className='signupdata font-face-poppins' >
                            <div className="mb-3">
                                <label for="firstname" className="form-label font-face-poppins" >First Name*</label>
                                <Field className="form-control" name="fname" placeholder="First name" required="true" ></Field><br></br>
                                {
                                    errors.fname && touched.fname ? (
                                        <div className="errorsV">{errors.fname}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-3">
                                <label for="lastname" className="form-label">Last Name*</label>
                                <Field className="form-control" name="lname" placeholder="Last name" required="true" ></Field><br></br>
                                {
                                    errors.lname && touched.lname ? (
                                        <div className="errorsV">{errors.lname}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-3">
                                <label for="uname" className="form-label">User Name*</label>
                                <Field className="form-control" name="uname" placeholder="user name" required="true" ></Field><br></br>
                                {
                                    errors.uname && touched.uname ? (
                                        <div className="errorsV">{errors.uname}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-3 align-items-center">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <Field className="form-control" name="email" placeholder="Email"  required="true" ></Field><br></br>
                                {
                                    errors.uname && touched.email ? (
                                        <div className="errorsV">{errors.email}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-3">

                                <label for="pwd" className="form-label">Password</label>
                                <Field type="password" className="form-control" name="pwd"  required="true" ></Field><br></br>
                                {
                                    errors.pwd && touched.pwd ? (
                                        <div className="errorsV">{errors.pwd}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-3">
                                <select className="form-select timezon font-fave-poppins" aria-label="Default select example" onChange={this.selection}>
                                    <option value=" International Date Line West">(UTC-12:00) International Date Line West</option>
                                    <option value="(UTC-11:00) Coordinated Universal Time-11">(UTC-11:00) Coordinated Universal Time-11</option>
                                    <option value="UTC-10:00) Hawaii">(UTC-10:00) Hawaii</option>
                                    <option value="(UTC-09:00) Alaska-8">(UTC-09:00) Alaska</option>
                                    <option value="(UTC-08:00) Baja California-7">(UTC-08:00) Baja California</option>
                                    <option value="(UTC-07:00) Pacific Time (US &amp; Canada)-7">(UTC-07:00) Pacific Time (US &amp; Canada)</option>
                                    <option value="-8">(UTC-08:00) Pacific Time (US &amp; Canada)</option>
                                    <option value="-7">(UTC-07:00) Arizona</option>
                                    <option value="-6">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
                                    <option value="-6">(UTC-07:00) Mountain Time (US &amp; Canada)</option>
                                    <option value="-6">(UTC-06:00) Central America</option>
                                    <option value="-5">(UTC-06:00) Central Time (US &amp; Canada)</option>
                                    <option value="-5">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option>
                                    <option value="-6">(UTC-06:00) Saskatchewan</option>
                                    <option value="-5">(UTC-05:00) Bogota, Lima, Quito</option>
                                    <option value="-4">(UTC-05:00) Eastern Time (US &amp; Canada)</option>
                                    <option value="-4">(UTC-05:00) Indiana (East)</option>
                                    <option value="-4.5">(UTC-04:30) Caracas</option>
                                    <option value="-4">(UTC-04:00) Asuncion</option>
                                    <option value="-3">(UTC-04:00) Atlantic Time (Canada)</option>
                                    <option value="-4">(UTC-04:00) Cuiaba</option>
                                    <option value="-4">(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option>
                                    <option value="-4">(UTC-04:00) Santiago</option>
                                    <option value="-2.5">(UTC-03:30) Newfoundland</option>
                                    <option value="-3">(UTC-03:00) Brasilia</option>
                                    <option value="-3">(UTC-03:00) Buenos Aires</option>
                                    <option value="-3">(UTC-03:00) Cayenne, Fortaleza</option>
                                    <option value="-3">(UTC-03:00) Greenland</option>
                                    <option value="-3">(UTC-03:00) Montevideo</option>
                                    <option value="-3">(UTC-03:00) Salvador</option>
                                    <option value="-2">(UTC-02:00) Coordinated Universal Time-02</option>
                                    <option value="-1">(UTC-02:00) Mid-Atlantic - Old</option>
                                    <option value="0">(UTC-01:00) Azores</option>
                                    <option value="-1">(UTC-01:00) Cape Verde Is.</option>
                                    <option value="1">(UTC) Casablanca</option>
                                    <option value="0">(UTC) Coordinated Universal Time</option>
                                    <option value="0">(UTC) Edinburgh, London</option>
                                    <option value="1">(UTC+01:00) Edinburgh, London</option>
                                    <option value="1">(UTC) Dublin, Lisbon</option>
                                    <option value="0">(UTC) Monrovia, Reykjavik</option>
                                    <option value="2">(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                                    <option value="2">(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                                    <option value="2">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                                    <option value="2">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                                    <option value="1">(UTC+01:00) West Central Africa</option>
                                    <option value="1">(UTC+01:00) Windhoek</option>
                                    <option value="3">(UTC+02:00) Athens, Bucharest</option>
                                    <option value="3">(UTC+02:00) Beirut</option>
                                    <option value="2">(UTC+02:00) Cairo</option>
                                    <option value="3">(UTC+02:00) Damascus</option>
                                    <option value="3">(UTC+02:00) E. Europe</option>
                                    <option value="2">(UTC+02:00) Harare, Pretoria</option>
                                    <option value="3">(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                                    <option value="3">(UTC+03:00) Istanbul</option>
                                    <option value="3">(UTC+02:00) Jerusalem</option>
                                    <option value="2">(UTC+02:00) Tripoli</option>
                                    <option value="3">(UTC+03:00) Amman</option>
                                    <option value="3">(UTC+03:00) Baghdad</option>
                                    <option value="3">(UTC+02:00) Kaliningrad</option>
                                    <option value="3">(UTC+03:00) Kuwait, Riyadh</option>
                                    <option value="3">(UTC+03:00) Nairobi</option>
                                    <option value="3">(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk</option>
                                    <option value="4">(UTC+04:00) Samara, Ulyanovsk, Saratov</option>
                                    <option value="4.5">(UTC+03:30) Tehran</option>
                                    <option value="4">(UTC+04:00) Abu Dhabi, Muscat</option>
                                    <option value="5">(UTC+04:00) Baku</option>
                                    <option value="4">(UTC+04:00) Port Louis</option>
                                    <option value="4">(UTC+04:00) Tbilisi</option>
                                    <option value="4">(UTC+04:00) Yerevan</option>
                                    <option value="4.5">(UTC+04:30) Kabul</option>
                                    <option value="5">(UTC+05:00) Ashgabat, Tashkent</option>
                                    <option value="5">(UTC+05:00) Yekaterinburg</option>
                                    <option value="5">(UTC+05:00) Islamabad, Karachi</option>
                                    <option value="5.5">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                                    <option value="5.5">(UTC+05:30) Sri Jayawardenepura</option>
                                    <option value="5.75">(UTC+05:45) Kathmandu</option>
                                    <option value="6">(UTC+06:00) Nur-Sultan (Astana)</option>
                                    <option value="6">(UTC+06:00) Dhaka</option>
                                    <option value="6.5">(UTC+06:30) Yangon (Rangoon)</option>
                                    <option value="7">(UTC+07:00) Bangkok, Hanoi, Jakarta</option>
                                    <option value="7">(UTC+07:00) Novosibirsk</option>
                                    <option value="8">(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                                    <option value="8">(UTC+08:00) Krasnoyarsk</option>
                                    <option value="8">(UTC+08:00) Kuala Lumpur, Singapore</option>
                                    <option value="8">(UTC+08:00) Perth</option>
                                    <option value="8">(UTC+08:00) Taipei</option>
                                    <option value="8">(UTC+08:00) Ulaanbaatar</option>
                                    <option value="8">(UTC+08:00) Irkutsk</option>
                                    <option value="9">(UTC+09:00) Osaka, Sapporo, Tokyo</option>
                                    <option value="9">(UTC+09:00) Seoul</option>
                                    <option value="9.5">(UTC+09:30) Adelaide</option>
                                    <option value="9.5">(UTC+09:30) Darwin</option>
                                    <option value="10">(UTC+10:00) Brisbane</option>
                                    <option value="10">(UTC+10:00) Canberra, Melbourne, Sydney</option>
                                    <option value="10">(UTC+10:00) Guam, Port Moresby</option>
                                    <option value="10">(UTC+10:00) Hobart</option>
                                    <option value="9">(UTC+09:00) Yakutsk</option>
                                    <option value="11">(UTC+11:00) Solomon Is., New Caledonia</option>
                                    <option value="11">(UTC+11:00) Vladivostok</option>
                                    <option value="12">(UTC+12:00) Auckland, Wellington</option>
                                    <option value="12">(UTC+12:00) Coordinated Universal Time+12</option>
                                    <option value="12">(UTC+12:00) Fiji</option>
                                    <option value="12">(UTC+12:00) Magadan</option>
                                    <option value="13">(UTC+12:00) Petropavlovsk-Kamchatsky - Old</option>
                                    <option value="13">(UTC+13:00) Nuku'alofa</option>
                                    <option value="13">(UTC+13:00) Samoa</option>
                                </select>
                            </div>
                            <div className="mb-3 form-check"><label className="form-check-label" for="exampleCheck1">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        I agreed to the <span>terms & conditions</span></label>
                            </div>

                            <button type="submit" className="btn btn-primary  submit">Submit</button>
                        </Form>
                       
                    </div>
                     )} 
            </Formik>
        )
    }
}