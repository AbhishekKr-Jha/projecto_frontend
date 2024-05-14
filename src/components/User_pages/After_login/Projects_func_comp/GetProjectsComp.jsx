import React, { useEffect, useState } from 'react'
import { getProject_function } from '../../../Services/Apis';
import ProjectCard from '../../../../Items/project_card/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserProjects } from '../../../../Redux/projectSlice';

export default function GetProjectsComp({email}) {
  const userProjects = useSelector((state) => state.project?.userProjects);
  const dispatch=useDispatch()
  const [Project, setProject] = useState([]);

  useEffect(() => {
    const get_projects = async () => {
      // console.log(" get projects is ruiinnig")
      try {
        const { data } = await getProject_function(email);
        // console.log("waiting for peojects")
        if (data.success) {
          // console.log("the project data ",data);
          setProject(data.projects);
          dispatch(storeUserProjects(data.projects))
          // console.log(data.projects)
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    get_projects();
    console.log("___", Project);
  },[]);
 
  return (
   <>
   
   <div className="flex flex-wrap  space-y-2">
            {userProjects?.length ? (
              userProjects?.map((element, index) => {
                //changing the date format
                let dateObj = new Date(element.createdAt);
                let formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
                
                return (             
                  <div key={index}>
                    <ProjectCard
                      projectId={element._id}
                      creatorId={element.user}
                      title={element.title}
                      liveLink={element.live}
                      githubLink={element.github}
                      description={element.description}
                      createdAt={formattedDate}
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
