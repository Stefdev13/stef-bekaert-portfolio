import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { COURSES } from "../constants/course-constants.js";
import { PROJECTS } from "../constants/projects-constants.js";
import { TECHNOLOGYLIST } from "../constants/technologies-constants.js";

const TypeFilterOptionsContext = createContext(null);
const TechFilterOptionsContext = createContext(null);
const ExperienceItemsContext = createContext(null);

function ExperienceListProvider({ children }) {
  const [typeFilterOptions, typeFilterDispatch] = useReducer(
    typeFilterReducer,
    types
  );
  const [techFilterOptions, techFilterDispatch] = useReducer(
    techFilterReducer,
    getTechFilterOptions()
  );
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState(
    initItems()
  );

  useEffect(() => {
    setFilteredAndSortedItems([
      ...searchFilterAndSortItems(
        filteredAndSortedItems,
        typeFilterOptions,
        techFilterOptions
      ),
    ]);
  }, [typeFilterOptions, techFilterOptions]);

  return (
    <TypeFilterOptionsContext value={{ typeFilterOptions, typeFilterDispatch }}>
      <TechFilterOptionsContext
        value={{ techFilterOptions, techFilterDispatch }}
      >
        <ExperienceItemsContext
          value={{ filteredAndSortedItems, setFilteredAndSortedItems }}
        >
          {children}
        </ExperienceItemsContext>
      </TechFilterOptionsContext>
    </TypeFilterOptionsContext>
  );
}

// === Type filter ===
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

// === Tech filter ===
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

// === Filtered and sorted items ===
export function useFilteredAndSortedItems() {
  const { filteredAndSortedItems, setFilteredAndSortedItems } = useContext(
    ExperienceItemsContext
  );

  return filteredAndSortedItems;
}

export function useFilteredAndSortedItemsSetter() {
  const { filteredAndSortedItems, setFilteredAndSortedItems } = useContext(
    ExperienceItemsContext
  );

  return setFilteredAndSortedItems;
}

// === Functions ===
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

function searchFilterAndSortItems(
  filteredAndSortedItems,
  typeFilterOptions,
  techFilterOptions
) {
  //   console.log(filteredAndSortedItems);
  filterItems(filteredAndSortedItems, typeFilterOptions, techFilterOptions);
  //   console.log(filteredAndSortedItems);

  return filteredAndSortedItems;
}

function filterItems(items, typeFilters, techFilters) {
  //Turn these filter lists into names of active filters
  const activeTypeFilterNames = typeFilters
    .filter(function reduceTypeFiltersToActive(filter) {
      return filter.isActive;
    })
    .map(function reduceTypeFiltersToNames(filter) {
      return filter.name;
    });
  const activeTechFilterNames = techFilters
    .filter(function reduceTechFiltersToActive(filter) {
      return filter.isActive;
    })
    .map(function reduceTechFiltersToNames(filter) {
      return filter.name;
    });

  if (activeTypeFilterNames.length > 0 || activeTechFilterNames.length > 0) {
    const matchesByType = [];
    const matchesByTech = [];

    //Filter based on type, add the id's to matchesByType
    for (const item of items) {
      if (activeTypeFilterNames.includes(item.type)) {
        matchesByType.push(item.id);
      }
    }

    //Filter based on technologies, add the id's to matchesByTech
    for (const item of items) {
      for (const technology of item.technologyList) {
        if (activeTechFilterNames.includes(technology.name)) {
          matchesByTech.push(item.id);
          break;
        }
      }
    }

    //Combine the matchesByType and matchesByTech to keep only the items with their id in both
    for (const item of items) {
      if (
        activeTypeFilterNames.length > 0 &&
        activeTechFilterNames.length > 0
      ) {
        item.shouldShow =
          matchesByType.includes(item.id) && matchesByTech.includes(item.id);
      } else if (activeTypeFilterNames.length > 0) {
        item.shouldShow = matchesByType.includes(item.id);
      } else if (activeTechFilterNames.length > 0) {
        item.shouldShow = matchesByTech.includes(item.id);
      }
    }
  } else {
    //If no filters are active, then all the items should be displayed
    items.map(function setAllItemsToShow(item) {
      item.shouldShow = true;
    });
  }
}

// === Initialiser (functions) ===
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

function initItems() {
  const result = [];

  for (const course of COURSES) {
    result.push({
      id: course.id,
      name: course.name,
      type: "Course",
      shouldShow: true,
      technologyList: course.technologyList,
      item: course,
    });
  }

  for (const project of PROJECTS) {
    let mergedChipLists = [];
    project.chipLists.forEach((chipList) => {
      chipList.chips.forEach((technology) => {
        //Check if the technology is already in the result (by checking the names), so we can avoid duplicates
        if (
          !mergedChipLists
            .map((technology) => technology.name)
            .includes(technology.name)
        ) {
          mergedChipLists.push(technology);
        }
      });
    });

    result.push({
      id: project.id,
      name: project.name,
      type: "Project",
      shouldShow: true,
      technologyList: mergedChipLists,
      item: project,
    });
  }

  return result;
}

export default ExperienceListProvider;
