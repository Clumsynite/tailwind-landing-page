function Logo() {
  const label = "<LandingPage />";
  return (
    <div className="text-[#fff] text-2xl">
      <a
        title="Rishabh Pathak's Github Profile"
        href="https://clumsynite.github.io/tailwind-landing-page"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 transition-all"
      >
        {label}
      </a>
    </div>
  );
}

export default Logo;
