import SmartSticky from "../../../../lib/src"

export const StickyRowAsContainer = ({rowContainer}: {rowContainer: HTMLDivElement}) => {
    return <SmartSticky 
        container={rowContainer}
        fixed={{
          width: rowContainer.offsetWidth,
          left: rowContainer.offsetLeft,
        }}
  >
    <h5>My sticky content 4 - row as container</h5>
  </SmartSticky>
};
