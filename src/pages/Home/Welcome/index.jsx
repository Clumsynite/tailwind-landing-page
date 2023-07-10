import Description from "./Description";
import Story from "./Story";

function Welcome() {
  return (
    <div className="flex flex-col items-center px-24 min-h-[100vh]">
      <Description />
      <Story />
    </div>
  );
}

export default Welcome;
