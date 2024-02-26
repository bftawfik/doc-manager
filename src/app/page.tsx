"use client";

import { useCallback, useEffect, useState } from "react";

import ColumnsWrapper from "./_components/columnsWrapper/ColumnsWrapper";
import ContentHeader from "./_components/contentHeader/ContentHeader";
import DetailsDrawer, {
  DetailsDrawerProps,
} from "./_components/detailsDrawer/DetailsDrawer";
import FileCard from "./_components/fileCard/FileCard";
import ViewWithDrawer from "./_components/viewWithDrawer/ViewWithDrawer";
import { deleteFile, updateFile } from "./_services/deleteUpdateFiles";
import { getFavorites } from "./_services/getFavorites";
import { getFiles } from "./_services/getFiles";
import { File } from "./_types";

enum ViewTypes {
  LIST = "list",
  GRID = "grid",
}

//eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const [detailsSection, setDetailsSection] = useState(false);
  const handleViewDetailsSection = () => {
    setDetailsSection(!detailsSection);
  };

  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.GRID);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State to hold the search query
  const [files, setFiles] = useState<File[]>([]); // State to hold the fetched files
  const [selection, setSelection] = useState<{ [id: number]: boolean }>({});
  const [isMultiSelect, setIsMultiSelect] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  // useCallback hook to memoize the fetch function
  const fetchFiles = useCallback(async (query: string | undefined) => {
    const fetchedFiles = await getFiles(query);
    setFiles(fetchedFiles);
  }, []);

  const fetchFavorites = useCallback(async () => {
    const fetchedFiles = await getFavorites();
    setFiles(fetchedFiles);
  }, []);

  const handleDelete = async (idToDelete: number) => {
    try {
      await deleteFile(idToDelete);
      setFiles(files.filter((file) => file.id !== idToDelete));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error deleting file:", error);
    }
  };

  const handleToggleFavorite = async (
    id: number,
    isFav: boolean
  ): Promise<number> => {
    try {
      await updateFile(id, { isFav });
      // Handle UI updates or refresh data
      return 200;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error updating file:", error);
      return 400;
    }
  };
  const toggleSelection = (id: number) => {
    setSelection((prevSelection) => ({
      ...(isMultiSelect ? prevSelection : {}),
      [id]: isMultiSelect ? !prevSelection[id] : true,
    }));
  };

  const handleMultiSelectChange = () => {
    setIsMultiSelect(!isMultiSelect);
    setSelection({});
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Effect to fetch files when searchQuery changes or on component mount
  useEffect(() => {
    if (showFavorites) {
      fetchFavorites();
    } else {
      fetchFiles(searchQuery);
    }
  }, [fetchFavorites, fetchFiles, searchQuery, showFavorites]);

  const gridView = viewType === ViewTypes.GRID ? true : false;

  return (
    <ViewWithDrawer<DetailsDrawerProps>
      drawerComponent={DetailsDrawer}
      drawerProps={{ data: undefined }}
      detailsSection={detailsSection}
    >
      {/* add the header here */}
      <ContentHeader
        viewType={viewType}
        handleView={(e) => setViewType(e)}
        isMultiSelect={isMultiSelect}
        handleIsMultiSelect={handleMultiSelectChange}
        handleShowFavorites={handleShowFavorites}
        showFavorites={showFavorites}
      />
      <ColumnsWrapper detailsSection={detailsSection} gridView={gridView}>
        {/* add children cards here */}
        {files.map((file) => {
          return (
            <FileCard
              key={file.id}
              file={file}
              handleViewDetailsSection={handleViewDetailsSection}
              handleDelete={handleDelete}
              handleToggleFavorite={handleToggleFavorite}
              selected={!!selection[file.id]}
              toggleSelection={toggleSelection}
            />
          );
        })}
      </ColumnsWrapper>
    </ViewWithDrawer>
  );
}
