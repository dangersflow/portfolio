import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";
import Sidebar from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Sidebar />
      <Outlet />
    </ClickSpark>
  );
}
