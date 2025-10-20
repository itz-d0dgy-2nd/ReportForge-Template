window.onload = function() {

  document.querySelectorAll('.severity-section-assessment td').forEach(tableData => {
    const links = tableData.querySelectorAll('a');
    const itemCount = links.length; 

    if (itemCount > 3 && itemCount < 6)
      links[2].after(document.createElement('br'));
    else if (itemCount >= 6)
      tableData.textContent = `Findings: ${itemCount}`;
  });

  document.querySelectorAll('img').forEach(img => {
    const caption = document.createElement('figcaption');
    caption.innerHTML = "<strong>Figure: </strong>" + img.alt;
    img.parentNode.insertBefore(caption, img.nextSibling);
  });
};
