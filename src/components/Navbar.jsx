import { auth } from '../utils/firebase';
import React, { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'
import '../styles/navbar.css'

export default function Navbar({ cartQty, currentUser, onOpenCart, onOpenLogin, onOpenSignUp, onOpenDash }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#about',    label: 'About'    },
    { href: '#services', label: 'Services' },
    { href: '#courses',  label: 'Courses'  },
    { href: '#gadgets',  label: 'Gadgets'  },
    { href: '#team',     label: 'Team'     },
    { href: '#blog',     label: 'Blog'     },
    { href: '#contact',  label: 'Contact'  },
  ]

  const close = () => setMobileOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        <a href="/" className="navbar__logo">
          <img src={logoImg} alt="Digitree Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">DIGI<span>TREE</span></span>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="navbar__link">{l.label}</a></li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__cart" onClick={onOpenCart} aria-label="Open cart">
            <i className="fas fa-shopping-cart" />
            <span>Cart</span>
            {cartQty > 0 && <span className="cart-badge">{cartQty}</span>}
          </button>

          {currentUser ? (
            <>
              <button className="btn btn-outline btn-sm" onClick={onOpenDash}>
                My Courses
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => auth.signOut()}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline btn-sm" onClick={onOpenLogin}>
                Log In
              </button>
              <button className="btn btn-primary btn-sm" onClick={onOpenSignUp}>
                Sign Up
              </button>
            </>
          )}

          <button
            className={`navbar__hamburger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
          ))}
          {currentUser ? (
            <>
              <button className="btn btn-outline btn-block" onClick={() => { close(); onOpenDash() }}>
                My Courses
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => { close(); auth.signOut() }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline btn-block" onClick={() => { close(); onOpenLogin() }}>
                Log In
              </button>
              <button className="btn btn-primary btn-block" onClick={() => { close(); onOpenSignUp() }}>
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
