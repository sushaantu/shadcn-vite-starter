"use client"

import * as React from "react"
import {
  Command,
  LayoutDashboard,
  LifeBuoy,
  Receipt,
  ScanSearch,
  Send,
  Settings,
  ChartArea,
  Building,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Sushaantu",
    email: "sushaantu@joindeleteme.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true
    },
    {
      title: "Members",
      url: "#",
      icon: Users,
      isActive: true
    },
    {
      title: "Reports",
      url: "#",
      icon: ChartArea,
      isActive: true
    },
    {
      title: "Organizations",
      url: "#",
      icon: Building,
      isActive: true
    },
    {
      title: "Risk Scan",
      url: "#",
      icon: ScanSearch,
      isActive: true
    },
    {
      title: "Billing",
      url: "#",
      icon: Receipt,
      isActive: true
    },
    {
      title: "Setting",
      url: "#",
      icon: Settings,
      isActive: true
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
