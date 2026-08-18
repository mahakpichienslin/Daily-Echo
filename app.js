// ===========================================
// 180 DAY - LISTENING SCREENING TEST
// ===========================================


// ===========================================
// QUESTIONS
// 
// spokenText = ข้อความที่จะนำไปสร้างเสียง
// ห้ามแสดง spokenText ให้ Tester เห็น
// ===========================================

const questions = [
  // =========================
  // 01 — Coffee shop
  // =========================
  {
    spokenText:
      "Hi there. What would you like to drink today?",
    maxPlays: 2
  },

  // =========================
  // 02 — Restaurant
  // =========================
  {
    spokenText:
      "Are you ready to order, or do you need a few more minutes?",
    maxPlays: 2
  },

  // =========================
  // 03 — Shopping
  // =========================
  {
    spokenText:
      "We don't have this shirt in black. Would another color be okay?",
    maxPlays: 2
  },

  // =========================
  // 04 — Meeting someone
  // =========================
  {
    spokenText:
      "I'm running about fifteen minutes late. Is that okay?",
    maxPlays: 2
  },

  // =========================
  // 05 — Restaurant
  // =========================
  {
    spokenText:
      "This dish is pretty spicy. Are you okay with spicy food?",
    maxPlays: 2
  },

  // =========================
  // 06 — Hotel
  // =========================
  {
    spokenText:
      "What time would you like us to call you tomorrow morning?",
    maxPlays: 2
  },

  // =========================
  // 07 — Everyday conversation
  // =========================
  {
    spokenText:
      "I'm thinking about getting something to eat. Have you eaten yet?",
    maxPlays: 2
  },

  // =========================
  // 08 — Coffee shop
  // =========================
  {
    spokenText:
      "We're out of oat milk today, but we have regular milk and soy milk.",
    maxPlays: 1
  },

  // =========================
  // 09 — Travel
  // =========================
  {
    spokenText:
      "The bus won't be here for another thirty minutes. Do you want to wait or take a taxi?",
    maxPlays: 1
  },

  // =========================
  // 10 — Restaurant
  // =========================
  {
    spokenText:
      "I'm sorry, but the kitchen has already closed. We can still serve drinks though.",
    maxPlays: 1
  },

  // =========================
  // 11 — Hotel
  // =========================
  {
    spokenText:
      "Your room won't be ready until three, but we can store your luggage for you.",
    maxPlays: 1
  },

  // =========================
  // 12 — Shopping
  // =========================
  {
    spokenText:
      "This one is on sale, but unfortunately you can't return it after you buy it.",
    maxPlays: 1
  },

  // =========================
  // 13 — Asking directions
  // =========================
  {
    spokenText:
      "The station is a little far from here. You could walk, but I'd probably take the bus.",
    maxPlays: 1
  },

  // =========================
  // 14 — Making plans
  // =========================
  {
    spokenText:
      "I can't make it tonight after all. Would sometime tomorrow afternoon work for you?",
    maxPlays: 1
  },

  // =========================
  // 15 — Restaurant problem
  // =========================
  {
    spokenText:
      "I'm really sorry. We accidentally gave your order to another table, so it'll take about ten more minutes.",
    maxPlays: 1
  },

  // =========================
  // 16 — Airport
  // =========================
  {
    spokenText:
      "Your flight has been delayed until seven thirty. You don't need to stay at the gate right now.",
    maxPlays: 1
  },

  // =========================
  // 17 — Hotel problem
  // =========================
  {
    spokenText:
      "I'm afraid we don't have the room you booked available tonight, but we can upgrade you at no extra charge.",
    maxPlays: 1
  },

  // =========================
  // 18 — Everyday conversation
  // =========================
  {
    spokenText:
      "You look exhausted. Why don't we skip dinner out tonight and just order something at home?",
    maxPlays: 1
  },

  // =========================
  // 19 — Travel decision
  // =========================
  {
    spokenText:
      "If we take the train, we'll get there faster, but the bus is about half the price. What do you think?",
    maxPlays: 1
  },

  // =========================
  // 20 — Social conversation
  // =========================
  {
    spokenText:
      "I know we said we'd meet at six, but something came up at work. Would you mind pushing it back an hour?",
    maxPlays: 1
  }
  
];



// ===========================================
// STATE
// ===========================================

let tester = {
  name: "",
  instagram: ""
};


let currentQuestion = 0;

let spokenAnswer = "";

let playsUsed = 0;


let testAnswers = [];



// ===========================================
// ELEMENTS
// ===========================================

const registerScreen =
  document.getElementById("registerScreen");

const startScreen =
  document.getElementById("startScreen");

const testScreen =
  document.getElementById("testScreen");

const submitScreen =
  document.getElementById("submitScreen");

const thankYouScreen =
  document.getElementById("thankYouScreen");


const nameInput =
  document.getElementById("name");

const instagramInput =
  document.getElementById("instagram");

const consentInput =
  document.getElementById("consent");

const registerError =
  document.getElementById("registerError");


const questionNumber =
  document.getElementById("questionNumber");

const progressPercent =
  document.getElementById("progressPercent");

const progressBar =
  document.getElementById("progressBar");

const playAudioBtn =
  document.getElementById("playAudioBtn");

const listenCount =
  document.getElementById("listenCount");

const nextBtn =
  document.getElementById("nextBtn");



// ===========================================
// SCREEN FUNCTION
// ===========================================

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(item => {
      item.classList.remove("active");
    });


  screen.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



// ===========================================
// REGISTER
// ===========================================

document
  .getElementById("continueBtn")
  .addEventListener("click", () => {

    const name =
      nameInput.value.trim();

    const instagram =
      instagramInput.value
        .trim()
        .replace("@", "");


    if (!name) {

      registerError.textContent =
        "กรุณากรอกชื่อ";

      return;

    }


    if (!instagram) {

      registerError.textContent =
        "กรุณากรอก Instagram";

      return;

    }


    if (!consentInput.checked) {

      registerError.textContent =
        "กรุณายินยอมก่อนดำเนินการต่อ";

      return;

    }


    registerError.textContent = "";


    tester.name = name;

    tester.instagram = instagram;


    showScreen(startScreen);

  });



// ===========================================
// START
// ===========================================

document
  .getElementById("startBtn")
  .addEventListener("click", () => {

    currentQuestion = 0;

    testAnswers = [];


    showScreen(testScreen);

    loadQuestion();

  });



// ===========================================
// LOAD QUESTION
// ===========================================

function loadQuestion() {

  const question =
    questions[currentQuestion];

  playsUsed = 0;

  spokenAnswer = "";

  nextBtn.disabled = true;

  questionNumber.textContent =
    `Question ${
      currentQuestion + 1
    } / ${
      questions.length
    }`;

  const progress =
    (
      (currentQuestion + 1) /
      questions.length
    ) * 100;

  progressPercent.textContent =
    `${Math.round(progress)}%`;

  progressBar.style.width =
    `${progress}%`;

  listenCount.textContent =
  `ฟังได้อีก ${question.maxPlays} ครั้ง`;

playAudioBtn.disabled =
  false;

micBtn.disabled =
  true;

spokenResult.textContent =
  "กดไมค์แล้วพูดคำตอบเป็นภาษาอังกฤษ";

}


  


// ===========================================
// TEXT TO SPEECH - ENGLISH US
// ===========================================

let currentSpeech = null;


// เลือกเสียงภาษาอังกฤษ US
function getUSVoice() {

  const voices =
    window.speechSynthesis.getVoices();


  // ลองหาเสียง US ก่อน
  let voice =
    voices.find(v =>
      v.lang === "en-US"
    );


  // ถ้าไม่มี en-US แบบตรงตัว
  // ให้หาเสียงที่ขึ้นต้นด้วย en-US
  if (!voice) {

    voice =
      voices.find(v =>
        v.lang
          .toLowerCase()
          .startsWith("en-us")
      );

  }


  // ถ้ายังไม่มี
  // ใช้ English voice ตัวแรก
  if (!voice) {

    voice =
      voices.find(v =>
        v.lang
          .toLowerCase()
          .startsWith("en")
      );

  }


  return voice;
}



// Browser บางตัวโหลด voices ช้า
window.speechSynthesis.onvoiceschanged =
  () => {

    getUSVoice();

  };



// ===========================================
// PLAY AUDIO BUTTON
// ===========================================

playAudioBtn.addEventListener(
  "click",
  () => {

    const question =
      questions[currentQuestion];


    if (
      playsUsed >=
      question.maxPlays
    ) {
      return;
    }


    // หยุดเสียงเดิมก่อน
    window.speechSynthesis.cancel();


    const speech =
      new SpeechSynthesisUtterance(
        question.spokenText
      );


    // ภาษาอังกฤษ US
    speech.lang =
      "en-US";


    const voice =
      getUSVoice();


    if (voice) {

      speech.voice =
        voice;

    }


    // =====================================
    // SPEED BY QUESTION LEVEL
    // =====================================

    if (currentQuestion <= 6) {

      // Q1-Q7
      speech.rate = 0.92;

    }

    else if (currentQuestion <= 13) {

      // Q8-Q14
      speech.rate = 1.0;

    }

    else {

      // Q15-Q20
      speech.rate = 1.05;

    }


    speech.pitch = 1;

    speech.volume = 1;


    currentSpeech =
      speech;


    // ปิดปุ่มระหว่างกำลังพูด
    playAudioBtn.disabled =
      true;


    speech.onend = () => {

      playsUsed++;
      micBtn.disabled = false;

      const remaining =
        question.maxPlays -
        playsUsed;


      listenCount.textContent =
        `ฟังได้อีก ${remaining} ครั้ง`;


      if (remaining > 0) {

        playAudioBtn.disabled =
          false;

      }

      else {

        playAudioBtn.disabled =
          true;

      }

    };


    speech.onerror =
      event => {

        console.error(
          "Speech synthesis error:",
          event
        );


        playAudioBtn.disabled =
          false;

      };


    window.speechSynthesis.speak(
      speech
    );

  }
);



// ===========================================
// ANSWER
// ===========================================

// ===========================================
// SPEECH RECOGNITION
// ===========================================

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

const recognition =
  SpeechRecognition
    ? new SpeechRecognition()
    : null;

if (recognition) {

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

}


const micBtn =
  document.getElementById("micBtn");

const spokenResult =
  document.getElementById("spokenResult");


micBtn.addEventListener(
  "click",
  () => {

    if (!recognition) {

      alert(
        "อุปกรณ์หรือเบราว์เซอร์นี้ไม่รองรับการพูดตอบ กรุณาใช้ Google Chrome"
      );

      return;
    }

    spokenAnswer = "";

    micBtn.classList.add(
      "listening"
    );

    spokenResult.textContent =
      "กำลังฟัง...";

    recognition.start();

  }
);


recognition.onresult =
  event => {

    spokenAnswer =
      event.results[0][0]
        .transcript
        .toLowerCase()
        .trim();


   spokenResult.textContent =
  `คุณพูด: "${spokenAnswer}"`;

micBtn.disabled = false;

nextBtn.disabled = false;

  };


recognition.onerror =
  event => {

    console.error(
      "Speech recognition error:",
      event.error
    );

    spokenResult.textContent =
  "ไม่ได้ยินคำตอบ กรุณาลองอีกครั้ง";

micBtn.disabled = false;

  };
recognition.onend =
  () => {

    micBtn.classList.remove(
      "listening"
    );

  };



// ===========================================
// NEXT
// ===========================================

nextBtn.addEventListener(
  "click",
  () => {

    if (!spokenAnswer) {
      return;
    }

    testAnswers.push({

      question:
        currentQuestion + 1,

      spokenAnswer:
        spokenAnswer,

      playsUsed:
        playsUsed

    });


    // ปิดไมค์ก่อนเปลี่ยนข้อ
    if (recognition) {

      try {
        recognition.stop();
      }
      catch (error) {
        console.log(
          "Recognition already stopped"
        );
      }

    }

if (recognition) {

  try {

    recognition.stop();

  }

  catch (e) {}

}
    currentQuestion++;


    if (
      currentQuestion <
      questions.length
    ) {

      loadQuestion();

    }

    else {

      showScreen(
        submitScreen
      );

    }

  }
);


// ===========================================
// SUBMIT
// ===========================================

document
  .getElementById("submitBtn")
  .addEventListener(
    "click",
    async () => {

      const result = {

  name: tester.name,

  instagram: tester.instagram,

  spokenAnswers:
    testAnswers.map(
      answer =>
        answer.spokenAnswer
    ),

  listenCount:
    testAnswers.reduce(
      (total, answer) =>
        total + answer.playsUsed,
      0
    )

};

      const submitButton =
        document.getElementById(
          "submitBtn"
        );


      submitButton.disabled =
        true;

      submitButton.textContent =
        "กำลังส่งข้อมูล...";


      try {

        await fetch(
          "https://script.google.com/macros/s/AKfycbzowvMOr6hB_9xFpRiiXU101h5eOHoR1Ox6bvu0j0uxSflzhBUwUPQKuYBmXs6MP3XP/exec",
          {

            method: "POST",

            mode: "no-cors",

            headers: {
              "Content-Type":
                "text/plain;charset=utf-8"
            },

            body:
              JSON.stringify(result)

          }
        );


        localStorage.setItem(
          "180DayTestResult",
          JSON.stringify(result)
        );


        showScreen(
          thankYouScreen
        );

      }

      catch (error) {

        console.error(error);

        alert(
          "ไม่สามารถส่งข้อมูลได้"
        );

        submitButton.disabled =
          false;

        submitButton.textContent =
          "ส่งแบบทดสอบ";

      }

    }
  );


     
