'use client'

import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders'
import { Sparkles } from 'lucide-react'
import type React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

interface LiquidMetalButtonProps {
  label?: string
  onClick?: () => void
  viewMode?: 'text' | 'icon'
  variant?: 'dark' | 'cyan' | 'white'
  /** Ancho custom en px — sobrescribe el default 210 (modo text) */
  width?: number
  /** Alto custom en px — sobrescribe el default 46 */
  height?: number
  type?: 'button' | 'submit'
  /** Si true, el metal fluye también en reposo (no solo al hover) */
  animateIdle?: boolean
}

export function LiquidMetalButton({
  label = 'Get Started',
  onClick,
  viewMode = 'text',
  variant = 'dark',
  width,
  height: heightProp,
  type = 'button',
  animateIdle = false,
}: LiquidMetalButtonProps) {
  const isCyan = variant === 'cyan'
  const isWhite = variant === 'white'
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([])
  const shaderRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shaderMount = useRef<any>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleId = useRef(0)

  const dimensions = useMemo(() => {
    if (viewMode === 'icon') {
      return { width: 46, height: 46, innerWidth: 42, innerHeight: 42, shaderWidth: 46, shaderHeight: 46 }
    }
    // Ancho + alto ajustables via props
    const w = width ?? 210
    const h = heightProp ?? 46
    return { width: w, height: h, innerWidth: w - 4, innerHeight: h - 4, shaderWidth: w, shaderHeight: h }
  }, [viewMode, width, heightProp])

  useEffect(() => {
    const styleId = 'shader-canvas-style-exploded'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 100px !important;
        }
        @keyframes ripple-animation {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    const loadShader = async () => {
      try {
        if (shaderRef.current) {
          if (shaderMount.current?.destroy) shaderMount.current.destroy()
          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: 45,
              u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0, // PERF: shader estático en reposo — solo anima al hover (libera GPU para el video del hero)
          )
        }
      } catch (error) {
        console.error('[LiquidMetalButton] Failed to load shader:', error)
      }
    }

    loadShader()
    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy()
        shaderMount.current = null
      }
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    shaderMount.current?.setSpeed?.(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
    shaderMount.current?.setSpeed?.(animateIdle ? 0.6 : 0)
  }

  // El idle depende del scroll (el Header lo activa al despegar del hero)
  useEffect(() => {
    if (!shaderMount.current?.setSpeed) return
    if (!isHovered) shaderMount.current.setSpeed(animateIdle ? 0.6 : 0)
  }, [animateIdle, isHovered])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shaderMount.current?.setSpeed) {
      shaderMount.current.setSpeed(2.4)
      setTimeout(() => {
        shaderMount.current?.setSpeed?.(isHovered ? 1 : animateIdle ? 0.6 : 0)
      }, 300)
    }
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ripple = { x, y, id: rippleId.current++ }
      setRipples((prev) => [...prev, ripple])
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id)), 600)
    }
    onClick?.()
  }

  return (
    <div
      className="relative inline-block"
      style={{
        // halo cian que aparece detrás del pill en hover
        transition: 'filter 0.4s ease',
      }}
    >
      {/* Halo detrás — cian para variant cyan, gris/blanco para dark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: -6,
          borderRadius: 100,
          background: isCyan
            ? 'radial-gradient(closest-side, rgba(10,31,61,0.35), transparent 70%)'
            : (isWhite
              ? 'radial-gradient(closest-side, rgba(255,255,255,0.55), transparent 70%)'
              : 'radial-gradient(closest-side, rgba(200,200,210,0.35), transparent 70%)'),
          filter: 'blur(14px)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
        <div
          style={{
            position: 'relative',
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease, width 0.4s ease, height 0.4s ease',
            transform: isHovered
              ? 'translateY(-3px) scale(1.06) rotateX(-6deg)'
              : 'translateY(0) scale(1) rotateX(0deg)',
            filter: isHovered
              ? (isCyan
                ? 'drop-shadow(0 8px 22px rgba(10, 31, 61, 0.55)) drop-shadow(0 3px 10px rgba(10, 31, 61, 0.35))'
                : (isWhite
                  ? 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.5)) drop-shadow(0 3px 10px rgba(255, 255, 255, 0.3))'
                  : 'drop-shadow(0 10px 26px rgba(0, 0, 0, 0.55)) drop-shadow(0 3px 10px rgba(255, 255, 255, 0.08))'))
              : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
          }}
        >
          <div
            style={{
              position: 'absolute', top: 0, left: 0,
              width: `${dimensions.width}px`, height: `${dimensions.height}px`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, gap 0.4s ease',
              transform: 'translateZ(20px)',
              zIndex: 30, pointerEvents: 'none',
            }}
          >
            {viewMode === 'icon' && (
              <Sparkles
                size={16}
                style={{
                  color: '#666666',
                  filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: 'scale(1)',
                }}
              />
            )}
            {viewMode === 'text' && (
              <span
                style={{
                  fontSize: '13px',
                  color: (isCyan || isWhite) ? '#062036' : (isHovered ? '#FFFFFF' : '#B8B8B8'),
                  fontWeight: isWhite ? 800 : (isCyan ? 700 : 600),
                  fontFamily: isWhite ? 'var(--font-manrope), Manrope, system-ui, sans-serif' : undefined,
                  letterSpacing: isHovered ? '0.08em' : '0.05em',
                  textTransform: 'uppercase',
                  textShadow: (isCyan || isWhite)
                    ? '0 1px 0 rgba(255,255,255,0.35)'
                    : (isHovered
                      ? '0px 0px 10px rgba(255, 255, 255, 0.55), 0px 1px 2px rgba(0, 0, 0, 0.7)'
                      : '0px 1px 2px rgba(0, 0, 0, 0.5)'),
                  transition: 'color 0.3s ease, letter-spacing 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), text-shadow 0.3s ease',
                  transform: 'scale(1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </span>
            )}
          </div>

          <div
            style={{
              position: 'absolute', top: 0, left: 0,
              width: `${dimensions.width}px`, height: `${dimensions.height}px`,
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              transform: `translateZ(10px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: `${dimensions.innerWidth}px`, height: `${dimensions.innerHeight}px`,
                margin: '2px', borderRadius: '100px',
                background: isCyan
                  ? 'linear-gradient(180deg, #2A4A6E 0%, #0A1F3D 55%, #050E1F 100%)'
                  : (isWhite
                    ? 'linear-gradient(180deg, #FFFFFF 0%, #EDF1F7 55%, #D8DEE8 100%)'
                    : 'linear-gradient(180deg, #202020 0%, #000000 100%)'),
                boxShadow: isPressed
                  ? 'inset 0px 2px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3)'
                  : 'none',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute', top: 0, left: 0,
              width: `${dimensions.width}px`, height: `${dimensions.height}px`,
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              transform: `translateZ(0px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: `${dimensions.height}px`, width: `${dimensions.width}px`,
                borderRadius: '100px',
                boxShadow: isPressed
                  ? '0px 0px 0px 1px rgba(0, 0, 0, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)'
                  : isHovered
                    ? '0px 0px 0px 1px rgba(0, 0, 0, 0.4), 0px 12px 6px 0px rgba(0, 0, 0, 0.05), 0px 8px 5px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)'
                    : '0px 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 36px 14px 0px rgba(0, 0, 0, 0.02), 0px 20px 12px 0px rgba(0, 0, 0, 0.08), 0px 9px 9px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'rgb(0 0 0 / 0)',
              }}
            >
              <div
                ref={shaderRef}
                className="shader-container-exploded"
                style={{
                  borderRadius: '100px', overflow: 'hidden', position: 'relative',
                  width: `${dimensions.shaderWidth}px`,
                  maxWidth: `${dimensions.shaderWidth}px`,
                  height: `${dimensions.shaderHeight}px`,
                  transition: 'width 0.4s ease, height 0.4s ease',
                  // Cyan variant: bleach el shader para que el borde metálico se vea blanco (no plateado)
                  filter: isCyan ? 'brightness(2.4) saturate(0.15) contrast(0.85)' : undefined,
                  backgroundColor: isCyan ? '#ffffff' : undefined,
                }}
              />
            </div>
          </div>

          <button
            ref={buttonRef}
            type={type}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: 'absolute', top: 0, left: 0,
              width: `${dimensions.width}px`, height: `${dimensions.height}px`,
              background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none',
              zIndex: 40, transformStyle: 'preserve-3d',
              transform: 'translateZ(25px)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              overflow: 'hidden', borderRadius: '100px',
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: 'absolute', left: `${ripple.x}px`, top: `${ripple.y}px`,
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
                  pointerEvents: 'none',
                  animation: 'ripple-animation 0.6s ease-out',
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  )
}