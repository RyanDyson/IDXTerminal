const menuItems = [
  {
    label: "Profile",
    href: "/dashboard/user-profile/",
    className: "",
  },
  {
    label: "Billing",
    href: "/dashboard/user-profile/preferences",
  },
  {
    label: "Billing",
    href: "/dashboard/user-profile/billing",
  },

  {
    label: "Notifications",
    href: "/dashboard/user-profile/notifications",
  },
  {
    label: "Sign Out",
    href: "/dashboard/user-profile/sign-out",
  },
];

const MenuItem = ({ item }: { item: (typeof menuItems)[number] }) => {
  return (
    <div className="flex cursor-pointer items-center p-2 text-left transition-colors hover:bg-stone-900">
      {item.label}
    </div>
  );
};

export default function userTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <div className="flex w-full max-w-64 flex-col space-y-2 divide-y divide-stone-700 p-4">
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
      {children}
    </div>
  );
}
