import { combineReducers } from "redux";

import EducationReducer from "./EducationReducer";
import ProjectsReducer from "./ProjectsReducer";
import WorkReducer from "./WorkReducer";
import SkillsReducer from "./SkillsReducer";

const rootReducer = combineReducers({
    education: EducationReducer,
    work: WorkReducer,
    skills: SkillsReducer,
    projects: ProjectsReducer
});

export default rootReducer;