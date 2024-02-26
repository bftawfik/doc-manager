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
          "absolute right-0 top-0 h-full w-full min-w-[392px] transition-transform duration-300 lg:w-1/3 lg:max-w-[392px] ",
          {
            "translate-x-0 ": detailsSection,
            "translate-x-full ": !detailsSection,
          }
        )}
      >
        {/* here's the content of the detailed opend card */}
        {detailsSection ? (
          <DrawerComponent className="overflow-y-auto" {...drawerProps} />
        ) : null}
      </aside>
    </main>
  );
};

export default ViewWithDrawer;
