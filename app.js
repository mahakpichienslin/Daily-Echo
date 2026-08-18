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
  // 01
  // =========================

  {
  spokenText:
    "Would you like your coffee hot or iced?",

  maxPlays: 2,

  answers: [
    "Iced, please.",
    "Yes, I like coffee.",
    "It's very hot.",
    "Thank you very much."
  ],

  correct: 0
},


  // =========================
  // 02
  // =========================

  {
  spokenText:
    "Would you like a bag for that?",

  maxPlays: 2,

  answers: [
    "I'm looking for my bag.",
    "Yes, I like this bag.",
    "How much is the coffee?",
    "No, thanks. I can carry it."
  ],

  correct: 3
},


  // =========================
  // 03
  // =========================

  {
  spokenText:
    "Cash or card?",

  maxPlays: 2,

  answers: [
    "Card, please.",
    "Twenty dollars.",
    "I don't need any cash.",
    "Yes, I have a card."
  ],

  correct: 0
},


  // =========================
  // 04
  // =========================

 {
  spokenText:
    "Would you like anything else?",

  maxPlays: 2,

  answers: [
    "Yes, it's delicious.",
    "No, that's all, thank you.",
    "I already ate.",
    "It's over there."
  ],

  correct: 1
},


  // =========================
  // 05
  // =========================

  {
  spokenText:
    "For here or to go?",

  maxPlays: 2,

  answers: [
    "I'm going home.",
    "To go, please",
    "I don't know where to go.",
    "Yes, let's go."
  ],

  correct: 1
},


  // =========================
  // 06
  // =========================

  {
  spokenText:
    "Do you want it spicy?",

  maxPlays: 2,

  answers: [
    "I don't like this restaurant.",
    "Yes, it's very expensive.",
    "Just a little, please.",
    "It's too late."
  ],

  correct: 2
},

  // =========================
  // 07
  // =========================

  {
  spokenText:
    "Could you move over a little?",

  maxPlays: 2,

  answers: [
    "Sure.",
    "I'm moving tomorrow.",
    "I don't live here.",
    "I need a taxi."
  ],

  correct: 0
},


  // =========================
  // 08
  // =========================

  {
  spokenText:
    "Sorry, we're out of chicken today. Would beef be okay?",

  maxPlays: 1,

  answers: [
    "Yes, I'd like some chicken.",
    "Sure, beef is fine.",
    "I don't eat breakfast.",
    "That's too expensive."
  ],

  correct: 1
},


  // =========================
  // 09
  // =========================

  {
  spokenText:
    "Would you mind taking a picture for us?",

  maxPlays: 1,

  answers: [
    "I don't like pictures.",
    "I didn't bring my phone.",
    "Of course.",
    "Let's go somewhere else."
  ],

  correct: 2
},


  // =========================
  // 10
  // =========================

  {
  spokenText:
    "Could you keep an eye on my bag for a minute?",

  maxPlays: 1,

  answers: [
    "That's a nice bag.",
    "I need a new bag.",
    "Sure, no problem.",
    "Where did you buy it?"
  ],

  correct: 2
},



  // =========================
  // 11
  // =========================

   {
  spokenText:
    "I'm sorry, but this isn't what I ordered.",

  maxPlays: 1,

  answers: [
    "I ordered it yesterday.",
    "Thank you for your order.",
    "I'm sorry. I'll check it for you.",
    "Yes, that's your order."
  ],

  correct: 2
},


  // =========================
  // 12
  // =========================

   {
  spokenText:
    "Would it be possible to move to another table?",

  maxPlays: 1,

  answers: [
    "This table is expensive.",
    "Let me see what's available.",
    "I don't like tables.",
    "I'm waiting for someone."
  ],

  correct: 1
},


  // =========================
  // 13
  // =========================

  {
  spokenText:
    "The next train has been delayed by twenty minutes.",

  maxPlays: 1,

  answers: [
    "I don't like trains.",
    "Okay, I'll wait.",
    "I arrived twenty minutes ago.",
    "I missed the station."
  ],

  correct: 1
},


  // =========================
  // 14
  // =========================

  {
  spokenText:
    "We're fully booked tonight, but we do have a table available tomorrow.",

  maxPlays: 1,

  answers: [
    "Tomorrow works for me.",
    "Great, I'll sit here tonight.",
    "I already finished eating.",
    "I'd like to pay now."
  ],

  correct: 0
},

  
// =========================
  // 15 — Coffee shop
  // =========================
  {
    spokenText:
      "We're closing in about ten minutes.",

    maxPlays: 1,

    answers: [
      "Great, I'll order more coffee.",
      "What time do you open?",
      "I'll stay a little longer.",
      "Okay, I'll finish up."
    ],

    correct: 3
  },


  // =========================
  // 16 — Restaurant
  // =========================
  {
    spokenText:
      "Take your time. There's no rush.",

    maxPlays: 1,

    answers: [
      "Thanks, no rush then.",
      "Okay, I'll finish as quickly as possible.",
      "Should we order now?",
      "Let's leave right now."
    ],

    correct: 0
  },


  // =========================
  // 17 — Airport
  // =========================
  {
    spokenText:
      "Boarding's already started, so we should head to the gate.",

    maxPlays: 1,

    answers: [
      "The flight hasn't landed yet.",
      "Let's grab a coffee first.",
      "Okay, let's go.",
      "I'll wait right here."
    ],

    correct: 2
  },


  // =========================
  // 18 — Hotel
  // =========================
  {
    spokenText:
      "Your room isn't ready yet, but you're welcome to leave your bags with us.",

    maxPlays: 1,

    answers: [
      "I'll take my bags up now.",
      "I don't need a room.",
      "I'd like to check out.",
      "Thanks, I'll leave them here."
    ],

    correct: 3
  },


  // =========================
  // 19 — Restaurant (bill)
  // =========================
  {
    spokenText:
      "Would you like separate checks, or should I just put it all on one?",

    maxPlays: 1,

    answers: [
      "I'd like a table for one.",
      "One check is fine, we'll split it later.",
      "Could we see the dessert menu?",
      "I already paid at the counter."
    ],

    correct: 1
  },


  // =========================
  // 20 — Travel / transport
  // =========================
  {
    spokenText:
      "If we don't leave now, we'll miss the last train.",

    maxPlays: 1,

    answers: [
      "I don't usually take the train.",
      "Let's wait a bit longer.",
      "Then we'd better get moving.",
      "The station's not far from here."
    ],

    correct: 2
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

let selectedAnswer = null;

let playsUsed = 0;

let score = 0;


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

const answersContainer =
  document.getElementById("answersContainer");

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

    score = 0;

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


  selectedAnswer = null;

  playsUsed = 0;


  nextBtn.disabled = true;


  questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;


  const progress =
    ((currentQuestion + 1) / questions.length) * 100;


  progressPercent.textContent =
    `${Math.round(progress)}%`;


  progressBar.style.width =
    `${progress}%`;


  listenCount.textContent =
    `ฟังได้อีก ${question.maxPlays} ครั้ง`;


  playAudioBtn.disabled = false;


  // ล้างคำตอบเก่า

  answersContainer.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");


      button.className =
        "answer-btn";


      button.textContent =
        answer;


      button.addEventListener(
        "click",
        () => {

          selectAnswer(
            button,
            index
          );

        }
      );


      answersContainer.appendChild(
        button
      );

    }
  );

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

function selectAnswer(
  button,
  index
) {

  selectedAnswer = index;


  document
    .querySelectorAll(".answer-btn")
    .forEach(btn => {

      btn.classList.remove(
        "selected"
      );

    });


  button.classList.add(
    "selected"
  );


  nextBtn.disabled = false;

}



// ===========================================
// NEXT
// ===========================================

nextBtn.addEventListener(
  "click",
  () => {

    if (selectedAnswer === null) {
      return;
    }


    const question =
      questions[currentQuestion];


    const isCorrect =
      selectedAnswer ===
      question.correct;


    if (isCorrect) {
      score++;
    }


    // เก็บรายละเอียดคำตอบ

    testAnswers.push({

      question:
        currentQuestion + 1,

      selected:
        selectedAnswer,

      correct:
        question.correct,

      isCorrect:
        isCorrect,

      playsUsed:
        playsUsed

    });


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

        score: score,

        answers: testAnswers.map(
          answer =>
            answer.isCorrect
              ? 1
              : 0
        ),

        listenCount: testAnswers.reduce(
          (total, answer) =>
            total +
            answer.playsUsed,
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


     
