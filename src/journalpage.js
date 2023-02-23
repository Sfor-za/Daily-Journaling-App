import "./journalpage.css";

 function journalpage() {
  return (
    <div className="app">
      <header className="App-header">
        <div className="tools">
          <button className="">
            <i className="fa-solid fa-bold"></i>
          </button>
          <button className="">
            <i class="fa-solid fa-underline"></i>
          </button>
          <button className="">
            <i class="fa-solid fa-italic"></i>
          </button>
          <button className="">
            <i class="fa-solid fa-strikethrough"></i>
          </button>
          <button className="">
            <i class="fa-solid fa-font"></i>
          </button>
        </div>
      </header>
      <div className="text-container">
        <textarea
          name="journal"
          className="journal-page"
          id="mytextarea"
          cols="10"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}
export default journalpage;