"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import ColumnsWrapper from "./_components/columnsWrapper/ColumnsWrapper";
import ContentHeader from "./_components/contentHeader/ContentHeader";
import DetailsDrawer, {
  DetailsDrawerProps,
} from "./_components/detailsDrawer/DetailsDrawer";
import FileCard from "./_components/fileCard/FileCard";
import ViewWithDrawer from "./_components/viewWithDrawer/ViewWithDrawer";
import { GET_FAVORITES_FILES, GET_FILES } from "./_constants";
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
  const queryClient = useQueryClient();

  const { data: favoriteFiles } = useQuery({
    queryKey: [GET_FAVORITES_FILES],
    queryFn: getFavorites,
  });
  const { data: allFiles } = useQuery({
    queryKey: [GET_FILES, searchQuery],
    queryFn: () => getFiles(searchQuery),
  });

  const handleDelete = async (idToDelete: number) => {
    try {
      await deleteFile(idToDelete);
      setFiles(files.filter((file) => file.id !== idToDelete));
      queryClient.invalidateQueries({ queryKey: [GET_FILES, searchQuery] });
      queryClient.invalidateQueries({ queryKey: [GET_FAVORITES_FILES] });
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
      queryClient.invalidateQueries({ queryKey: [GET_FILES, searchQuery] });
      queryClient.invalidateQueries({ queryKey: [GET_FAVORITES_FILES] });

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
    const filesToShow = showFavorites ? favoriteFiles : allFiles;
    if (filesToShow) {
      setFiles(filesToShow);
    }
  }, [allFiles, favoriteFiles, showFavorites]);

  const gridView = viewType === ViewTypes.GRID ? true : false;

  const renderedFileData =
    files.find((fileData) => selection[fileData.id]) || {};
  return (
    <ViewWithDrawer<DetailsDrawerProps>
      drawerComponent={DetailsDrawer}
      drawerProps={{
        data: renderedFileData as File,
      }}
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
