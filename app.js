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
},


  // =========================
  // 02
  // =========================

  {
  spokenText:
    "Would you like a bag for that?",

  maxPlays: 2,
},


  // =========================
  // 03
  // =========================

  {
  spokenText:
    "Cash or card?",

  maxPlays: 2,
},


  // =========================
  // 04
  // =========================

 {
  spokenText:
    "Would you like anything else?",

  maxPlays: 2,
},


  // =========================
  // 05
  // =========================

  {
  spokenText:
    "For here or to go?",

  maxPlays: 2,
},


  // =========================
  // 06
  // =========================

  {
  spokenText:
    "Do you want it spicy?",

  maxPlays: 2,
},

  // =========================
  // 07
  // =========================

  {
  spokenText:
    "Could you move over a little?",

  maxPlays: 2,
},


  // =========================
  // 08
  // =========================

  {
  spokenText:
    "Sorry, we're out of chicken today. Would beef be okay?",

  maxPlays: 1,
},


  // =========================
  // 09
  // =========================

  {
  spokenText:
    "Would you mind taking a picture for us?",

  maxPlays: 1,
},


  // =========================
  // 10
  // =========================

  {
  spokenText:
    "Could you keep an eye on my bag for a minute?",

  maxPlays: 1,
},



  // =========================
  // 11
  // =========================

   {
  spokenText:
    "I'm sorry, but this isn't what I ordered.",

  maxPlays: 1,
},


  // =========================
  // 12
  // =========================

   {
  spokenText:
    "Would it be possible to move to another table?",

  maxPlays: 1,
},


  // =========================
  // 13
  // =========================

  {
  spokenText:
    "The next train has been delayed by twenty minutes.",

  maxPlays: 1,
},


  // =========================
  // 14
  // =========================

  {
  spokenText:
    "We're fully booked tonight, but we do have a table available tomorrow.",

  maxPlays: 1,
},

  
// =========================
  // 15 — Coffee shop
  // =========================
  {
    spokenText:
      "We're closing in about ten minutes.",

    maxPlays: 1,
  },


  // =========================
  // 16 — Restaurant
  // =========================
  {
    spokenText:
      "Take your time. There's no rush.",

    maxPlays: 1,
  },


  // =========================
  // 17 — Airport
  // =========================
  {
    spokenText:
      "Boarding's already started, so we should head to the gate.",

    maxPlays: 1,
  },


  // =========================
  // 18 — Hotel
  // =========================
  {
    spokenText:
      "Your room isn't ready yet, but you're welcome to leave your bags with us.",

    maxPlays: 1,
  },


  // =========================
  // 19 — Restaurant (bill)
  // =========================
  {
    spokenText:
      "Would you like separate checks, or should I just put it all on one?",

    maxPlays: 1,
  },


  // =========================
  // 20 — Travel / transport
  // =========================
  {
    spokenText:
      "If we don't leave now, we'll miss the last train.",

    maxPlays: 1,
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
  new SpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = false;
recognition.continuous = false;


const micBtn =
  document.getElementById("micBtn");

const spokenResult =
  document.getElementById("spokenResult");


micBtn.addEventListener(
  "click",
  () => {

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


     
