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
const SortContext = createContext(null);
const SearchContext = createContext(null);
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
  const [sortSetting, sortSettingDispatch] = useReducer(sortSettingReducer, 1);
  const [searchText, setSearchText] = useState("");
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState(
    initItems()
  );

  useEffect(() => {
    setFilteredAndSortedItems([
      ...searchFilterAndSortItems(
        filteredAndSortedItems,
        typeFilterOptions,
        techFilterOptions,
        searchText,
        sortSetting
      ),
    ]);
  }, [typeFilterOptions, techFilterOptions, searchText, sortSetting]);

  return (
    <TypeFilterOptionsContext value={{ typeFilterOptions, typeFilterDispatch }}>
      <TechFilterOptionsContext
        value={{ techFilterOptions, techFilterDispatch }}
      >
        <SortContext value={{ sortSetting, sortSettingDispatch }}>
          <SearchContext value={{ searchText, setSearchText }}>
            <ExperienceItemsContext
              value={{ filteredAndSortedItems, setFilteredAndSortedItems }}
            >
              {children}
            </ExperienceItemsContext>
          </SearchContext>
        </SortContext>
      </TechFilterOptionsContext>
    </TypeFilterOptionsContext>
  );
}

// ========== filtering ==============================
// === Hooks ===
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

// === Reducers ===
function typeFilterReducer(options, action) {
  switch (action.type) {
    case "Clear all":
      return options.map(function clearAllSelectedOptions(t) {
        t.isActive = false;
        return t;
      });
    default:
      return options.map(function unselectOptionIfMatch(t) {
        if (t.name == action.option.name) {
          return action.option;
        } else {
          return t;
        }
      });
  }
  return options.map(function unselectOptionIfMatch(t) {
    if (t.name == action.option.name) {
      return action.option;
    } else {
      return t;
    }
  });
}

function techFilterReducer(options, action) {
  switch (action.type) {
    case "Clear all":
      return options.map(function clearAllSelectedOptions(t) {
        t.isActive = false;
        return t;
      });
    default:
      return options.map(function unselectOptionIfMatch(t) {
        if (t.name == action.option.name) {
          return action.option;
        } else {
          return t;
        }
      });
  }
}

// === Filter methods ===
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

// ========== Searching ==============================
// === Hooks ===
export function useSearchText() {
  const { searchText, setSearchText } = useContext(SearchContext);

  return searchText;
}

export function useSearchTextSetter() {
  const { searchText, setSearchText } = useContext(SearchContext);

  return setSearchText;
}

// === Search methods ===
function searchItems(items, searchText) {
  for (const item of items) {
    if (item.shouldShow) {
      if (item.name.toLowerCase().includes(searchText)) {
        item.shouldShow = true;
      } else {
        item.shouldShow = false;
      }
    }
  }
}

// ========== Sorting ==============================
// === Hooks ===
export function useSortSetting() {
  const { sortSetting, sortSettingDispatch } = useContext(SortContext);

  return sortSetting;
}

export function useSortSettingDispatch() {
  const { sortSetting, sortSettingDispatch } = useContext(SortContext);

  return sortSettingDispatch;
}

// === Reducers ===
function sortSettingReducer(sortSetting) {
  return sortSetting + 1 > 3 ? 1 : sortSetting + 1;
}

// === Sorting function ===
function sortItems(items, sortSetting) {
  items.sort(function sortFunction(itemA, itemB) {
    switch (sortSetting) {
      case 2:
        return compareItemsByType(itemA.item, itemB.item);
      case 3:
        return compareItemsByDate(itemA.item, itemB.item);
      default:
        return compareItemsByName(itemA.item, itemB.item);
    }
  });
}

function compareItemsByType(itemA, itemB) {
  const aType = itemA.id.includes("p") ? "project" : "course";
  const bType = itemB.id.includes("p") ? "project" : "course";

  if (aType == bType) {
    return 0;
  } else if (aType == "project" && bType == "course") {
    return -1;
  } else {
    return 1;
  }
}

function compareItemsByDate(itemA, itemB) {
  if (new Date(itemA.date) > new Date(itemB.date)) {
    return -1;
  } else if (new Date(itemA.date) < new Date(itemB.date)) {
    return 1;
  } else return 0;
}

function compareItemsByName(itemA, itemB) {
  return itemA.name.localeCompare(itemB.name);
}

// ========== items ==============================
// === Hooks ===
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

// === Items functions ===
function searchFilterAndSortItems(
  filteredAndSortedItems,
  typeFilterOptions,
  techFilterOptions,
  searchText,
  sortSetting
) {
  filterItems(filteredAndSortedItems, typeFilterOptions, techFilterOptions);
  sortItems(filteredAndSortedItems, sortSetting);
  searchItems(filteredAndSortedItems, searchText);

  return filteredAndSortedItems;
}

// ========== Initialiser functions ==============================
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
