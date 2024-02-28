import { useQuery } from "@tanstack/react-query";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

import { dateFormmater } from "@/app/_helpers/dateFormatter";
import { selectedObjectFromArray } from "@/app/_helpers/selectedObjectFormArray";
import { getFilesDetails } from "@/app/_services/getFilesDetails";
import { Version } from "@/app/_types";

import BrandButton from "../brandButton/BrandButton";
import DatePicker from "../datePicker/DatePIcker";
import DrawerLabel from "../drawerLabel/DrawerLabel";
import DropdownMenuCheckboxes from "../dropdownMenuCheckboxes/DropdownMenuCheckboxes";
import InputField from "../inputField/InputField";
import {
  Download,
  Forward,
  Messages,
  Reload,
  Star,
  Trash,
  Unlock,
} from "../svgs";
import TagsController from "../tagsController/TagsController";
// import VersionSection from "../versionController/VersionController";

export interface DetailsDrawerHOCProps {
  selection?: { [id: number]: boolean };
}
interface DetailsDrawerProps {
  data: Version;
  selection?: { [id: number]: boolean };
}
const DetailsDrawerHOC = ({ selection }: DetailsDrawerHOCProps) => {
  // Extract selected IDs from the selection object
  const selectedIds = Object.keys(selection || {});
  const selectedIdsAsText = selectedIds.join(",");
  // const isMultipleSelected = selectedIds.length > 1;
  const { data: filesDetails } = useQuery({
    queryKey: ["filesDetails", selection],
    queryFn: () => getFilesDetails(selectedIdsAsText),
    enabled: selectedIds.length > 0,
  });

  if (!selection || !filesDetails) {
    return null; // If no selection or filesDetails, return null
  }

  if (filesDetails.length) {
    return <DetailsDrawer data={filesDetails[0]} />; // Render DetailsDrawer with the first file details
  } else {
    return null;
  }
};

const DetailsDrawer = ({ data }: DetailsDrawerProps) => {
  const [tags, setTags] = useState<string[]>(data.tags);
  // const [version, setVersion] = useState(data.version.id);
  const [date, setDate] = useState<Date>(
    dateFormmater(data.last_modified, "/", "en-UK")
  );
  const [usersCheckboxStates, setUsersCheckboxStates] = useState<{
    [id: number]: boolean;
  }>(selectedObjectFromArray(data?.assigned_users));
  const [databaseCheckboxState, setDatabaseCheckboxState] = useState<{
    [id: number]: boolean;
  }>(selectedObjectFromArray(data.assigned_databases));

  const handleUsersChange = (id: number, checked: boolean) => {
    setUsersCheckboxStates((prevStates) => ({
      ...prevStates,
      [id]: checked,
    }));
  };
  const handleDatabaseChange = (id: number, checked: boolean) => {
    setDatabaseCheckboxState((prevStates) => ({
      ...prevStates,
      [id]: checked,
    }));
  };
  useMemo(() => {
    const selectedUsersObject = selectedObjectFromArray(data?.assigned_users);
    setUsersCheckboxStates(selectedUsersObject);
    const selectedDataObject = selectedObjectFromArray(data.assigned_databases);
    setDatabaseCheckboxState(selectedDataObject);
    setTags(data.tags);
    const formattedDate = dateFormmater(data.last_modified, "/", "en-UK");
    setDate(formattedDate);
    // setVersion(data.version.id);
  }, [data]);

  return (
    <div className="flex h-full flex-col border-s">
      <div className="h-[calc(100%-86px)] overflow-y-auto ">
        <div className=" relative flex h-[220px]  items-center justify-center bg-[#515154] p-6">
          <Image
            width={100}
            height={100}
            alt="preview"
            quality={100}
            className="h-full w-full rounded-lg object-cover"
            src="/images/previewPlaceholder.jpg"
          />
          <button className="absolute  flex gap-2 self-center rounded-lg bg-[#515154] p-2 text-xs text-white">
            Click to preview
            <Eye width={16} height={16} stroke="#515154" fill="white" />
          </button>
        </div>
        <div className="flex flex-col gap-8 px-6 py-8">
          <div className="flex items-center justify-between ">
            <div className="flex gap-2">
              <Download />
              <Forward />
              <Reload />
              <Unlock />
            </div>
            <div className="flex gap-2">
              <Star />
              <Messages />
              <Trash />
            </div>
          </div>

          <div className=" flex w-full flex-col items-start gap-[20.5px]">
            <div className=" flex w-full items-center justify-between">
              <DrawerLabel label="Title" />
              <InputField onChange={() => {}} placeholder={data.name} />
            </div>
            <div className="flex w-full items-center justify-between">
              <DrawerLabel label="Owner" />
              <div className="w-[220px] rounded-sm bg-[#EDEDED] p-2 text-sm font-normal text-black">
                {data.owner.name}
              </div>
            </div>
            <div className="  flex w-full items-center justify-between">
              <DrawerLabel label="Permission" />
              <DropdownMenuCheckboxes
                withArrow={true}
                list={data?.users || []}
                checkedValues={usersCheckboxStates}
                onChange={handleUsersChange}
                label="SelectUser"
              />
            </div>
            <TagsController
              disabled={false}
              tagsList={tags}
              tagHandler={setTags}
            />

            {/* <div className="  flex w-full items-center justify-between">
              <DrawerLabel label="Version" />
              <VersionSection
                contentClassName="w-[220px] focus:outline-brand border-brand"
                onChange={setVersion}
                list={data.versions || []}
                selected={version}
              />
            </div> */}
            <div className="  flex w-full items-center justify-between">
              <DrawerLabel label="Database" />
              <DropdownMenuCheckboxes
                withArrow={true}
                checkedValues={databaseCheckboxState}
                onChange={handleDatabaseChange}
                list={data?.databases || []}
                label="Select Database"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <DrawerLabel label="Due Date" />
              <DatePicker dateValue={date} handleChange={setDate} />
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex w-1/2 flex-col gap-1">
              <DrawerLabel label="Actions" />
              <BrandButton label=" Ask for validation" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 flex h-[86px] w-full items-center gap-3 px-6 py-8">
        <button className="h-auto flex-1 rounded-lg border border-[#4E46B4]  p-1 text-sm font-medium text-[#4E46B4] duration-75 hover:bg-[#4E46B4]  hover:text-white">
          Save changes
        </button>
        <button className="flex-1 rounded-lg border border-[#FF6666]  p-1 text-sm font-medium  text-[#FF6666]  duration-75 hover:border-[#FF0000] hover:text-[#FF0000] ">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DetailsDrawerHOC;
