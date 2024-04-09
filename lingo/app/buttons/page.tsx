import { Button } from "@/components/ui/button";
const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      <Button variant="Danger">Danger</Button>
      <Button variant="DangerOutline">Danger Outline</Button>
      <Button variant="Super">SUPER</Button>
      <Button variant="SuperOutline">SUPER OUTLINE</Button>
      <Button variant="Ghost">GHOST</Button>
      {/* <Button variant="GhostOutline">GHOST OUTLINE</Button> */}
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar OUTLINE</Button>
    </div>
  );
};

export default ButtonsPage;
