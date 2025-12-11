import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "../pages/effects/ProjectSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:3000/projects");
        const data = await res.json();

        if (res.ok) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="p-4 mt-5 page-up-margin text-white">
      <h1 className="text-center my-3 theme-color">My Projects</h1>

      <div className="d-flex flex-wrap justify-content-center gap-4">

        {loading ? (
          <>
            {[1,2,3,4,5,6].map((n) => (
              <SkeletonTheme
                key={n}
                baseColor="#1f1f1f"
                highlightColor="#2e2e2e"
              >
                <ProjectSkeleton />
              </SkeletonTheme>
            ))}
          </>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              img={project.image}
              name={project.name}
              languages={project.languages}
            />
          ))
        )}

      </div>
    </div>
  );
}
