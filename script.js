document.addEventListener("DOMContentLoaded", function () {
  const watchVideoBtn = document.getElementById("watchVideoBtn");
  const unlockAirdropBtn = document.getElementById("unlockAirdropBtn");
  let clickCount = 0;

  const affiliateLink =
    "https://www.effectiveratecpm.com/ez05r46v?key=653e63c862c4cd8fd4f001b74e6facc7";
  const youtubeLink = "https://www.youtube.com/shorts/FuyHOpP15xY";
  const aff_link_2 =
    "https://www.effectiveratecpm.com/hvij5r94hs?key=79b26274f8d82dcf5b3b7550ab536757";
  unlockAirdropBtn.addEventListener("click", function () {
    clickCount++;
    console.log("Click count:", clickCount);

    if (clickCount === 1 || clickCount === 2) {
      // Open Google in new tab for 1st and 2nd clicks
      window.open(affiliateLink, "_blank");
    } else if (clickCount === 3) {
      // Open YouTube in same window for 3rd click
      window.location.href = youtubeLink;
    }
  });

  watchVideoBtn.addEventListener("click", function () {
    // Always opens Google in a new tab, independent of clickCount
    window.open(aff_link_2, "_blank");
  });
});
