'use client'

import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import styles from './home.module.css'

const WORK_DAYS = 20
const FOLLOW_THROUGH = 0.4
const CLINIC_REVENUE_PER_ORDER = 7
const SPIN_FRAMES = 12

const estimateMonthlyRevenue = (dailyRecommendations: number) => {
  const estimate = dailyRecommendations * WORK_DAYS * FOLLOW_THROUGH * CLINIC_REVENUE_PER_ORDER
  return Math.round(estimate / 10) * 10
}

const formatDollars = (value: number) => `$${value.toLocaleString('en-US')}`

const rollingDollars = (finalValue: number, tick: number) => {
  let digitIndex = 0
  return formatDollars(finalValue).replace(/\d/g, () => {
    const digit = (tick + digitIndex * 3) % 10
    digitIndex += 1
    return String(digit)
  })
}

export function RevenueCalculator() {
  const [dailyRecommendations, setDailyRecommendations] = useState(7)
  const [displayValue, setDisplayValue] = useState(formatDollars(estimateMonthlyRevenue(7)))
  const [spinning, setSpinning] = useState(false)
  const [settled, setSettled] = useState(true)
  const [celebration, setCelebration] = useState(0)
  const [announcement, setAnnouncement] = useState('')
  const spinTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (spinTimer.current) window.clearInterval(spinTimer.current)
    },
    [],
  )

  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const daily = Number(event.target.value)
    const finalValue = estimateMonthlyRevenue(daily)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setDailyRecommendations(daily)

    if (spinTimer.current) window.clearInterval(spinTimer.current)

    if (reducedMotion) {
      setDisplayValue(formatDollars(finalValue))
      setSpinning(false)
      setSettled(true)
      setAnnouncement(`Estimated monthly revenue ${formatDollars(finalValue)}`)
      return
    }

    let tick = 0
    setSpinning(true)
    setSettled(false)
    setAnnouncement('')
    setDisplayValue(rollingDollars(finalValue, tick))

    spinTimer.current = window.setInterval(() => {
      tick += 1
      setDisplayValue(rollingDollars(finalValue, tick))

      if (tick >= SPIN_FRAMES) {
        if (spinTimer.current) window.clearInterval(spinTimer.current)
        spinTimer.current = null
        setDisplayValue(formatDollars(finalValue))
        setSpinning(false)
        setSettled(true)
        setAnnouncement(`Estimated monthly revenue ${formatDollars(finalValue)}`)
        setCelebration((current) => current + 1)
      }
    }, 80)
  }

  const finalValue = estimateMonthlyRevenue(dailyRecommendations)

  return (
    <div className={styles.calculator} aria-labelledby="calculator-title">
      <div className={styles.calculatorIntro}>
        <h3 id="calculator-title">Sample monthly math</h3>
        <p>Illustrative clinic model. Adjust the recommendation volume.</p>
      </div>

      <div className={styles.calculatorControl}>
        <div className={styles.calculatorLabelRow}>
          <label htmlFor="home-daily-recommendations">Product recommendations per day</label>
          <output htmlFor="home-daily-recommendations">{dailyRecommendations}</output>
        </div>
        <input
          id="home-daily-recommendations"
          type="range"
          min="1"
          max="20"
          step="1"
          value={dailyRecommendations}
          onChange={update}
          aria-describedby="home-calculator-note"
        />
        <div className={styles.rangeLabels} aria-hidden="true">
          <span>1</span>
          <span>20</span>
        </div>
      </div>

      <dl className={styles.calculatorAssumptions}>
        <div>
          <dt>Patient follow-through rate</dt>
          <dd>40%</dd>
        </div>
        <div>
          <dt>Average clinic revenue per order</dt>
          <dd>$7</dd>
        </div>
      </dl>

      <div className={styles.calculatorTotal}>
        <span>
          Estimated
          <br />
          monthly revenue
        </span>
        <strong
          className={`${spinning ? styles.valueSpinning : ''} ${settled ? styles.valueSettled : ''}`}
          aria-hidden="true"
        >
          {displayValue}
        </strong>
        <span className={styles.screenReaderOnly} aria-live="polite">
          {announcement}
        </span>
        {celebration > 0 && (
          <span className={styles.confetti} key={celebration} aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} />
            ))}
          </span>
        )}
      </div>

      <p className={styles.calculatorNote} id="home-calculator-note">
        Example only. Actual results depend on visit volume, product mix, pricing, patient follow-through, shipping,
        and approved supplier terms.
      </p>
    </div>
  )
}
