import React, { useEffect, useState } from 'react'
import { getProject_function } from '../../../Services/Apis';
import ProjectCard from '../../../../Items/project_card/ProjectCard';

export default function GetProjectsComp({email}) {

  useEffect(() => {
    get_projects();
    console.log("___", Project);
  }, []);

  const [Project, setProject] = useState([]);

  const get_projects = async () => {
    try {
      const { data } = await getProject_function(email);
      if (data.success) {
        console.log(data.message);
        console.log(";;;;;;;;;")
        console.log(data.projects)
        setProject(data.projects);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
   <>
   
   <div className="flex flex-wrap  space-y-2">
            {Project.length ? (
              Project.map((element, index) => {
                return (             
                  <div key={index}>
                    <ProjectCard
                      projectId={element._id}
                      creatorId={element.user}
                      title={element.title}
                      liveLink={element.live}
                      githubLink={element.github}
                      description={element.description}
                    />
                  </div>
                );
              })
            ) : (
              <div className="mt-4">
                <h1 className="text-[7vw] sm:text-[30px] md:text-[50px] lg:text-[46px]">
                  0 - Collections yet
                </h1>
              </div>
            )}
          </div>

   </>
  )
}
