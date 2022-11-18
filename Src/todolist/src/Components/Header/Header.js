import "./header.css";
const Header = ({ textName}) => {
  return (
    <header>
      <h1>لیست {textName}</h1>
      <form id="SBForm">
        <input type="text" id="SearchInput" placeholder="سرچ روی تاریخ" />
        <input type="submit" id="SearchInputSubmit" value="جستجو" />
      </form>
    </header>
  );
};

export default Header;
