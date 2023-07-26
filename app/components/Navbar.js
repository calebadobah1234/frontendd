"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const logoutFunction = async () => {
    localStorage.setItem("userEmail", "");
    router.push("/");
  };
  return (
    <>
      <div className="bg-black text-white max-md:w-[100%]">
        <div className="flex justify-center items-center"></div>
        <nav className="bg-black text-white py-5">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold">Online Voting System</h1>
          </div>
          <div className="container  mt-5 mx-auto flex justify-center items-center">
            <ul className="flex space-x-8">
              <li>
                <Link href="/add-candidate" className="hover:text-blue-500">
                  Admin
                </Link>
              </li>
              <li>
                <Link href="/main" className="hover:text-blue-500">
                  Cast Vote
                </Link>
              </li>
              <li
                onClick={logoutFunction}
                className="cursor-pointer hover:text-blue-500"
              >
                Logout
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
