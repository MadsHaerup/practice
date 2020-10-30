
var intersectionObserver = new IntersectionObserver(function (entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  // 1 er hele elementet i viewport 0 er intet af elementet
  if (entries[0].intersectionRect.bottom <= 500) return;
  entries[0].target.querySelector("section").style.transform = "translateX(0)";
  entries[0].target.querySelector("section").style.opacity = "1";
 
});
  
var allMydivs = document.querySelectorAll("div");
  // start observing
allMydivs.forEach(function (div) {
  intersectionObserver.observe(div);
});
intersectionObserver.unobserve(allMydivs);

// ────────────────────────────────────────────────────────────────────────────────