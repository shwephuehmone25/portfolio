import React, { useState } from 'react';
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  const [readMoreIndex, setReadMoreIndex] = useState(null); 

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <p>{Projects.ghlink}</p>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  {readMoreIndex === i && ( 
                    <>
                      <p>{content.description}</p>
                      {content.ghlink !== "#" && !content.ghlink2 && (
                        <a href={content.ghlink} target="_blank" rel="noopener noreferrer" className="font-bold text-gray self-end">
                          View on GitHub
                        </a>
                      )}
                      {content.ghlink !== "#" && content.ghlink2 && (
                        <>
                          <a href={content.ghlink} target="_blank" rel="noopener noreferrer" className="font-bold text-gray self-end">
                            View Server on GitHub
                          </a>
                          <a href={content.ghlink2} target="_blank" rel="noopener noreferrer" className="font-bold text-gray self-end">
                            View Client on GitHub
                          </a>
                        </>
                      )}
                      {content.ghlink === "#" && !content.ghlink2 && (
                        <span>Link Not Available</span>
                      )}
                    </>
                  )}
                  <button
                    onClick={() => setReadMoreIndex(i)} 
                    className="font-bold text-gray self-end"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
