// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <Layout pageTitle="Related Experience">
      <dl>
        <dt><b>Research Assistant - Cross-Disciplinary Science Institute (X-SIG) [2021]</b></dt>
        <dd>
          <p>Developed a web application for the Computer Science department. Learned full-stack development in JavaScript, MongoDB, Express.js, React.js, and Node.js.</p>
        </dd>
        <dt><b>ICPC (International Collegiate Programming Contest) [March 2021]</b></dt>
        <dd>
          <p>Collaborated on a team of three students to solve four of the contest problems.</p>
        </dd>
        <dt><b>Casual Staff - Information Technology - Gettysburg College [2017-2019]</b></dt>
        <dd>
          <p>Developed apps using the Alexa Skills Kit, including a College News app, College Photo of the Day (Instagram) app, and College Events app. Provided documentation for students interested in developing apps with the Alexa API in Eclipse.</p>
        </dd>
      </dl>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Experience</title>

// Step 3: Export your component
export default ExperiencePage