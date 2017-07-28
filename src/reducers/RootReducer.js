import { combineReducers } from "redux";

import EducationReducer from "./EducationReducer";
import ProjectsReducer from "./ProjectsReducer";
import WorkReducer from "./WorkReducer";
import SkillsReducer from "./SkillsReducer";
import IndexReducer from "./IndexReducer";
import ContactReducer from "./ContactReducer";
import PageReducer from  "./PageReducer";

const rootReducer = combineReducers({
    education: EducationReducer,
    work: WorkReducer,
    skills: SkillsReducer,
    projects: ProjectsReducer,
    index: IndexReducer,
    contact: ContactReducer,
    curPageName: PageReducer
});

export default rootReducer;