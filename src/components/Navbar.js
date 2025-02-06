import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-md bg-white font-jost relative">

      <Link href="/">
        <Image src="/images/logo.svg" alt="Daily Bloom Logo" width={100} height={100 / 3} />
      </Link>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`absolute top-16 right-4 w-60 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-4 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <NavLink href="/" pathname={pathname} label="Home" onClick={() => setIsOpen(false)} />
        <NavLink href="/about" pathname={pathname} label="About" onClick={() => setIsOpen(false)} />
        <NavLink href="/contact" pathname={pathname} label="Contact" onClick={() => setIsOpen(false)} />

    
        <NavLink
          href="/sign-up"
          pathname={pathname}
          label="Sign Up"
          className="border border-theme-dark text-theme-dark uppercase px-4 py-2 rounded-lg w-full text-center"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          href="/login"
          pathname={pathname}
          label="Login"
          className="bg-theme-dark text-white uppercase px-4 py-2 rounded-lg w-full text-center"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="hidden md:flex space-x-6 items-center">
        <NavLink href="/" pathname={pathname} label="Home" />
        <NavLink href="/about" pathname={pathname} label="About Us" />
        <NavLink href="/contact" pathname={pathname} label="Contact Us" />


        <NavLink href="/sign-up" pathname={pathname} label="Sign Up" className="border border-theme-dark text-theme-dark uppercase px-4 py-2 rounded-lg" />
        <NavLink href="/login" pathname={pathname} label="Login" className="bg-theme-dark text-white uppercase px-4 py-2 rounded-lg" />
      </div>
    </div>
  );
};

export default Nav;
