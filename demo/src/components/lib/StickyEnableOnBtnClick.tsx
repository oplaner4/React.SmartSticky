import { useState } from "react";
import { Button } from "react-bootstrap";
import { SmartSticky } from "@oplaner4/smart-sticky";

export const StickyEnableOnBtnClick = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <SmartSticky enabled={enabled}>
      <h5>My sticky content 11 - disable/enable on button click</h5>
      <Button variant={enabled ? "danger" : "success"} onClick={handleClick}>
        {enabled ? "Disable" : "Enable"}
      </Button>
    </SmartSticky>
  );
};
