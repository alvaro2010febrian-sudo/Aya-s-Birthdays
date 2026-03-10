const message = `HAPPY BIRTHDAY AYAAA!!!\ncieeee yang udah nambah umur, sekarang udah nenek\n\naku berharap kamu bisa jadi orang yang lebih baik dari kemarin, dan tambah pintar jugaa\n\naku bangga banget, karna kamu udah berjuang keras untuk bisa jadi berubah untuk menjadi lebih baik\n\nsekali lagi happy birthday yaaa, from your beloved Alvaro.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
