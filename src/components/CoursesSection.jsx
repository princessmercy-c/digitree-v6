import React from 'react'
import { COURSES, fmt } from '../utils/constants'

export default function CoursesSection({ onEnroll }) {
  return (
    <section id="courses" style={{ background:'var(--color-off-white)', padding:'var(--section-pad)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Learn with Us</div>
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">Industry-relevant programs · Prices from ₦100,000 – ₦300,000 · Earn a verifiable certificate on completion.</p>
        </div>
        <div className="grid-auto-300">
          {COURSES.map(c => (
            <article key={c.id} className="card" style={{ overflow:'hidden', cursor:'pointer' }} onClick={() => onEnroll(c.id)}>
              <div style={{ height:180, position:'relative', overflow:'hidden' }}>
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                  />
                ) : (
                  <div style={{ height:'100%', background:'linear-gradient(135deg,var(--color-primary) 0%,var(--color-dark) 100%)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem' }}>
                    {c.icon}
                  </div>
                )}
                <span style={{ position:'absolute', top:12, right:12, background:'var(--color-accent)', color:'#fff', fontSize:'0.68rem', fontWeight:700, padding:'0.22rem 0.6rem', borderRadius:20 }}>{c.badge}</span>
              </div>
              <div style={{ padding:'1.4rem' }}>
                <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'0.5rem' }}>{c.title}</h3>
                <p style={{ fontSize:'0.83rem', color:'var(--color-muted)', lineHeight:1.7, marginBottom:'1rem' }}>{c.desc}</p>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.78rem', color:'var(--color-muted)', marginBottom:'1rem' }}>
                  <span>⏱ {c.duration}</span><span>📶 {c.level}</span>
                </div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'1.1rem', fontWeight:700, color:'var(--color-primary)', marginBottom:'1rem' }}>From {fmt(c.price)}</div>
                <button className="btn btn-primary btn-block" style={{ borderRadius:10 }}>Enroll Now →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
