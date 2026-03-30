import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './hooks/useStore';
import { FEATURED_GADGET } from './utils/constants';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

import Navbar  from './components/Navbar'
import Footer  from './components/Footer'

import Hero            from './components/Hero'
import About           from './components/About'
import Services        from './components/Services'
import CoursesSection  from './components/CoursesSection'
import FeaturedProduct from './components/FeaturedProduct'
import RequestGadget   from './components/RequestGadget'
import MeetTheTeam     from './components/MeetTheTeam'
import BlogSection     from './components/BlogSection'
import Testimonials    from './components/Testimonials'

import CartSidebar from './components/CartSidebar'
import PaymentPage from './components/PaymentPage'
import AuthModal   from './components/AuthModal'
import EnrollModal from './components/EnrollModal'
import Dashboard   from './components/Dashboard'
import CertOverlay from './components/CertOverlay'

export default function App() {
  const store = useStore()
  const [user, setUser] = useState(null)
  const [cartOpen,    setCartOpen]    = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [authOpen,    setAuthOpen]    = useState(false)
  const [authMode,    setAuthMode]    = useState('login')
  const [dashOpen,    setDashOpen]    = useState(false)
  const [enrollingId, setEnrollingId] = useState(null)
  const [certData,    setCertData]    = useState({ open: false, courseId: null, studentName: '' })

  /* ── Auth: listen to Firebase auth state ── */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        store.setCurrentUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  /* ── Helpers ── */
  const openAuth = (mode = 'login') => { setAuthMode(mode); setAuthOpen(true); }

  const openEnroll = (courseId) => {
    if (!user) { openAuth('login'); return }
    setEnrollingId(courseId)
  }

  const handleAddFeaturedToCart = () => {
    store.addToCart(
      FEATURED_GADGET.id,
      FEATURED_GADGET.name,
      FEATURED_GADGET.price,
      FEATURED_GADGET.emoji
    )
    setCartOpen(true)
  }

  const handleCheckout = () => {
    if (!user) { openAuth('login'); return }
    setCartOpen(false); setPaymentOpen(true)
  }
  const handlePaymentBack = () => { setPaymentOpen(false); setCartOpen(true) }
  const handlePaymentDone = () => { store.clearCart(); setPaymentOpen(false) }

  const handleOpenDash = () => {
    if (!user) { openAuth('login'); return }
    setDashOpen(true)
  }

  const handleShowCert = (courseId) => {
    const mc = store.myCourses.find(m => m.courseId === courseId)
    setCertData({
      open:        true,
      courseId,
      studentName: mc?.name || store.currentUser?.name || 'Student',
    })
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  /* ── Home page content ── */
  const HomePage = (
    <main>
      <Hero
        onExploreCourses={() => scrollTo('courses')}
        onShopGadgets   ={() => scrollTo('gadgets')}
      />
      <About />
      <Services />
      <CoursesSection onEnroll={openEnroll} />
      <FeaturedProduct onAddToCart={handleAddFeaturedToCart} />
      <RequestGadget />
      <MeetTheTeam />
      <BlogSection />
      <Testimonials />
    </main>
  );

  return (
    <>
      <Navbar
        cartQty     = {store.cartQty}
        currentUser = {user}
        onOpenCart  = {() => setCartOpen(true)}
        onOpenLogin = {() => openAuth('login')}
        onOpenSignUp = {() => openAuth('register')}
        onOpenDash  = {handleOpenDash}
      />

      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/courses" element={
          <main><CoursesSection onEnroll={openEnroll} /></main>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      {/* Cart sidebar */}
      <CartSidebar
        open        = {cartOpen}
        onClose     = {() => setCartOpen(false)}
        cartItems   = {store.cartItems}
        cartTotal   = {store.cartTotal}
        onChangeQty = {store.changeQty}
        onRemove    = {store.removeItem}
        onCheckout  = {handleCheckout}
      />

      {/* Payment page */}
      {paymentOpen && (
        <PaymentPage
          cartItems = {store.cartItems}
          cartTotal = {store.cartTotal}
          onBack    = {handlePaymentBack}
          onDone    = {handlePaymentDone}
        />
      )}

      {/* Auth modal */}
      <AuthModal
        open          = {authOpen}
        initialMode   = {authMode}
        onClose       = {() => setAuthOpen(false)}
        onLogin       = {store.loginUser}
        onRegister    = {store.registerUser}
        onGoogleLogin = {store.loginWithGoogle}
      />

      {/* Course enroll modal */}
      <EnrollModal
        open        = {!!enrollingId}
        courseId    = {enrollingId}
        currentUser = {store.currentUser}
        onClose     = {() => setEnrollingId(null)}
        onEnrolled  = {store.enrollCourse}
      />

      {/* Student dashboard */}
      {dashOpen && (
        <Dashboard
          currentUser = {store.currentUser}
          myCourses   = {store.myCourses}
          onClose     = {() => setDashOpen(false)}
          onMarkDone  = {store.markComplete}
          onViewCert  = {handleShowCert}
        />
      )}

      {/* Certificate */}
      <CertOverlay
        open        = {certData.open}
        courseId    = {certData.courseId}
        studentName = {certData.studentName}
        onClose     = {() => setCertData({ open: false, courseId: null, studentName: '' })}
      />
    </>
  )
}
