import { countDown } from './countDown.js'
import { navBar } from './navbar.js'
import { competitions } from '../data/competitions.js'
import './components/competitionCard.js'

document.addEventListener('DOMContentLoaded', () => {
  countDown()
  navBar()

  const container = document.getElementById('content')

  if (container) {
    competitions.forEach((lomba) => {
      const cardElement = document.createElement('competition-card')
      cardElement.data = lomba
      container.appendChild(cardElement)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    container.querySelectorAll('competition-card').forEach((card) => {
      observer.observe(card)
    })
  } else {
    console.error(
      "Elemen dengan ID 'content' tidak ditemukan. Pastikan ID di HTML sudah benar.",
    )
  }
})
