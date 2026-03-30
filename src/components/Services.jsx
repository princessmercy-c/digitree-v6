import React from 'react'
import { SERVICES } from '../utils/constants'

export default function Services() {
  return (
    <section id="services" style={{ padding:'var(--section-pad)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Everything you need to grow as a tech professional — from learning to earning.</p>
        </div>
        <div className="grid-auto-280">
          {SERVICES.map(s => (
            <div key={s.title} className="card" style={{ padding:'2rem', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--color-primary),var(--color-primary-bright))' }} />
             <div style={{ width:'100%', height:'80px', display:'flex', alignItems:'center', justifyContent:'flex-start', marginBottom:'1.25rem' }}>
  <img src={s.icon} alt={s.title} style={{ height:'100%', maxWidth:'100%', objectFit:'contain', borderRadius:'8px' }} />
</div>
              <h3 style={{ fontSize:'1.05rem', fontWeight:700, marginBottom:'0.75rem' }}>{s.title}</h3>
              <p style={{ fontSize:'0.87rem', color:'var(--color-muted)', lineHeight:1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
