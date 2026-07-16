import { useEffect, useCallback } from 'react'

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode(callback: () => void) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key === 'Enter' ? 'Enter' : event.key.length === 1 ? event.key.toLowerCase() : event.key

      // Não interferir com inputs
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Armazenar sequência em sessionStorage
      const sequence = JSON.parse(sessionStorage.getItem('konami-sequence') || '[]') as string[]
      sequence.push(key)

      // Manter apenas os últimos 10 pressionamentos
      if (sequence.length > KONAMI_CODE.length) {
        sequence.shift()
      }

      sessionStorage.setItem('konami-sequence', JSON.stringify(sequence))

      // Verificar se a sequência completa foi atingida
      if (sequence.length === KONAMI_CODE.length) {
        const isMatch = sequence.every((k, index) => k === KONAMI_CODE[index])
        if (isMatch) {
          callback()
          sessionStorage.setItem('konami-sequence', '[]')
        }
      }
    },
    [callback]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
