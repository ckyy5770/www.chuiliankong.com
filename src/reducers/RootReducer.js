import { combineReducers } from "redux";

import EducationReducer from "./EducationReducer";
import ProjectsReducer from "./ProjectsReducer";
import WorkReducer from "./WorkReducer";
import SkillsReducer from "./SkillsReducer";
import IndexReducer from "./IndexReducer";
import ContactReducer from "./ContactReducer";

const rootReducer = combineReducers({
    education: EducationReducer,
    work: WorkReducer,
    skills: SkillsReducer,
    projects: ProjectsReducer,
    index: IndexReducer,
    contact: ContactReducer
});

export default rootReducer;