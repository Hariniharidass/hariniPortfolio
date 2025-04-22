import React from 'react'
import invite from '../assets/images/Duck-form.png'
import '../components/projectCard.css'
/**
 *
 * Create atleast 3 components, these components will represent your previous projects. Each component will include these props:

Name

Screenshot

Github repo

Tech used

A short write-up

What the project does

What you learned

Your role (if it was collaborative)

Challenges you solved
 */
function projectCard() {
  return (
      <div className='project-container'>
          <h2 className='project-title'>Name</h2>
          <img className='project-image' src={invite} alt="project" />
          <h4 className='project-repo'>Github repo</h4>
          <h5 className='project-tech'>TechUsed</h5>
          <p className='project-detail'>Description</p>

       {/*    <h2>{Name}</h2>
          <img src={Screenshot} alt="project" />
          <h4>{GithubRepo}</h4>
          <h5>{TechUsed}</h5>
          <p>{Description }</p> */}
    </div>
  )
}

export default projectCard
