// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Me">
      <ul>
        <li>Email: <a href='mailto:pressercc@gmail.com'>pressercc@gmail.com</a></li>
        <li>LinkedIn: <a href='https://www.linkedin.com/in/collin-presser/'>https://www.linkedin.com/in/collin-presser/</a></li>
      </ul>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Contact Me</title>

// Step 3: Export your component
export default ContactPage