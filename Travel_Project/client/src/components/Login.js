import { Link } from 'react-router-dom';
//temporary login page until Login and Reg is up
const Login = () => {
    return (
    <div>
        <h1>Login Page</h1>
        <div>
            <Link to="/dashboard"> Login </Link>
        </div>
        </div>
    )
}

export default Login;
