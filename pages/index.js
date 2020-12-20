import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.scss'

export default function Home() {
  const [number, setNumber] = useState('')
  const [feature, setFeature] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(async () => {
    const result = await processing()
    setAnswer(`${result}`)
  })

  const processing = () => {
    if (number !== '' && feature !== '') {
      if (feature == 'f') {
        return isFibonacci(number)
      } else if (feature == 'p') {
        return isPrime(number)
      } else {
        return '-'
      }
    } else {
      return '-'
    }
  }

  const isFibonacci = (n) => {
    if (isSquare(5 * (n * n) - 4) || isSquare(5 * (n * n) + 4)) {
      return true
    } else { return false }
  }

  const isPrime = (n) => {
    for (let i = 2; i < n; i++)
      if (n % i === 0) return false
    return n > 1
  }

  const isSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0
  }

  return (
    <>
      <Head>
        <title>Refinitiv Pre-Test : Section 2 - Question 1</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.col_input}>
          <input type="number" name="checkingNumber" id="checkingNumber" onChange={e => setNumber((e.target.value < 0) ? 1 : e.target.value)} value={number} />
        </div>
        <div className={styles.col_feature}>
          <select onChange={e => setFeature(e.target.value)}>
            <option value=""> - Please Select - </option>
            <option value="f">isFibonacci</option>
            <option value="p">isPrime</option>
          </select>
        </div>
        <div className={styles.col_result}>{answer}</div>
      </section>
    </>
  )
}