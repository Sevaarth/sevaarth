import Donate from "@/components/ui/Donate";
import SignUp from "@/components/ui/SignUp";

export default function GetInvolved() {
  return (
    <>
      <div id="donate">
        <Donate />
      </div>
      <div id="volunteer">
        <SignUp />
      </div>
    </>
  );
}
