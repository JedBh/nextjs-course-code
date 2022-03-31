import Button from '../ui/Button'
import classes from './results-title.module.css'

function ResultsTitle(props) {
  const { date } = props
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>All Events</Button>
    </section>
  )
}

export default ResultsTitle
