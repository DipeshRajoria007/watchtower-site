import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Watchtower — Autonomous Engineering Ops for macOS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0A0A0B',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94,234,212,0.08) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,149,107,0.06) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              border: '2px solid rgba(94,234,212,0.5)',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                backgroundColor: 'rgba(94,234,212,0.3)',
                display: 'flex',
              }}
            />
          </div>
          <span
            style={{
              color: '#E8E8ED',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              fontFamily: 'monospace',
            }}
          >
            WATCHTOWER
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 600,
            color: '#E8E8ED',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Autonomous engineering ops</span>
          <span>with visible control.</span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '20px',
            color: '#6B6B76',
            lineHeight: 1.6,
            maxWidth: '700px',
            marginBottom: '40px',
          }}
        >
          Slack-native intake. Local execution. Every run observable on a Mac your team controls.
        </p>

        {/* Workflow tags */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {['PR_REVIEW', 'BUG_FIX', 'AUTOPILOT', 'ASSIST'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                backgroundColor: 'rgba(94,234,212,0.06)',
                border: '1px solid rgba(94,234,212,0.15)',
                color: '#5EEAD4',
                fontSize: '13px',
                fontFamily: 'monospace',
                display: 'flex',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#5EEAD4',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: '#6B6B76',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
          >
            macOS native
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
