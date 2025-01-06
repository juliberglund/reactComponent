"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { HiBell } from "react-icons/hi";

export function Alerts() {
  return (
    <div className="p-2">
      <div className="p-2">
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> Change a few things
          up and try submitting again. This is a red/faliure alert
        </Alert>
      </div>
      <div className="p-2">
        <Alert color="gray" icon={HiBell}>
          <span className="font-sans">Info alert!</span> This is a grey alert
        </Alert>
      </div>
    </div>
  );
}
