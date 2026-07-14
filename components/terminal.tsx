'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { profile, skills, experiences, projects } from '@/lib/portfolio-data'

interface TerminalLine {
  type: 'command' | 'output'
  content: string
}

const COMMANDS = {
  help: () => `Available commands:
  about     - Show about information
  whoami    - Display who I am
  skills    - List all skills
  projects  - Show projects
  contact   - Get contact information
  secret    - Unlock a hidden secret
  clear     - Clear terminal
  help      - Show this help message`,

  about: () => `${profile.name} - ${profile.title}
${profile.tagline}
Location: ${profile.location}`,

  whoami: () => `$ whoami
${profile.name}
${profile.title}`,

  skills: () => {
    const skillsList = skills
      .map(({ category, items }) => `\n${category}:\n  ${items.join(', ')}`)
      .join('')
    return skillsList
  },

  projects: () => {
    const projectsList = projects
      .map((p) => `\n→ ${p.title}\n  ${p.description}`)
      .join('\n')
    return projectsList
  },

  contact: () => `Email: ${profile.email}
GitHub: ${profile.socials.github}
LinkedIn: ${profile.socials.linkedin}
Twitter: ${profile.socials.twitter}`,

  secret: () => `🔍 You found a hidden secret!
  
Try this keyboard combination to unlock Developer Mode:
↑ ↑ ↓ ↓ ← → ← → B A

(Classic Konami Code - use arrow keys + B + A)
Good luck! 🚀`,

  clear: () => 'CLEAR_TERMINAL',
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to my portfolio terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    if (!trimmed) {
      setInput('')
      return
    }

    setLines((prev) => [...prev, { type: 'command', content: `$ ${cmd}` }])
    setHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)
    setInput('')

    // Execute command
    const command = trimmed as keyof typeof COMMANDS
    if (command in COMMANDS) {
      const result = COMMANDS[command]()
      if (result !== 'CLEAR_TERMINAL') {
        setLines((prev) => [...prev, { type: 'output', content: result }])
      } else {
        setLines([])
      }
    } else {
      setLines((prev) => [
        ...prev,
        { type: 'output', content: `Command not found: ${trimmed}. Type "help" for available commands.` },
      ])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <section id="terminal" aria-label="Interactive terminal" className="scroll-mt-24">
      <Reveal>
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border border-border bg-input p-4">
            <div
              ref={terminalRef}
              className="max-h-96 overflow-y-auto font-mono text-sm leading-relaxed text-foreground"
            >
              {lines.map((line, idx) => (
                <div key={idx} className={line.type === 'command' ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                  {line.content.split('\n').map((text, i) => (
                    <div key={i}>{text || '\u00A0'}</div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
              <span className="text-primary font-semibold">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                autoFocus
              />
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            💡 Try typing <code className="bg-muted px-1 py-0.5 rounded">help</code> to explore all commands
          </p>
        </div>
      </Reveal>
    </section>
  )
}
