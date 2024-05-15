import React, { useState } from "react";
import "./Projects.css";
import { ProjectCard, SectionTitle } from "../../components/components";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const getRandomProject = (projects) => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  return projects[randomIndex];
};

const Projects = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dummyProjects = [
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      technologies: ["React", "Node.js", "MongoDB"],
      imgUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      githubUrl: "https://github.com/example/project1",
      liveUrl: "https://project1.example.com",
      videoUrl: "https://www.youtube.com/watch?v=abcdefghijk",
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      technologies: ["React", "Node.js", "MongoDB"],
      imgUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://project2.example.com",
      videoUrl: "https://www.youtube.com/watch?v=abcdefghijk",
    },
    {
      title: "Project 3",
      description: "This is the description for Project 3.",
      technologies: ["React", "Node.js", "MongoDB"],
      imgUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      githubUrl: "https://github.com/example/project3",
      liveUrl: "https://project3.example.com",
      videoUrl: "https://www.youtube.com/watch?v=abcdefghijk",
    },
  ];

  const [randomProject, setRandomProject] = useState(
    getRandomProject(dummyProjects)
  );

  return (
    <section id="projects" className="wrapper container">
      <SectionTitle title="Featured Projects" titleNo="__" />
      <Modal opened={opened} onClose={close} size="auto" fullScreen>
        {dummyProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileInView={{ opacity: 1 }}>
            <ProjectCard
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              imgUrl={item.imgUrl}
              githubUrl={item.githubUrl}
              liveUrl={item.liveUrl}
              videoUrl={item.videoUrl}
              open={open}
            />
          </motion.div>
        ))}
      </Modal>
      <motion.div className="project-grid container">
        <motion.div
          key={randomProject.title}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <ProjectCard
            title={randomProject.title}
            description={randomProject.description}
            technologies={randomProject.technologies}
            imgUrl={randomProject.imgUrl}
            githubUrl={randomProject.githubUrl}
            liveUrl={randomProject.liveUrl}
            videoUrl={randomProject.videoUrl}
            open={open}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
