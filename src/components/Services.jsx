import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { content } from "../Content";
import 'react-vertical-timeline-component/style.min.css';

const Services = () => {
  const { services } = content;

  return (
    <section id="services">
      <div className="container mx-auto px-5 py-14">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <VerticalTimeline>
          {services.service_content.map((content, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(173, 163, 229)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(173, 163, 229)' }}
              date={content.years} 
              iconStyle={{ background: 'rgb(173, 163, 229)', color: '#fff' }}
              icon={<img src={content.logo} alt="..." className="mx-auto" />} 
            >
              <h3 className="text-2xl font-bold">{content.title}</h3>
              <p className="text-xl">
                {content.company}
              </p>
              {content.technologies && content.technologies.map((technology, index) => (
                <span key={index} className="inline-block bg-blue-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                  {technology}
                </span>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Services;
