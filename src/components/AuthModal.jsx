import React, { useState, useEffect } from 'react'
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export default function AuthModal({ open, initialMode, onClose, onLogin, onRegister, onGoogleLogin }) {
  const [mode,  setMode]  = useState(initialMode || 'login')
  const [form,  setForm]  = useState({ name:'', email:'', password:'' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const set = (k,v) => setForm(p => ({ ...p, [k]:v }))

  // Sync mode when modal opens with a specific initialMode
  useEffect(() => {
    if (open && initialMode) {
      setMode(initialMode);
      setError('');
      setForm({ name:'', email:'', password:'' });
    }
  }, [open, initialMode]);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      onClose();
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  }

  const handleRegister = async () => {
    if (!form.name||!form.email||!form.password) { setError('Please fill in all fields.'); return }
    if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setError('');
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      onClose();
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  }

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  }

  const switchMode = (m) => { setMode(m); setError(''); setForm({ name:'', email:'', password:'' }) }

  if (!open) return null

  return (
    <div className="modal-overlay is-open" onClick={e => e.target===e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <h2 className="modal-title">{mode==='login' ? 'Welcome Back' : 'Create Account'}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">
          <div className="form-notice">Your session is saved — you won't need to log in every time.</div>
          {error && <div className="form-error">{error}</div>}

          {mode==='register' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" value={form.name} placeholder="Your full name" autoComplete="name" onChange={e => set('name',e.target.value)} />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" value={form.email} placeholder="you@example.com" autoComplete="email" onChange={e => set('email',e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" value={form.password}
              placeholder={mode==='login' ? 'Enter your password' : 'Create a strong password'}
              autoComplete={mode==='login' ? 'current-password' : 'new-password'}
              onChange={e => set('password',e.target.value)}
              onKeyDown={e => e.key==='Enter' && (mode==='login' ? handleLogin() : handleRegister())} />
          </div>

          <button className="btn btn-primary btn-block" style={{ borderRadius:10, padding:'0.9rem' }}
            onClick={mode==='login' ? handleLogin : handleRegister}
            disabled={loading}>
            {loading ? 'Please wait...' : (mode==='login' ? 'Login to My Account' : 'Create My Account')}
          </button>

          <div className="form-divider">or continue with</div>

          <button className="btn-google" onClick={handleGoogle} disabled={loading}>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" width={20} height={20} alt="Google" />
            Sign {mode==='login' ? 'in' : 'up'} with Google
          </button>

          <div className="auth-switch">
            {mode==='login'
              ? <>Don't have an account? <a onClick={() => switchMode('register')}>Sign up free</a></>
              : <>Already have an account? <a onClick={() => switchMode('login')}>Login</a></>}
          </div>
        </div>
      </div>
    </div>
  )
}
