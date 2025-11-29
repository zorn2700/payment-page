// إظهار رسالة النسخ بنجاح
function showSuccessMessage() {
  const msg = document.getElementById("successMessage");
  msg.style.display = "flex";
  setTimeout(() => {
    msg.style.display = "none";
  }, 2500);
}

// نسخ نص واحد
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    showSuccessMessage();
  });
}

// نسخ جميع بيانات الحساب
function copyAll(accountNumber) {
  let text = "";

  if (accountNumber === "account1") {
    text += "اسم المستفيد: VALENCIA MARBLE&NAT.STONES TRD LLC\n";
    text += "رقم الحساب: 0012084818001\n";
    text += "رقم IBAN: AE210410000012084818001\n";
    text += "البنك: مصرف الشارقة الإسلامي (Sharjah Islamic Bank)";
  } else if (accountNumber === "account2") {
    text += "اسم المستفيد: VALENCIA MARBLE AND NATURAL STONES\n";
    text += "رقم الحساب: 14211280920001\n";
    text += "رقم IBAN: AE060030014211280920001\n";
    text += "البنك: بنك أبوظبي التجاري (ADCB)";
  }

  navigator.clipboard.writeText(text).then(() => {
    showSuccessMessage();
  });
}

// التبديل بين الحسابات
const tabs = document.querySelectorAll(".account-tab");
const contents = document.querySelectorAll(".account-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    const accountId = tab.dataset.account;
    document.getElementById(`account${accountId}-content`).classList.add("active");
  });
});

// نظام التقييم
const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");
const thankYouMessage = document.getElementById("thankYouMessage");
const totalRatingsElement = document.getElementById("totalRatings");
const averageRatingElement = document.getElementById("averageRating");

let totalRatings = 127;
let totalScore = averageRatingElement.innerText * totalRatings;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const ratingValue = parseInt(star.dataset.rating);

    totalRatings++;
    totalScore += ratingValue;
    const newAverage = (totalScore / totalRatings).toFixed(1);

    totalRatingsElement.innerText = totalRatings;
    averageRatingElement.innerText = newAverage;

    ratingText.innerText = `لقد قمت بتقييمنا بـ ${ratingValue} نجوم`;

    thankYouMessage.style.display = "block";
    setTimeout(() => {
      thankYouMessage.style.display = "none";
    }, 2500);

    stars.forEach((s) => s.classList.remove("active"));
    for (let i = 0; i < ratingValue; i++) {
      stars[i].classList.add("active");
    }
  });
});
