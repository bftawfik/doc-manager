"use client";

import { useCallback, useEffect, useState } from "react";

import ColumnsWrapper from "./_components/columnsWrapper/ColumnsWrapper";
import ContentHeader from "./_components/contentHeader/ContentHeader";
import FileCard from "./_components/fileCard/FileCard";
import ViewWithDrawer from "./_components/viewWithDrawer/ViewWithDrawer";
import { deleteFile, updateFile } from "./_services/deleteUpdateFiles";
import { getFiles } from "./_services/getFiles";
import { File } from "./_types";

const message = "details here";
const DetailsComp = ({ message }: DrawerDetailsPros) => {
  return <div> {message}</div>;
};

interface DrawerDetailsPros {
  message: string;
}

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

  // useCallback hook to memoize the fetch function
  const fetchFiles = useCallback(async (query: string | undefined) => {
    const fetchedFiles = await getFiles(query);
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

  // Effect to fetch files when searchQuery changes or on component mount
  useEffect(() => {
    fetchFiles(searchQuery);
  }, [fetchFiles, searchQuery]);

  const gridView = viewType === ViewTypes.GRID ? true : false;

  return (
    <ViewWithDrawer<DrawerDetailsPros>
      drawerComponent={DetailsComp}
      drawerProps={{ message: message }}
      detailsSection={detailsSection}
    >
      {/* add the header here */}
      <ContentHeader
        viewType={viewType}
        handleView={(e) => setViewType(e)}
        isMultiSelect={isMultiSelect}
        handleIsMultiSelect={handleMultiSelectChange}
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
