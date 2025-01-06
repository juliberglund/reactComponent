"use client";

import { Card } from "flowbite-react";

interface CostumContentProps {
  href: string;
}

// CostumContent now accepts `href` as a prop
function CostumContent({ href }: CostumContentProps) {
  return (
    <>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Minnes Stund för André
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Välkommna till minnesstunden för André 12:00 12/1, klicka{" "}
        <a href={href} className="text-green-400">
          här
        </a>{" "}
        för att se adressen.
      </p>
      <p className="underline">Varmt välkommna!</p>
    </>
  );
}
interface CardsComponentProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

// CardsComponent accepts `href`, `imgSrc`, `imgAlt` as props and passes them to CostumContent
export function CardsComponent({ href, imgSrc, imgAlt }: CardsComponentProps) {
  return (
    <section className="p-4">
      <Card className="max-w-sm" imgSrc={imgSrc} imgAlt={imgAlt} horizontal>
        {/* Passes the `href` prop to CostumContent */}
        <CostumContent href={href} />
      </Card>
    </section>
  );
}
