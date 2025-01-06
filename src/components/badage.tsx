import { Badge } from "flowbite-react";
import { HiCheck, HiClock, HiBriefcase } from "react-icons/hi";

export function BadageComponent() {
  // Rename to start with uppercase
  return (
    <div className="flex flex-wrap gap-2 p-2">
      <div className="border border-blue-500 p-2">
        <p>Icon: HiCheck, Size: sm, Color: pink</p>
        <Badge icon={HiCheck} size="sm" color="pink">
          2 minutes ago
        </Badge>
      </div>
      <div className="border border-blue-500 p-2">
        <p>Color: Gray, Size: lg, icon: HiClock</p>
        <Badge color="gray" size="lg" icon={HiClock}>
          3 days ago
        </Badge>
      </div>
      <div className="border border-blue-500 p-2">
        <p>Color: warning, Size: xs, Icon: HiBriefcase</p>
        <Badge color="warning" size="xs" icon={HiBriefcase}>
          Late for work!!
        </Badge>
      </div>
    </div>
  );
}
