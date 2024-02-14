'use client'
import { useState } from 'react';
import styles from '../auth.module.css'

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={styles.reducedPaddingMain}>
      <div className={styles.form}>
        <h1 className={styles.formTitle}>Sign Up</h1>
        <input className={styles.formInput}
          type='text'
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        
        <input className={styles.formInput}
          type='text'
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />

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

        <p className={styles.formText}>Already have an account? <a href="/auth/sign-in">Sign In</a></p>
      </div>
    </main>
  );
};

export default SignUp;