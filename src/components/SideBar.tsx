import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Users,
  Settings,
  FileText,
  BarChart3,
  Calendar,
  BookOpen,
  UserCheck,
  Clock,
  GraduationCap,
  MessageSquare,
  CreditCard,
  Bell,
  User,
  LogOut,
  School,
  ClipboardList,
  Award,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

interface NavigationItem {
  icon: React.ComponentType<{ size: number }>;
  label: string;
  href: string;
}

type UserRole = "admin" | "teacher" | "student" | "parent";

interface UserData {
  name: string;
  email: string;
  avatar: string;
}

const SideBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<UserRole>("parent");
  const [currentUser, setCurrentUser] = useState<UserData>({
    name: "John Admin",
    email: "admin@portal.com",
    avatar: "JA",
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Navigation items for each role
  const navigationItems: Record<UserRole, NavigationItem[]> = {
    admin: [
      { icon: Home, label: "Dashboard", href: "#" },
      { icon: Users, label: "Students", href: "#" },
      { icon: GraduationCap, label: "Teachers", href: "#" },
      { icon: School, label: "Classes / Grades", href: "#" },
      { icon: BookOpen, label: "Subjects", href: "#" },
      { icon: UserCheck, label: "Attendance", href: "#" },
      { icon: Clock, label: "Timetable", href: "#" },
      { icon: Award, label: "Exams & Results", href: "#" },
      { icon: CreditCard, label: "Fees & Payments", href: "#" },
      { icon: Calendar, label: "Events / Calendar", href: "#" },
      { icon: BarChart3, label: "Reports", href: "#" },
      { icon: Settings, label: "Settings", href: "#" },
    ],
    teacher: [
      { icon: Home, label: "Dashboard", href: "#" },
      { icon: Users, label: "My Classes", href: "#" },
      { icon: UserCheck, label: "Attendance", href: "#" },
      { icon: Clock, label: "Timetable", href: "#" },
      { icon: ClipboardList, label: "Assignments", href: "#" },
      { icon: Award, label: "Exams / Grades", href: "#" },
      { icon: MessageSquare, label: "Messages / Notifications", href: "#" },
      { icon: FileText, label: "Resources", href: "#" },
      { icon: User, label: "Profile", href: "#" },
    ],
    student: [
      { icon: Home, label: "Dashboard", href: "#" },
      { icon: BookOpen, label: "My Subjects", href: "#" },
      { icon: ClipboardList, label: "Assignments", href: "#" },
      { icon: Award, label: "Exams / Results", href: "#" },
      { icon: UserCheck, label: "Attendance", href: "#" },
      { icon: Clock, label: "Timetable", href: "#" },
      { icon: CreditCard, label: "Fees / Payments", href: "#" },
      { icon: MessageSquare, label: "Messages / Notifications", href: "#" },
      { icon: User, label: "Profile", href: "#" },
    ],
    parent: [
      { icon: Home, label: "Dashboard", href: "#" },
      { icon: BarChart3, label: "Child's Performance", href: "#" },
      { icon: UserCheck, label: "Attendance", href: "#" },
      { icon: Clock, label: "Timetable", href: "#" },
      { icon: CreditCard, label: "Fees & Payments", href: "#" },
      { icon: Bell, label: "Notices", href: "#" },
      { icon: MessageSquare, label: "Messages", href: "#" },
      { icon: User, label: "Profile", href: "#" },
    ],
  };

  const generalNavigation: NavigationItem[] = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#" },
    { icon: Settings, label: "Features", href: "#" },
    { icon: MessageSquare, label: "Contact", href: "#" },
  ];

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    setUserRole("admin");
    setCurrentUser({
      name: "John Admin",
      email: "admin@portal.com",
      avatar: "JA",
    });
    setIsMobileMenuOpen(false);
  };

  // const handleLogin = (): void => {
  //   setIsLoggedIn(true);
  //   setIsMobileMenuOpen(false);
  // };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const getRoleColor = (role: UserRole): string => {
    const colors: Record<UserRole, string> = {
      admin: "bg-red-500",
      teacher: "bg-blue-500",
      student: "bg-green-500",
      parent: "bg-purple-500",
    };
    return colors[role] || "bg-gray-500";
  };

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle navigation item click
  const handleNavClick = (href: string): void => {
    // Close mobile menu when navigation item is clicked
    setIsMobileMenuOpen(false);
    // Handle navigation here
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const SidebarContent: React.FC = () => (
    <>
      {/* Sidebar Header */}
      <div className="mb-8">
        <h2 className="text-[#e6edf3] text-lg font-semibold">
          {isLoggedIn
            ? `${userRole.charAt(0).toUpperCase() + userRole.slice(1)} Portal`
            : "School Portal"}
        </h2>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2 flex-1">
        {isLoggedIn ? (
          <>
            {navigationItems[userRole].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  index === 0
                    ? "text-[#e6edf3] bg-[#21262d]"
                    : "text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3]"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 text-[#f85149] hover:bg-[#21262d] rounded-lg transition-colors w-full mt-4"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            {generalNavigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </>
        )}
      </nav>

      {/* Bottom Section - User Info */}
      {isLoggedIn && (
        <div className="mt-4 pt-4 border-t border-[#30363d]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className={`w-8 h-8 ${getRoleColor(
                userRole
              )} rounded-full flex items-center justify-center`}
            >
              <span className="text-white text-sm font-medium">
                {currentUser.avatar}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-[#e6edf3] text-sm font-medium">
                {currentUser.name}
              </p>
              <p className="text-[#7d8590] text-xs">{currentUser.email}</p>
            </div>
            <div
              className={`w-2 h-2 ${getRoleColor(userRole)} rounded-full`}
            ></div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="bg-[#0d1117] sm:block hidden w-64 overflow-auto scrollbox h-screen p-4 border-r border-[#30363d]  flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Menu Burger Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMobileMenu}
          className="fixed bottom-10 right-10 z-50 p-3 bg-[#21262d] text-white rounded-full shadow-lg hover:bg-[#30363d] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity">
          {/* Mobile Sidebar */}
          <div
            ref={mobileMenuRef}
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-[#0d1117] border-l border-[#30363d] transform transition-transform duration-300 ease-in-out"
          >
            <div className="h-full p-4 flex flex-col overflow-y-auto">
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>

              <SidebarContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
