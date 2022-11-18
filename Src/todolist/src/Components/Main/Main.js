import "./main.css";
const Main = ({ text, setShowModal }) => {
  return (
    <main>
      <section className="SellBuyList-list">
        <h2>{text}</h2>
        <div className="btn btn-success mb-3">
          <button className="detail" onClick={setShowModal}>
            افزودن {text}
          </button>
        </div>
        <div className="SBList">
          <div className="content">
            <input type="text" className="text" value="کیان فلز جی" readOnly />
          </div>
          <div className="actions">
            <button className="edit">ویرایش</button>
            <button className="delete">حذف</button>
            <button className="detail text-primary">جزئیات</button>
          </div>
        </div>
        <div className="SBList">
          <div className="content">
            <input type="text" className="text" value="اذر اذین" readOnly />
          </div>
          <div className="actions">
            <button className="edit">ویرایش</button>
            <button className="delete">حذف</button>
            <button className="detail text-primary">جزئیات</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
