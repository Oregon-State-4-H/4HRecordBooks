# Software Development Process
Last Updated: 12/3/2023

## Principles
To facilitate a smooth development cycle, the following section outlines principles this team has decided to enforce to create a stable development environment.

### Communication
- Asynchronous messages, including text messages, teams, messages, and emails should be responded to within 24 hours of sending.
- For quick checks and updates, the team uses text messaging or teams messages to facilitate conversation.
- For more important topics or communication with our TA, email is to be used adhering to proper structures.
- Team meetings are conducted over zoom or similar video chatting platforms.

### Tasks/Issues/Work
- The team will use the Jira Kanban board to facilitate the status and creation of issues.
- Project section owners are responsible for continuing to update their backlog, keeping 1-2 weeks worth of work in the backlog.
- Issues are organized under corresponding epics.
- Large issues should be divided into smaller subtasks.

### Git
- When working on an isolated feature set a new branch on the Git Repository should be created and named using the following format “JRA-ISSUE#-branch-description”
- Commits should be made frequently, and should only contain code for isolated issues. 
- The main repository branch should always be compatible and safe at any moment in time. To merge a feature branch into Main, a poll request must be made and another member of the team should review incoming changes.
- Pull Requests are to be reviewed by the other team members before it is merged. 

## Process
The following processes have been debated and agreed-upon by all members of the project team. Adhering to the process ensures that the team is on the same page about project statuses, CI/CD scripts can run accurately, and proper measures are taken to better the success of the project.

### Lifecycle of an Issue
Any given issue can have one of seven statuses: new issue, deferred, blocked, ready, in progress, ready for review, and done. The meaning of each status is defined below.

- New issue – Default status of a newly created issue.
- Deferred – Issues that will be worked on later in time, but are currently not ready to be started.
- Blocked - Issues that cannot continue being worked on because another dependency has not yet finished.
- Ready - The issue is ready to be worked on, but has not yet been assigned or started.
- In progress – The issue is actively being worked on by a member of the team. 
- Ready for review – A solution for the issue has been made, and the solution is ready to be reviewed by another team member or in a code review.
- Done - The issue has been resolved, and the code fix has been merged into the Main git branch.

**Note:** Any given team member should not have more than one or two issues marked as in progress.

### CI/CD
Automated testing scripts should be created for different features of the product to ensure that core functionality has not been broken due to recent code changes. Automated unit tests should be run on local machines before pushing to a Git repository. A branch must pass all CI tests before being merged into Main. Any automated CD tools should be deployed from the main branch.

## Roles
Dedicated roles have been assigned to each team member. The following dictates the responsibility of a given role and who is assigned to that role. If seen as appropriate, team roles may change throughout the project to give team members a wider range of responsibilities. 

### Project Manager
**Assignee:** Byron Ojua-Nice

**Description:** The project manager is responsible for overseeing the development process of the project. The PM is responsible for leading team meetings and is the primary point of communication with the TA and the project partner. The PM is also responsible for enforcing team policies and managing project workspace.

### Data Engineer
**Assignee:** Byron Ojua-Nice

**Description:** The Data engineer is primarily responsible for managing and overseeing the application database. It is the responsibility of the Data manager to create database schemes, document usages of the database, and create an API to access the database. 

### Frontend/Application Designer
**Assignee:** Michelle Nguyen

**Description:** The frontend/application designer is responsible for creating the user interface of the application and interfacing with the application backend.
### Backend
**Assignee:** Javier Garcia Ramirez

**Description:** The backend designer is responsible for interfacing the front end with the database and serving up application pages. The backend developer is responsible for maintaining security across the application by limiting the scope of access for users. Finally, the backend developer is also responsible for receiving/responding to requests using authentication, HTTP, and fetch/other protocols.

## Tooling
| Type | Tool |
| ------------- | ------------- |
| Version Control | GitHub |
| Project Management | Jira |
| Documentation | Internal project documentation will be written in README. Public documentation will be presented in another form (undecided as of yet), such as a Wiki. |
| Test Framework | Playwright |
| Linting and Formatting | Prettier |
| CI/CD | GitHub Actions |
| IDE | Visual Studio Code |
| Graphic Design | Figma |
| Others | Potentially Docker |

## Definition of Done (DoD)
A task can be considered as done once it meets the following criteria: 

- Acceptance criteria are validated
- A Pull Request has been submitted/approved
- Changes are merged (to main branch)
- Unit, integration, and smoke tests are successful
- Changes are implemented in all components
- No regressions
- Documentation is updated, incl. deployment instructions if any
- Release notes are updated
- Breaking changes are evaluated/avoided
- A demo is prepared for stakeholders.

## Release Cycle
Below outlines the release guidelines and process for the application.

- Automatically deploy to staging every merge to main branch
- Use semantic versioning major.minor.patch
  - Increment the minor version for new features
  - Increment the patch version for bug fixes
  - Increment the major version for breaking API changes

Every formal release should have a unique version identifier. Patch numbers should be automatically incremented if no other build version change is made. Until the API is stable, major should be 0. 

## Environments
| Environment | Infrastructure | Deployment | Usages | Monitoring |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| Production | **Undecided**, attempting to find hosting on OSU servers. | Release | Public release and publishing. | **Undecided** |
| Staging | Render | Pull Request | New unreleased features and integration tests| **Undecided** |
| Developer | Local machine | Commit | Development and unit tests| **Undecided** |

