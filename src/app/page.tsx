"use client";

import { useState } from "react";

import ColumnsWrapper from "./_components/columnsWrapper/ColumnsWrapper";
import ViewWithDrawer from "./_components/viewWithDrawer/ViewWithDrawer";

const message = "details here";
const DetailsComp = ({ message }: DrawerDetailsPros) => {
  return <div> {message}</div>;
};

interface DrawerDetailsPros {
  message: string;
}

//eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const [detailsSection, setDetailsSection] = useState(false);
  const [gridView, setGridView] = useState(true);
  const handleViewDetailsSection = () => {
    setDetailsSection(!detailsSection);
  };
  return (
    <ViewWithDrawer<DrawerDetailsPros>
      drawerComponent={DetailsComp}
      drawerProps={{ message: message }}
      detailsSection={detailsSection}
    >
      {/* add the header here */}
      <ColumnsWrapper detailsSection={detailsSection} gridView={gridView}>
        {/* add children cards here */}
      </ColumnsWrapper>
    </ViewWithDrawer>
  );
}
