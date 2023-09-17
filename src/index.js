const express = require("express");

const projects = [
  {
    id: 1,
    name: "First Project",
    description: "project description",
    author: "Enrico",
  },
  {
    id: 2,
    name: "2 Project",
    description: "project description",
    author: "Enrico",
  },
];

const app = express();

const router = express.Router();

router.get("/projects", (request, response) => {
  const { id } = request.query;

  if (!id) {
    return response.status(200).send(projects);
  }

  const projectsById = projects.filter((project) => project.id == id);

  if (projectsById.length > 0) {
    return response.status(200).send(projectsById);
  }

  return response.status(500).send({ error: "Project not found" });
});

app.use(router);

app.listen(8080, () => console.log("Server started at port 8080"));
