"use client";

import { useState } from "react";

import ColumnsWrapper from "./_components/columnsWrapper/ColumnsWrapper";
import ContentHeader from "./_components/contentHeader/ContentHeader";
import ViewWithDrawer from "./_components/viewWithDrawer/ViewWithDrawer";

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

  const gridView = viewType === ViewTypes.GRID ? true : false;

  return (
    <ViewWithDrawer<DrawerDetailsPros>
      drawerComponent={DetailsComp}
      drawerProps={{ message: message }}
      detailsSection={detailsSection}
    >
      {/* add the header here */}
      <ContentHeader viewType={viewType} handleView={(e) => setViewType(e)} />
      <ColumnsWrapper detailsSection={detailsSection} gridView={gridView}>
        {/* add children cards here */}
      </ColumnsWrapper>
    </ViewWithDrawer>
  );
}
