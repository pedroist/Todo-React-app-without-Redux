export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const getFilteredItems = (list, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return list;
    case visibilityFilters.SHOW_COMPLETED:
      return list.filter(entry => !entry.enabled);
    case visibilityFilters.SHOW_ACTIVE:
      return list.filter(entry => entry.enabled);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default getFilteredItems;
