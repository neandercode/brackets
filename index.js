alert("Greetings from Uncle Sam");

function myMoney() {
  let numbers = document.getElementById("income").value;
  let text;
  if (numbers <= 11000) {
    text =
      "You are in the 10% tax bracket. This is for anyone that makes $11,000 or less. The most you will pay is $1,100! Plan to set aside $21.15 a week.";
  } else if (numbers <= 44725) {
    text =
      "You are in the 12% tax bracket. This is for anyone that makes between $11,001-$44,725. The most you will pay is $5,146.88. Plan to set aside $98.98 a week.";
  } else if (numbers <= 95375) {
    text =
      "You are in the 22% tax bracket. This is for anyone that makes between $44,726-$95,375. The most you will pay is $16,289.66. Plan to set aside $313.26 a week.";
  } else if (numbers <= 182100) {
    text =
      "You are in the 24% tax bracket. This is for anyone that makes between $95,376-$182,100. The most you will pay is $37,103.42. Plan to set aside $713.53 a week.";
  } else if (numbers <= 231250) {
    text =
      "You are in the 32% tax bracket. This is for anyone that makes between $182,101-$231,250. The most you will pay is $52,831.10. Plan to set aside $1,015.98 a week.";
  } else if (numbers <= 578125) {
    text =
      "You are in the 35% tax bracket. This is for anyone that makes between $231,251-$578,125. The most you will pay is $174,237. Plan to set aside $3,350.71 a week.";
  } else if (numbers >= 578126) {
    text =
      "You are in the 37% tax bracket. This is for anyone that makes over $578,125! The minimum you will pay is $174,238. For every dollar you make after $578,125 you will pay 37%";
  }

  document.getElementById("demo").innerHTML = text;
}
