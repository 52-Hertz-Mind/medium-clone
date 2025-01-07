function Header({ font }: { font: string }) {
  return (
    <div className={`${font}`}>
      <h1 className="text-2xl">Medium</h1>
    </div>
  );
}

export default Header;
