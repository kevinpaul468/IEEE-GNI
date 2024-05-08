import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IEEE from '../assets/IEEE.png';
import computer_society from '../assets/computer_society.png'
// import women_in_engineering from '../assets/women_in_engineering.png'
import communication_society from '../assets/communication_society.png'
import circuits_and_systems_society from '../assets/circuits_and_systems_society.png'

function FutureEventTimeLine() {
  return (
    <div>
      <p>.</p>
      

...

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="25th May 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={IEEE} alt="IEEE" className='rounded-full'/>}
  >
    <h3 className="vertical-timeline-element-title">IEEE GNITC Inauguration</h3>
    <h5 className="vertical-timeline-element-subtitle">Lets kick start the IEEE GNITC student chapter</h5>
    <p>
      
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="25th May 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={computer_society} alt="computer society" className='rounded-full'/>}
  >
    <h3 className="vertical-timeline-element-title">National level online project competition</h3>
    <h5 className="vertical-timeline-element-subtitle">build, code ,present</h5>
    <p>
      
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
    </div>
  )
}

export default FutureEventTimeLine
