import { SmartSticky } from "@oplaner4/smart-sticky";

export const StickyTableHeader = ({ enabled }: { enabled: boolean }) => {
  return (
    <SmartSticky as="thead" enabled={enabled} show={{ immediately: true }}>
      <tr>
        <th scope="col">fixed</th>
        <th scope="col">table</th>
        <th scope="col">header</th>
      </tr>
    </SmartSticky>
  );
};
