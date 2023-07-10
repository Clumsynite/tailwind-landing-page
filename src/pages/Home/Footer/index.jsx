import Logo from "../../../Components/Logo";

function Footer() {
  return (
    <div className="min-h-[4vh] bg-[#1e1e31]" id="about">
      <div className="container mx-auto py-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            Made with &hearts; by{" "}
            <a
              title="Rishabh Pathak's Github Profile"
              href="https://github.com/Clumsynite"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-all font-bold"
            >
              Clumsyknight
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
