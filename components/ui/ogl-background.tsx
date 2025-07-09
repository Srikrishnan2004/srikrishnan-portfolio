"use client"
import { useEffect, useRef } from "react"
import * as OGL from "ogl"

// Simple animated fragment shader (flowing blue gradient)
const frag = `
precision highp float;
uniform float uTime;
varying vec2 vUv;
void main() {
  float glow = 0.5 + 0.5 * sin(uTime + vUv.x * 10.0 + vUv.y * 10.0);
  vec3 color = mix(vec3(0.0,0.2,0.6), vec3(0.0,0.6,1.0), vUv.y + 0.1 * sin(uTime + vUv.x * 5.0));
  color += glow * 0.2;
  gl_FragColor = vec4(color, 1.0);
}
`;

const vert = `
attribute vec2 uv;
attribute vec3 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export default function OGLBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    // Create renderer
    const renderer = new OGL.Renderer({ dpr: 1.5, alpha: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    // Create and append canvas
    ref.current.appendChild(gl.canvas)
    // Fullscreen
    Object.assign(gl.canvas.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
    })
    // Scene setup
    const scene = new OGL.Transform()
    const geometry = new OGL.Plane(gl, { width: 2, height: 2 })
    const program = new OGL.Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        uTime: { value: 0 },
      },
    })
    const mesh = new OGL.Mesh(gl, { geometry, program })
    mesh.setParent(scene)
    // Animation loop
    let running = true
    let start = performance.now()
    function animate() {
      if (!running) return
      program.uniforms.uTime.value = (performance.now() - start) * 0.001
      renderer.render({ scene })
      requestAnimationFrame(animate)
    }
    animate()
    // Resize
    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", resize)
    resize()
    // Cleanup
    return () => {
      running = false
      window.removeEventListener("resize", resize)
      if (gl && gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas)
      }
    }
  }, [])

  return <div ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
} 