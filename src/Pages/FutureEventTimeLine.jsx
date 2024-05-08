import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    IoLogoLinkedin,
    IoLogoYoutube,
    IoLogoGithub,
    IoLogoWhatsapp,
  } from "react-icons/io";

function FutureEventTimeLine() {
  return (
    <div>
      <p>.</p>
      

...

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2024 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoLogoGithub/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoLogoGithub />}
  >
    <h3 className="vertical-timeline-element-title">A</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoLogoGithub />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>

 
 

</VerticalTimeline>
    </div>
  )
}

export default FutureEventTimeLine
