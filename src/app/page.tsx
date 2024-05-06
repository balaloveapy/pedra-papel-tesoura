import { Body } from "./builder/body";
import { HeaderText } from "./builder/header";

export default function Home() {
  return (
      <div>
        <HeaderText/>
        <Body/>
      </div>
  );
}
