import css from './style.module.css';

const Login = () => {
    return(
        <div className={css.Login}>
            <label>Username: </label>
            <input type="text" placeholder='Enter username'/>
            <label>Password: </label>
            <input type="password" placeholder='Enter password' />
            <button>Login</button>
        </div>
    )
}

export default Login;