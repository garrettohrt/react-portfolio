import "./steven.css";
import React from "react";

function Project() {
    const projects = [
        {
            title: "Supersearch",
            img: "https://github.com/llyruss/SuperSearch/raw/main/Assets/css/results-screenshot.png",
            description: "A search bar for heroes",
            technologies: ["HTML", "CSS", "JavaScript", "Bulma"],
            repo: "https://github.com/llyruss/SuperSearch",
            deployed: "https://llyruss.github.io/SuperSearch"
        },
        {
            title: "What's Cookin",
            img: "https://github.com/llyruss/What-s-Cookin/raw/main/public/images/firstpagecooking.png",
            description: "An online recipe book",
            technologies: ["JavaScript", "sequelize", "Handlebars.js", "Express.js", "Node.js"],
            repo: "https://github.com/llyruss/What-s-Cookin",
            deployed: "https://whatscookin.herokuapp.com/"
        }
    ]

    const styles = {
        headerCat: {
            backgroundColor: "red", 
            color: "blue", 
            fontFamily: "cursive"
        }
    }

    return (
        <div>
            {projects.map(project => {
                return <div>
                    <h2 className="tacocat">{project.title}</h2>
                    <img src={project.img} alt="im a cat" />
                    <ul>
                        {project.technologies.map(technology => {
                            return <li>{technology}</li>
                        })}
                    </ul>
                    <ul>
                        <li>{project.description}</li>
                        <li>
                            <a href={project.repo}>Github Repo</a>
                        </li>
                        <li>
                            <a href={project.deployed}>Deployed Page</a>
                        </li>

                    </ul>
                </div>
            })}
        </div>
    )
}


export default Project