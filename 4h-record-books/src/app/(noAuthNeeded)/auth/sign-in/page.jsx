'use client'
import { useState } from 'react';
import styles from '../auth.module.css'

const SignIn = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={styles.reducedPaddingMain}>
      <div className={styles.form}>
        <h1 className={styles.formTitle}>Sign In</h1>

        <input className={styles.formInput}
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />

        <input className={styles.formInput}
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />

        <button className={styles.formButton}>Sign Up</button>

        <p className={styles.formText}>{"Don't have an account? "}<a href="/auth/sign-up">Sign Up</a></p>
      </div>
    </main>
  );
};

export default SignIn;