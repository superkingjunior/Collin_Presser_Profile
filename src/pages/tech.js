// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { center } from '../components/layout.module.css';

// Step 2: Define your component
const TechPage = () => {
  return (
    <Layout pageTitle="Tech Portfolio">
      <dl>
        <dt><b>Cat in Venice (2D Platformer) [Spring 2022]</b></dt>
        <dd>
          <StaticImage
            src='../images/cat-venice.jpg'
            alt='cat in venice example'
            placeholder="blurred"
            className={center}
          />
        </dd>
        <dd>
          <p>Designed and developed a 2D platformer in Unity as a group project in the Game Development Course I took in Copenhagen, Denmark. A <a href='https://dis.benno-lueders.de/2022SpringGames/2DPlatformer/CatInVenice/'>playable</a> WebGL version is available, as well as the GitHub <a href='https://github.com/superkingjunior/2DPlatformProject'>repository</a> for the project</p>
        </dd>
        <br/>
        <dt><b>Graphics Course Portfolio [Fall 2021]</b></dt>
        <dd>
          <StaticImage
            src='../images/graphics.png'
            alt='graphics example'
            placeholder="blurred"
            className={center}
          />
        </dd>
        <dd>
          <p>Compiled a <a href='http://cs.gettysburg.edu/~presco01/cs373/'>portfolio</a> of C++ and OpenGL based graphics assignments from my Computer Graphics course at Gettysburg College.</p>
        </dd>
        <br/>
        <dt><b>Markov Chains in Music Course Cluster [Spring 2021]</b></dt>
        <dd>
          <StaticImage
            src='../images/markov-chains.jpg'
            alt='markov chains example'
            placeholder="blurred"
            className={center}
          />
        </dd>
        <dd>
          <p>Designed a Jupyter Notebook tool to experiment with using Markov chains to procedurally generate music. The GitHub repository for it can be found <a href='https://github.com/superkingjunior/Course-Cluster-Spring-2021'>here</a>.</p>
        </dd>
        <br/>
        <dt><b>Musicology Database Project [Fall 2020]</b></dt>
        <dd>
          <StaticImage
            src='../images/musicology.jpg'
            alt='musicology example'
            placeholder="blurred"
            className={center}
          />
        </dd>
        <dd>
          <p>Collected data in an SQL database on the music we studied in my Musicology II course at Gettysburg College. Presented this data alongside my Restorative Unit final project in a <a href='https://collinp.sites.gettysburg.edu/musicology/'>website</a> built using PHP. The database portion of the site can be found <a href='https://collinp.sites.gettysburg.edu/musicology/database.php'>here</a>.</p>
        </dd>
      </dl>
    </Layout>
  )
}

export const Head = () => <title>Tech Portfolio</title>

// Step 3: Export your component
export default TechPage