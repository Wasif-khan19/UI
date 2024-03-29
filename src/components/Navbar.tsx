import Link from "next/link";
import Wrapper from "./Wrapper";
import NavItems from "./NavItems";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="sticky z-50 inset-x-0 h-16 top-0 bg-[#122315]">
      <header className="bg-[#122315]">
        <Wrapper>
          <div className="bg-[#122315]">
            <div className="flex h-16 items-center">
              {/* mob nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <p className="text-4xl tracking-tighter font-bold text-[#F3EDE4]">
                    SPARKNIX
                  </p>
                </Link>
              </div>
              <div className="hidden-z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className="bg-[#55DD4A] hover:bg-[#7edb77] py-2 px-4 rounded-xl text-[#122315] font-bold"
                    >
                      LOG IN
                    </Link>
                  )}

                  {/* {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )} */}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="sign-up"
                      className="bg-[#55DD4A] hover:bg-[#7edb77] py-2 px-4 rounded-xl text-[#122315] font-bold"
                    >
                      JOIN NOW
                    </Link>
                  )}

                  {/* {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )} */}

                  <div className="ml-4 flow-root lg:ml-6 ">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;