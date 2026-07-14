'use client'

import { useState, useEffect } from 'react'
import { useKonamiCode } from '@/hooks/use-konami-code'
import { X } from 'lucide-react'

export function DeveloperMode() {
  const [isActive, setIsActive] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; duration: number }>>([])
  const [score, setScore] = useState(0)

  useKonamiCode(() => {
    setIsActive(true)
    // Gerar partículas ao ativar
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 1 + 0.5,
    }))
    setParticles(newParticles)
  })

  const handleClose = () => {
    setIsActive(false)
    setScore(0)
  }

  const handlePlayGame = () => {
    // Simular um clique de jogo - cada clique aumenta o score
    setScore((prev) => prev + Math.floor(Math.random() * 100) + 50)
  }

  if (!isActive) return null

  return (
    <>
      {/* Overlay com efeito de fundo */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={handleClose}
        role="button"
        tabIndex={0}
      />

      {/* Modal Principal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative w-full max-w-md">
          {/* Partículas decorativas */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="fixed pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float ${particle.duration}s ease-out forwards`,
              }}
            >
              <div className="w-2 h-2 bg-primary rounded-full opacity-80" />
            </div>
          ))}

          {/* Card do modo desenvolvedor */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 rounded-lg p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            {/* Background animado */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Fechar */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-primary/20 rounded-md transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Título */}
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-2 animate-pulse">🚀</h2>
                <h1 className="text-2xl font-bold text-foreground mb-1">Developer Mode Activated</h1>
                <p className="text-sm text-muted-foreground">You found the easter egg! Congratulations!</p>
              </div>

              {/* Score */}
              <div className="bg-black/30 rounded-lg p-4 mb-6 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">DEVELOPER SCORE</p>
                <p className="text-3xl font-mono font-bold text-primary">{score.toString().padStart(8, '0')}</p>
              </div>

              {/* Bonus Info */}
              <div className="space-y-3 mb-6">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>✓ You&apos;ve discovered a hidden feature</p>
                  <p>✓ Your dedication is noted</p>
                  <p>✓ Achievement unlocked: Easter Egg Hunter</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePlayGame}
                  className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Earn Points
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 bg-muted text-foreground py-2 px-4 rounded-md font-medium hover:bg-muted/80 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Secret message */}
              <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
                &gt; Thanks for exploring! 🎮
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx, 0px), var(--ty, -50px)) scale(0.5);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
