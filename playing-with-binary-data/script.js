const clickMeButton = document.getElementById("click-me");

clickMeButton.addEventListener("click", (e) => {
  const ab = new ArrayBuffer(2);
  const dv = new DataView(ab);
  dv.setInt8(0, 104);
  dv.setInt8(1, 105);
  //   console.log(new Uint8Array(ab));
  //   Uint8Array(2) [ 104, 105 ]

  const blob = new Blob([ab]);
  console.log(blob);
  const file = new File([ab], "dummy.txt", { type: "text/plain" });

  const url = URL.createObjectURL(file);

  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.download = file.name;
  aTag.textContent = "Download File";

  const body = document.querySelector("body");
  body.appendChild(aTag);
});
