import { useMemo } from "react";

import CheckboxWithLabel from "../checkboxWithLabel/CheckboxWithLabel";
import ContentTitle from "../contentTitle/ContentTitle";
import DropDownList from "../dropDownList/DropDownList";
import FavouritesButton from "../favouritesButton/FavouritesButton";
import SearchInput from "../searchInput/SearchInput";
import { FilterIcon } from "../svgs/FilterIcon";
import { GridIcon } from "../svgs/GridIcon";
import { ListIcon } from "../svgs/ListIcon";
import { SortIcon } from "../svgs/SortIcon";
import ViewToggler from "../viewToggler/ViewToggler";

enum ViewTypes {
  LIST = "list",
  GRID = "grid",
}
interface ContentHeaderProps {
  viewType: string;
  handleView: (val: ViewTypes) => void;
}
const ContentHeader = ({ viewType, handleView }: ContentHeaderProps) => {
  // this method made to handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // handle favourites method
  const handleFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const selectedIndex = viewType === ViewTypes.GRID ? 0 : 1;

  const listToggleData = useMemo(
    () => [
      {
        renderedItem: (
          <GridIcon
            fill={viewType === ViewTypes.GRID ? "#4E46B4" : "#85858C"}
          />
        ),
        onClickFunction: () => {
          handleView(ViewTypes.GRID);
        },
      },
      {
        renderedItem: (
          <ListIcon
            fill={viewType === ViewTypes.LIST ? "#4E46B4" : "#85858C"}
          />
        ),
        onClickFunction: () => {
          handleView(ViewTypes.LIST);
        },
      },
    ],
    [viewType]
  );

  const { filterList, sortList } = useMemo(
    () => ({
      filterList: [
        {
          id: 1,
          title: "filter 1",
          handler: () => {
            console.log("filter 1");
          },
        },
        {
          id: 2,
          title: "filter 2",
          handler: () => {
            console.log("filter 2");
          },
        },
        {
          id: 3,
          title: "filter 3",
          handler: () => {
            console.log("filter 3");
          },
        },
      ],
      sortList: [
        {
          id: 1,
          title: "sort 1",
          icon: <SortIcon />,
          handler: () => {
            console.log("sort 1");
          },
        },
        {
          id: 2,
          title: "sort 2",
          icon: <SortIcon />,
          handler: () => {
            console.log("sort 2");
          },
        },
        {
          id: 3,
          title: "sort 3",
          icon: <SortIcon />,
          handler: () => {
            console.log("sort 3");
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between self-start">
        <ContentTitle title="All Documents" subTitle="1,983 documents" />
        <div className="flex items-center gap-6">
          <SearchInput onChange={handleSearchChange} />
          <div className="flex gap-2">
            <ViewToggler items={listToggleData} selectedIndex={selectedIndex} />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between self-start">
        <CheckboxWithLabel id="docs" label="Multi-Select" />
        <div className="flex gap-4">
          <DropDownList label={"Sort By"} icon={<SortIcon />} list={sortList} />
          <DropDownList
            label={"Filter by"}
            icon={<FilterIcon />}
            list={filterList}
          />

          <FavouritesButton onClick={handleFavourites} />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
