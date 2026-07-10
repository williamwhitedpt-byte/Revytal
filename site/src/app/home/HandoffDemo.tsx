'use client'

import { useState, type KeyboardEvent } from 'react'
import styles from './home.module.css'

const steps = [
  {
    id: 'select',
    number: '01',
    title: 'Select exact item',
    copy: 'The PT chooses the product and size that match the recommendation.',
    image: '/assets/home/clinic-select.webp',
    alt: 'A physical therapist selecting a hinged knee brace from a clinic-branded Revytal product list on a tablet.',
  },
  {
    id: 'scan',
    number: '02',
    title: 'Scan in clinic',
    copy: 'A QR code opens that exact item on the clinic-branded purchase page.',
    image: '/assets/home/clinic-scan.webp',
    alt: 'A patient scanning a QR code for the selected hinged knee brace in the clinic.',
  },
  {
    id: 'confirm',
    number: '03',
    title: 'Clinic sees it',
    copy: 'The clinic can see the order without stocking, packing, or shipping the item.',
    image: '/assets/home/clinic-confirm.webp',
    alt: 'A clinic dashboard showing an order confirmation for a hinged knee brace.',
  },
] as const

export function HandoffDemo() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeStep = steps[activeIndex]

  const chooseStep = (index: number) => {
    setActiveIndex(index)
  }

  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyTargets: Record<string, number> = {
      ArrowRight: (index + 1) % steps.length,
      ArrowLeft: (index - 1 + steps.length) % steps.length,
      Home: 0,
      End: steps.length - 1,
    }
    const nextIndex = keyTargets[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    chooseStep(nextIndex)
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]')
    tabs?.[nextIndex]?.focus()
  }

  return (
    <div className={styles.handoffDemo}>
      <div className={styles.stepList} role="tablist" aria-label="Revytal handoff steps">
        {steps.map((step, index) => {
          const active = index === activeIndex
          return (
            <button
              key={step.id}
              className={active ? styles.stepActive : undefined}
              type="button"
              id={`handoff-tab-${step.id}`}
              role="tab"
              aria-selected={active}
              aria-controls="handoff-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => chooseStep(index)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <span className={styles.stepText}>
                <strong>{step.title}</strong>
                <small>{step.copy}</small>
              </span>
              <span className={styles.stepArrow} aria-hidden="true">
                →
              </span>
            </button>
          )
        })}
      </div>

      <figure
        className={styles.handoffStage}
        id="handoff-panel"
        key={activeStep.id}
        role="tabpanel"
        aria-labelledby={`handoff-tab-${activeStep.id}`}
        tabIndex={0}
      >
        <img src={activeStep.image} alt={activeStep.alt} width="900" height="1125" />
        <figcaption>
          <span>{activeStep.number}</span>
          <div>
            <strong>{activeStep.title}</strong>
            <p>{activeStep.copy}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
