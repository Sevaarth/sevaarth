import Donate from "@/components/ui/donate";
import SignUp from "@/components/ui/signUp";

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
