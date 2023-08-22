 import React from 'react';
 import {BsPersonWorkspace} from "react-icons/bs";
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 import './WorkExp.css'
 function WorkExp() {
   return (
     <>
        <div className="work" id="work experience">
            <div className="container work-exp">
                <h2 className="col-12 mt-3 mb-1 text-center">WORK EXPERIENCE</h2>
                < hr/>
                <VerticalTimeline lineColor="#1e1e2c">
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #138781' }}
                date="2020 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title">Full stack devoloper</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ pvt Ltd</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #138781' }}
                date="2020 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title">Full stack devoloper</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ pvt Ltd</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #138781' }}
                date="2020 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title">Full stack devoloper</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ pvt Ltd</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
  
                </VerticalTimeline>
            </div>
        </div>
        </>
   )
 }
 
 export default WorkExp