"use client";
import clsx from "clsx";

interface ViewWithDrawerProps<T> {
  children?: React.ReactNode;
  detailsSection: boolean;
  drawerComponent: React.ElementType;
  drawerProps: T;
}
const ViewWithDrawer = <T,>({
  children,
  detailsSection,
  drawerProps,
  drawerComponent: DrawerComponent,
}: ViewWithDrawerProps<T>) => {
  return (
    <main className="relative flex h-full w-full flex-row">
      <div
        className={clsx(
          "flex h-full flex-col  overflow-y-auto px-4 py-8 transition-[width]  duration-300",
          { "w-2/3": detailsSection },
          { "w-full": !detailsSection }
        )}
      >
        {children}
      </div>

      <aside
        className={clsx(
          "absolute right-0  top-0 h-full w-1/3  transition-transform duration-300 ",
          {
            "translate-x-0 ": detailsSection,
            "translate-x-full ": !detailsSection,
          }
        )}
      >
        {/* here's the content of the detailed opend card */}
        <DrawerComponent className="overflow-y-auto" {...drawerProps} />
      </aside>
    </main>
  );
};

export default ViewWithDrawer;
