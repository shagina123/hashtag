import axios from 'axios'
export default class Api{
    static signup(user,fname,lname,uname,email,pwd,time)
{
    if(user==="fan")
    var url="https://apidev.fanconvo.com/api/v3/sign-up/fan"
    else
    url="https://apidev.fanconvo.com/api/v3/sign-up/talent"
    return axios.post(url,{ "first_name":uname, "last_name":lname, "username":uname, "email":email, "password":pwd, "timezone":time,
    "captcha": true }        )
    
}
}
