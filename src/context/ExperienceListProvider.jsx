import { createContext, useContext, useReducer } from "react";
import { COURSES } from "../constants/course-constants.js";
import { PROJECTS } from "../constants/projects-constants.js";
import { TECHNOLOGYLIST } from "../constants/technologies-constants.js";

const TypeFilterOptionsContext = createContext(null);
const TechFilterOptionsContext = createContext(null);

function ExperienceListProvider({ children }) {
  const [typeFilterOptions, typeFilterDispatch] = useReducer(
    typeFilterReducer,
    types
  );
  const [techFilterOptions, techFilterDispatch] = useReducer(
    techFilterReducer,
    getTechFilterOptions()
  );

  return (
    <TypeFilterOptionsContext value={{ typeFilterOptions, typeFilterDispatch }}>
      <TechFilterOptionsContext
        value={{ techFilterOptions, techFilterDispatch }}
      >
        {children}
      </TechFilterOptionsContext>
    </TypeFilterOptionsContext>
  );
}

export function useTypeFilterOptions() {
  const { typeFilterOptions, typeFilterDispatch } = useContext(
    TypeFilterOptionsContext
  );

  return typeFilterOptions;
}

export function useTypeFilterOptionsDispatch() {
  const { typeFilterOptions, typeFilterDispatch } = useContext(
    TypeFilterOptionsContext
  );

  return typeFilterDispatch;
}

export function useTechFilterOptions() {
  const { techFilterOptions, techFilterDispatch } = useContext(
    TechFilterOptionsContext
  );

  return techFilterOptions;
}

export function useTechFilterOptionsDispatch() {
  const { techFilterOptions, techFilterDispatch } = useContext(
    TechFilterOptionsContext
  );

  return techFilterDispatch;
}

function typeFilterReducer(options, action) {
  return options.map(function unselectOptionIfMatch(t) {
    if (t.name == action.option.name) {
      return action.option;
    } else {
      return t;
    }
  });
}

function techFilterReducer(options, action) {
  return options.map(function unselectOptionIfMatch(t) {
    if (t.name == action.option.name) {
      return action.option;
    } else {
      return t;
    }
  });
}

function getTechFilterOptions() {
  const result = [];

  for (const technology of TECHNOLOGYLIST) {
    result.push({
      name: technology.name,
      type: "Technology",
      icon: technology.icon,
      isActive: false,
    });
  }

  return result;
}

const types = [
  { name: "Course", type: "Type", isActive: false },
  { name: "Project", type: "Type", isActive: false },
];

export default ExperienceListProvider;
