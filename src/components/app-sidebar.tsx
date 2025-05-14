import { Building, ChartArea, LayoutDashboard, LifeBuoy, Receipt, ScanSearch, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Members",
    url: "#",
    icon: Users,
  },
  {
    title: "Reports",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "Organizations",
    url: "#",
    icon: Building,
  },
  {
    title: "Risk Scan",
    url: "#",
    icon: ScanSearch,
  },
  {
    title: "Billing",
    url: "#",
    icon: Receipt,
  },
  {
    title: "Setting",
    url: "#",
    icon: Settings,
  },
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
