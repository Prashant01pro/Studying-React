const App = () => {
  function btnClick() {
    console.log("Button was Clicked");
  }

  function pageScrolling(val){
    console.log("Page Scrolling Speed :",val)
    if(val>0){
      console.log("Positive Scrolling")
    }else{
      console.log("Negative Scrolling")
    }
  }

  return (
    <>
      <div onWheel={(elem)=>pageScrolling(elem.deltaY)}>
        <div className="page1">
        <div className="bg-blue-400 rounded-xs m-4">Hello From React</div>
        <button
          style={{
            background: "white",
            color: "black",
            borderRadius: "5px",
            margin: "10px",
          }}
          onClick={btnClick}
        >
          Click Me
        </button>

        <div onMouseMove={(elem) => console.log(elem)} className="box"></div>
      </div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </>
  );
};
export default App;
