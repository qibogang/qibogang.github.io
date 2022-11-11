const notebook_url = "test.ipynb";
fetch(notebook_url) // fetch the notebook
  .then((response) => response.json())
  .then((data) => {
    // iterate over the cells, display source and output
    data.cells.map((cell) => {
      return (
        <>
          <div>{cell.source}</div>
          <div>{cell.output}</div>
        </>
      );
    });
  });