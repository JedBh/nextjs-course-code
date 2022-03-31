import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'
import { Fragment } from 'react/cjs/react.production.min'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/error-alert'

function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = +filterData[0]
  const filteredMonth = +filterData[1]

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter.</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/'>All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  })

  const date = new Date(filteredYear, filteredMonth - 1)

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ResultsTitle date={date} />
        <ErrorAlert>
          <p>No events found.</p>
        </ErrorAlert>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
