import { Component } from "./base-component";
import { AutoBind } from "../decorators/autobind";
import { Project, ProjectStatus } from "../models/project";
import { DragTarget } from "../models/drag-drop";
import { state } from "../state/project-state";
import { ProjectItem } from "./project-item";

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.configure();
    this.renderContent();
  }

  @AutoBind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    const id = event.dataTransfer!.getData("text/plain");
    state.moveProject(
      id,
      this.type === "active" ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED
    );
  }

  @AutoBind
  dragLeaveHanlder(_event: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-lists`)!;
    listEl.innerHTML = "";
    this.assignedProjects.map(
      (x) => new ProjectItem(`${this.type}-projects-lists`, x)
    );
  }

  renderContent() {
    const listId = `${this.type}-projects-lists`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  configure(): void {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHanlder);
    this.element.addEventListener("drop", this.dropHandler);

    state.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.ACTIVE;
        }

        return project.status === ProjectStatus.FINISHED;
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }
}
