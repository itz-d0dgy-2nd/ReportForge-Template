window.onload = function() {

  document.querySelectorAll('.severity-section-assessment td').forEach(tableData => {
    const cellText = tableData.textContent.trim();
    if (!cellText){
      return;
    }    
    const commaSeparatedItems = cellText.split(',').map(item => item.trim()).filter(Boolean);
    if (commaSeparatedItems.length > 6) {
      tableData.textContent = `Findings: ${itemCount}`;
    }
  });

  document.querySelectorAll('img').forEach(img => {
    const caption = document.createElement('figcaption');
    caption.innerHTML = "<strong>Figure: </strong>" + img.alt;
    img.parentNode.insertBefore(caption, img.nextSibling);
  });

};
