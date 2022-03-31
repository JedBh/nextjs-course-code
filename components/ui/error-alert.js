import { useState } from 'react'
import classes from './error-alert.module.css'

function ErrorAlert(props) {
  return <section className={classes.container}>{props.children}</section>
}

export default ErrorAlert
