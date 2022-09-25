// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Collin Presser">
      <StaticImage
        src='../images/profile.jpg'
        alt="Collin Presser profile"
        placeholder="blurred"
        width={400}
      />
      <p>I am passionate towards my studies in both computer science and music. In the future, I would like to find a job in a technological field using the skills gained in my computer science studies. My current goal is to get a job in software engineering for after I graduate in May 2023.</p>
      <p>My focus in music is in performance on saxophone and in composition. I strive to connect my interest in music with computer science by programming tools to assist in the creation of new ideas for my compositions.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Collin Presser</title>

// Step 3: Export your component
export default IndexPage