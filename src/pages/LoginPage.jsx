import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <main className='login-page'>
      <div className='login-page__glow login-page__glow--left' aria-hidden='true' />
      <div className='login-page__glow login-page__glow--right' aria-hidden='true' />

      <section className='login-shell'>
        <div className='login-card'>
          <p className='login-card__eyebrow'>Member Sign In</p>
          <h1 className='login-card__title'>Welcome back</h1>
          <p className='login-card__copy'>
            Log in to post tasks, manage projects, and connect with technical freelancers.
          </p>

          <form className='login-card__form'>
            <label className='login-card__field'>
              <span>Email Address</span>
              <input type='email' name='email' placeholder='you@example.com' />
            </label>

            <label className='login-card__field'>
              <span>Password</span>
              <input type='password' name='password' placeholder='Enter your password' />
            </label>

            <div className='login-card__meta'>
              <label className='login-card__checkbox'>
                <input type='checkbox' name='remember' />
                <span>Remember me</span>
              </label>
              <a href='#'>Forgot password?</a>
            </div>

            <button type='submit' className='login-card__submit'>
              Sign In
            </button>
          </form>

          <div className='login-card__footer'>
            <span>New to hackAssist?</span>
            <a href='#'>Create account</a>
          </div>
        </div>
      </section>

      <Link to='/' className='login-page__back'>
        Back to landing page
      </Link>
    </main>
  );
}

export default LoginPage;
