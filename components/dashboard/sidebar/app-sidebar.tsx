import React from "react";

import {
  // BarChart2,
  // BookOpen,
  // Bus,
  ChevronRight,
  ClipboardList,
  // DollarSign,
  GraduationCap,
  LayoutDashboard,
  // MessageSquare,
  // Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "@/components/logo";

const NAVBAR_ITEMS = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    items: [
      {
        title: "Overview",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "Student Management",
    url: "/students",
    icon: Users,
    items: [
      {
        title: "Student Directory",
        url: "/dashboard/students",
      },
      // {
      //   title: "Fees",
      //   url: "/dashboard/students/fees",
      // },
      // {
      //   title: "Studen Ids",
      //   url: "dashboard/students/ids",
      // },
      // {
      //   title: "Attendance",
      //   url: "dashboard/students/attendance",
      // },
    ],
  },
  {
    title: "Staff Management",
    url: "/dashboard/staff",
    icon: ClipboardList,
    isActive: true,
    items: [
      {
        title: "Teachers",
        url: "/dashboard/staff/teachers",
      },
      // {
      //   title: "Librarians",
      //   url: "/dashboard/staff/librarians",
      // },
      // {
      //   title: "Leave Management",
      //   url: "/dashboard/staff/leave",
      // },
      // {
      //   title: "Performance",
      //   url: "/dashboard/staff/performance",
      // },
    ],
  },
  {
    title: "Academics",
    url: "/dashboard/academics",
    icon: GraduationCap,
    isActive: true,
    items: [
      {
        title: "Classes",
        url: "/dashboard/academics/classes",
      },
      // {
      //   title: "Examinations",
      //   url: "/academics/examinations",
      // },
      // {
      //   title: "Assignments",
      //   url: "/academics/assignments",
      // },
      // {
      //   title: "Report Cards",
      //   url: "/academics/report-cards",
      // },
    ],
  },
  // {
  //   title: "Communication",
  //   url: "/communication",
  //   icon: MessageSquare,
  //   items: [
  //     {
  //       title: "Messages",
  //       url: "/communication/messages",
  //     },
  //     {
  //       title: "Announcements",
  //       url: "/communication/announcements",
  //     },
  //     {
  //       title: "Notice Board",
  //       url: "/communication/notice-board",
  //     },
  //     {
  //       title: "Emergency Alerts",
  //       url: "/communication/emergency-alerts",
  //     },
  //   ],
  // },
  // {
  //   title: "Finance",
  //   url: "/finance",
  //   icon: DollarSign,
  //   items: [
  //     {
  //       title: "Fee Management",
  //       url: "/finance/fees",
  //     },
  //     {
  //       title: "Payments",
  //       url: "/finance/payments",
  //     },
  //     {
  //       title: "Scholarships",
  //       url: "/finance/scholarships",
  //     },
  //     {
  //       title: "Reports",
  //       url: "/finance/reports",
  //     },
  //   ],
  // },
  // {
  //   title: "Transport",
  //   url: "/transport",
  //   icon: Bus,
  //   items: [
  //     {
  //       title: "Routes",
  //       url: "/transport/routes",
  //     },
  //     {
  //       title: "Tracking",
  //       url: "/transport/tracking",
  //     },
  //     {
  //       title: "Drivers",
  //       url: "/transport/drivers",
  //     },
  //     {
  //       title: "Maintenance",
  //       url: "/transport/maintenance",
  //     },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   url: "/resources",
  //   icon: BookOpen,
  //   items: [
  //     {
  //       title: "Library",
  //       url: "/resources/library",
  //     },
  //     {
  //       title: "Inventory",
  //       url: "/resources/inventory",
  //     },
  //     {
  //       title: "Facilities",
  //       url: "/resources/facilities",
  //     },
  //     {
  //       title: "Assets",
  //       url: "/resources/assets",
  //     },
  //   ],
  // },
  // {
  //   title: "Reports & Analytics",
  //   url: "/reports",
  //   icon: BarChart2,
  //   items: [
  //     {
  //       title: "Academic Reports",
  //       url: "/reports/academic",
  //     },
  //     {
  //       title: "Financial Reports",
  //       url: "/reports/financial",
  //     },
  //     {
  //       title: "Custom Reports",
  //       url: "/reports/custom",
  //     },
  //     {
  //       title: "Analytics Dashboard",
  //       url: "/reports/analytics",
  //     },
  //   ],
  // },
  // {
  //   title: "Settings",
  //   url: "/settings",
  //   icon: Settings,
  //   items: [
  //     {
  //       title: "School Profile",
  //       url: "/settings/profile",
  //     },
  //     {
  //       title: "User Management",
  //       url: "/settings/users",
  //     },
  //     {
  //       title: "System Settings",
  //       url: "/settings/system",
  //     },
  //     {
  //       title: "Backup & Security",
  //       url: "/settings/security",
  //     },
  //   ],
  // },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo type="light" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {NAVBAR_ITEMS.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
