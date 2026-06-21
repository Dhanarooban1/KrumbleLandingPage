import { signInWithGoogle, auth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../utils/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  const scrollToPay = () =>
    document.getElementById("pay").scrollIntoView({ behavior: "smooth" });

  const handleAuth = async () => {
    if (user) {
      await signOut(auth);
    } else {
      await signInWithGoogle();
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-12 h-[60px] flex items-center
                    justify-end gap-3 bg-[rgba(14,14,14,0.9)] backdrop-blur-md
                    border-b border-white/[0.07] max-sm:px-5">

      {/* Google Sign-in / Sign-out button */}
      <button
        onClick={handleAuth}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white
                   border border-white/10 rounded-full px-4 py-[7px]
                   text-[0.82rem] font-medium cursor-pointer tracking-[0.2px]
                   transition-all duration-150 hover:scale-[1.03]"
      >
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-5 h-5 rounded-full"
            />
            <span className="max-sm:hidden">{user.displayName?.split(" ")[0]}</span>
            <span className="text-white/50 text-xs">· Sign out</span>
          </>
        ) : (
          <>
            {/* Google "G" icon */}
            <svg viewBox="0 0 48 48" width="16" height="16">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Sign in
          </>
        )}
      </button>
    </nav>
  );
}