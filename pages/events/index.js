import { useRouter } from 'next/router'

import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/events-search'
import { Fragment } from 'react/cjs/react.production.min'

function AllEventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage
