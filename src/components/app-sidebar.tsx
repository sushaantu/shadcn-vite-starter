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
  GalleryVerticalEnd,
  AudioWaveform,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Sushaantu",
    email: "sushaantu@joindeleteme.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Amazon",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Twitch",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Blue Origin",
      logo: Command,
      plan: "Free",
    },
  ],
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
        <TeamSwitcher teams={data.teams} />
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
