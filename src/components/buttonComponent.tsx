import { Button } from "flowbite-react";
// Varje komponent ska presenteras med en rubrik och hur den ser ut med olika props.

export function ButtonComponent() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <section className="border border-black p-2">
        <p>This is what a button with a xs size looks like</p>
        <Button gradientDuoTone="tealToLime" size="xs">
          Teal to Lime
        </Button>
      </section>
      <section className="border border-black p-2">
        <p>This is what a button with a xl size looks like</p>
        <Button outline gradientDuoTone="purpleToBlue" size="xl">
          Purple to Blue
        </Button>
      </section>
      <section className="border border-black p-2">
        <p>This is what a disabled button with a blue color looks like</p>
        <Button color="blue" disabled>
          Disabled button
        </Button>
      </section>
    </div>
  );
}
