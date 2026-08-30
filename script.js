const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

const birthdayDate = new Date('2026-09-02T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  'You make people feel safe.',
  'Your laugh is unforgettable.',
  'You turn simple days into stories.',
  'You care deeply.',
  'Your vibe is soft and magical.',
  'You are beautifully genuine.',
  'You make memories feel golden.',
  'Your heart is rare.',
  'You are my favorite person to annoy.',
  'You glow without trying.',
  'You make everything better.',
  'You listen like home.',
  'You are effortlessly classy.',
  'You deserve the prettiest life.',
  'You are a whole comfort place.',
  'Your presence feels peaceful.',
  'You are pure main character energy.',
  'You make friendship feel precious.',
  'You are loved more than words.',
  'You bring calm into chaos.',
  'You make every photo feel special.',
  'You have the cutest little habits.',
  'You make boring days memorable.',
  'You are gentle but strong.',
  'Your friendship feels like a blessing.',
  'You understand things without words.',
  'You make silence feel comfortable.',
  'You are a walking soft glow.',
  'You make people believe in kindness.',
  'You are so easy to love.',
  'You make celebrations feel brighter.',
  'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.',
  'You have a beautiful soul.',
  'You make me laugh at random times.',
  'You are honest in the sweetest way.',
  'You are my comfort notification.',
  'You make the world less heavy.',
  'You deserve flowers every day.',
  'You make love feel simple.',
  'You are soft, rare, and precious.',
  'You make every plan more exciting.',
  'You are naturally elegant.',
  'You care even when nobody notices.',
  'You are full of pretty energy.',
  'You make friendship feel magical.',
  'You are the reason behind many smiles.',
  'You make ordinary chats memorable.',
  'You are a safe place.',
  'You look beautiful being yourself.',
  'You make every goodbye feel hard.',
  'You are thoughtful in little ways.',
  'You make life feel warmer.',
  'You are my favorite kind of person.',
  'You make memories worth saving.',
  'You are sunshine with a little drama.',
  'You make birthdays feel meaningful.',
  'You are a beautiful chapter.',
  'You make every corner feel like home.',
  'You are cute without even trying.',
  'You have the prettiest heart.',
  'You make people feel noticed.',
  'You bring sparkle into simple things.',
  'You are love in human form.',
  'You make every story better.',
  'You are someone I am grateful for.',
  'You make emotions feel safe.',
  'You have a rare kind of grace.',
  'You make the day softer.',
  'You are a forever kind of friend.',
  'You make everyone around you happier.',
  'You are pure golden-hour energy.',
  'You make small surprises feel huge.',
  'You are beautifully dramatic sometimes.',
  'You make life feel like a cute vlog.',
  'You are my favorite memory keeper.',
  'You make even chaos look pretty.',
  'You are special in every season.',
  'You make me proud to know you.',
  'You carry love in your details.',
  'You make every laugh feel louder.',
  'You are a little universe of warmth.',
  'You make everything feel less lonely.',
  'You are rare, real, and radiant.',
  'You make wishes feel possible.',
  'You are the prettiest comfort zone.',
  'You make every message feel sweet.',
  'You turn moments into keepsakes.',
  'You are always worth celebrating.',
  'You make kindness look beautiful.',
  'You are a blessing in soft colors.',
  'You make every page of life prettier.',
  'You are deeply loved.',
  'You make my heart smile.',
  'You deserve all the magic.',
  'You make today feel golden.',
  'You are unforgettable.',
  'You are my favorite birthday girl.',
  'You are more loved than 100 reasons can say.'
];

const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

// ============================================================
// 💌 MULTI-LETTER – 3 letters you can flip through
// ============================================================

const envelope = $('#envelope');
const typedLetter = $('#typedLetter');
const letterGreeting = $('#letterGreeting');
const prevBtn = $('#prevLetterBtn');
const nextBtn = $('#nextLetterBtn');
const counter = $('#letterCounter');

const letters = [
  {
    greeting: "Happy Birthday, Meri Lala ❤️ \n\n",

    text: `Lala... Aaj ka din sirf tera birthday nahi hai mere liye.
Aaj mujhe tujhe sirf gifts nahi dene.
Mujhe tujhe thoda sa hum dena hai.
16 June 2024 se lekar aaj tak ka thoda sa hum.

Delhi ke woh 4 din...
Teri beige t-shirt...
Teri black pant...
Aur meri woh cute si Lala.

Tab mujhe bilkul nahi pata tha ki ye ladki meri life ka itna bada part ban jayegi.

Uske baad kitni jagah aaye hum...
Delhi, Lucknow, Bareilly, Chandigarh, Manali, Hyderabad...

Kitni baar lade.
Kitni baar roye.
Kitni baar ek dusre ko manaya.
Kitni baar bas chup chaap saath baithe.

Sab kuch perfect nahi tha.

But har jagah ek cheez same thi...

Tu.

Isliye aaj jo gifts main tujhe dunga na, woh bas gifts nahi hain.

Har ek ke peeche koi chhoti si baat hai.

Koi memory.
Koi feeling.
Kuch tera.
Kuch mera.
Aur bahut kuch humara.

Main chahta hoon aaj main tujhe ek-ek cheez doon...

Aur har cheez ke saath tujhe hamari koi chhoti si story yaad aaye.

Ready hai motki?

Chal...

Start karte hain. ❤️`
  },

  {
    greeting: "Thoda Sa Delhi 👜",
    text: `Sabse pehle...

Mujhe Delhi yaad aati hai.

26 July 2024.

Ek beige t-shirt.
Black pant.
Aur ek chhoti si cute ladki.

Tu mere liye ek purse layi thi.

Shayad tujhe idea bhi nahi hai ki woh mere liye kitna special hai.

Aaj bhi mere liye woh best gifts mein se ek hai.

Kyunki woh tune diya tha.

Isliye aaj main tujhe ek purse de raha hoon.

Ye us purse ki jagah nahi le sakta.

Bas...

Delhi se shuru hui hamari story ka ek chhota sa return gift samajh le.

Happy Birthday, Lala. ❤️`
  },

  {
    greeting: "Hamari Agli Trips Ke Liye 👟",
    text: `Ye dekh ke mujhe hamari saari trips yaad aa gayi.

Delhi.

Lucknow.

Bareilly.

Chandigarh.

Manali.

Hyderabad.

Aur pata nahi kitni jagah abhi baaki hain.

Jo shoes maine tujhe pehle diye the woh kharab ho gaye.

Toh socha...

Naye hone chahiye.

Taaki tu inhe pehen ke aur jagah jaaye.

Aur mere saath aur memories banaye.

Bas ek request hai...

Is baar jaldi kharab mat karna motki. 😂

Ab ye le. ❤️`
  },

  {
    greeting: "Ek Chhoti Si Cheez ❤️",
    text: `Sach bolun?

Mera mann tha tere liye kuch bahut mehenga lene ka.

Nahi le paya.

Aur thoda bura bhi laga.

But phir mujhe laga...

Tujhe kabhi kisi cheez ki value uski price se nahi thi.

Tune mujhe purse diya tha.

Tune mujhe ₹4,000 diye the jab tu khud earn nahi karti thi.

Tune mujhe apna time diya.

Apni care di.

Toh ye bracelet bhi bas ek chhoti si cheez hai.

Mehenga nahi hai.

But mera hai.

Aur tere liye hai.

Jab bhi pehne...

Apne motu ko thoda yaad kar lena. ❤️`
  },

  {
    greeting: "Meri Hardworking Lala Ke Liye 🥤",
    text: `Ye gift thoda practical hai.

But reason bahut personal hai.

Tu kitna kaam karti hai, lala.

Subah kaam pe jaana.

Shaam ko thak ke aana.

Phir bhi mere liye time nikalna.

Kabhi kabhi mann karta hai tujhe bas apne paas rakh loon aur bolun...

"Bas lala, ab kuch mat kar. Main kar lunga."

Pata nahi kab main itna capable ban paunga.

But jab tak nahi ban pata...

Ye toh yaad dila hi sakta hoon ki paani peeti reh. 😂

Apna khayal rakha kar.

Tu mere liye bahut important hai. ❤️`
  },

  {
    greeting: "Chhoti Chhoti Cheezein 🎀",
    text: `Isme bas chhoti-chhoti cheezein hain.

Nail paint.
Clutcher.
Scrunchy.

Kuch bada nahi hai.

But hamari story bhi toh sirf bade moments se nahi bani na?

Woh 8–12 wali calls.

Random messages.

Stupid jokes.

"Sorry lala."

"Gandi hai tu."

"Par meri hai."

Ye sab chhoti-chhoti cheezein hi toh hain jo hum ban gaye.

Isliye ye gift bhi chhota hai...

Bilkul un chhoti cheezon ki tarah jo humari story ko itna bada banati hain.

Le meri Lala. ❤️`
  },

  {
    greeting: "Okay... Ye Gift Nahi Hai 😂",
    text: `Lala...

Ek confession hai.

Ye actually tera hi hai. 😂

Main galti se tera charger Hyderabad le aaya tha.

Toh technically main tujhe gift nahi de raha...

Teri property wapas kar raha hoon. 😂

But aaj tera birthday hai...

Toh thoda credit mujhe bhi milna chahiye na?

So...

Happy Birthday.

Tera charger, meri taraf se. 😂❤️`
  },

  {
    greeting: "Jo Maine Apne Liye Liya Tha 🥜",
    text: `Okay...

Iski story aur funny hai.

Maine ye apne liye liya tha.

Phir tune bola tujhe chahiye.

Aur obviously...

Mera nahi raha. 😂

Tere saath ek problem hai lala...

Main apne liye kuch bhi leta hoon...

Kuch time baad woh tera ho jata hai.

Toh le.

Ab ye bhi tera.

Waise bhi...

Mera kya hai.

Sab tera hi toh hai. ❤️`
  },

  {
    greeting: "Ek Cute Sa Penguin 🐧",
    text: `Isko dekha toh laga...

Tere birthday pe ek cute sa soft toy toh hona hi chahiye.

Iski koi badi story nahi hai.

Bas cute laga.

Aur mujhe laga tujhe pasand aayega.

Kabhi kabhi na...

Kisi cheez ke peeche koi deep reason nahi hota.

Bas...

"I saw this and thought of you."

Bas itna hi kaafi hai.

Toh ye wala bhi tera. ❤️`
  },

  {
    greeting: "Aur Ab... Tofu ❤️",
    text: `Lala...

Ab jo mere paas hai na...

Ye thoda alag hai.

Jab maine ise dekha...

Mujhe tu dikhi.

Pata nahi kyun.

Bas kuch toh tha isme jo bilkul tera laga.

Isliye iska naam bhi maine rakh diya...

Tofu.

Toshi for Tofu. ❤️

Aur maine isko jaan bujhkar last mein rakha.

Kyunki main chahta tha ki sab gifts ke baad...

Jo cheez tujhe mile...

Woh mujhe teri yaad dilaye.

Jab main paas na rahun...

Tofu ko hug kar lena.

Aur mujhe yaad kar lena.

Bas ek problem hai...

Please isko mujhse zyada pyaar mat karna. 😂❤️`
  },

  {
    greeting: "Ek Last Baat, Meri Lala ❤️",
    text: `Ab gifts khatam ho gaye.

But meri baat abhi khatam nahi hui.

Main bas tujhe thank you bolna chahta hoon.

16 June 2024 se lekar aaj tak ke liye.

Delhi ke un 4 dinon ke liye.

Us purse ke liye.

Terrace wale 8–12 calls ke liye.

Lucknow ke us ek din ke liye.

Un ₹4,000 ke liye.

Us pendant aur ring ke liye jo tu aaj bhi pehenti hai.

15 April ke us din ke liye.

Chandigarh mein meri god nahi, teri god mein mujhe rone dene ke liye.

Hamare first birthday together ke liye.

Us jacuzzi ke liye.

Tere letter ke liye.

Us watch wali teri smile ke liye.

Manali ke fights aur momos ke liye.

Meri vomiting jhelne ke liye. 😂

December ki us airport wali raat ke liye.

Tere first flight ke liye.

Hyderabad ke us horrible blanket ke liye.

Floor pe saath sone ke liye.

Mere saath rehne ke liye.

Mujhe sambhalne ke liye.

Mujhe paise dene ke liye jab mere paas nahi hote.

Mujhe daantne ke liye.

Mujhe block karne ke liye.

Phir unblock karne ke liye. 😂

Aur sabse zyada...

Meri life ka itna bada aur beautiful part banne ke liye.

Hum perfect nahi hain.

Kabhi tu galat hoti hai.

Kabhi main.

Kabhi dono.

But somehow...

Hum phir bhi ek dusre ke paas wapas aa jaate hain.

Aur mere liye ye bahut badi baat hai.

Lala...

Mujhe nahi pata future kaisa hoga.

Kitne cities honge.

Kitni fights hongi.

Kitni trips hongi.

Kitne birthdays saath honge.

But mujhe ek cheez pata hai...

Mujhe aur chahiye.

Aur birthdays.

Aur trips.

Aur stupid photos.

Aur hugs.

Aur fights.

Aur "sorry lala."

Aur "gandi hai tu."

Aur "par meri hai."

Mujhe aur hum chahiye.

Aur agar kabhi tujhe lage ki main tujhe utna special feel nahi kara pata jitni tu actually hai...

Toh bas ye yaad rakhna...

Ek stupid motu hai jo tere baare mein ye saari chhoti-chhoti cheezein yaad rakhta hai.

Kyunki tu uske liye bahut important hai.

Tu meri favourite person hai.

Mera heart piece hai.

Meri Lala hai.

Aur koi gift, koi letter, koi website...

Kabhi enough nahi hogi ye batane ke liye ki main tujhse kitna pyaar karta hoon.

Happy Birthday, meri Lala.

I love you.

Always.

— Tera Motu ❤️`
  }
];

let currentLetterIndex = 0;
let isTyping = false;
let typingInterval = null;
let isEnvelopeOpen = false;

function typeLetter(index) {
  // Stop any ongoing typing
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  const letter = letters[index];
  letterGreeting.textContent = letter.greeting;
  typedLetter.textContent = '';
  isTyping = true;

  let charIndex = 0;
  const fullText = letter.text;

  typingInterval = setInterval(() => {
    if (charIndex < fullText.length) {
      // Handle newlines
      if (fullText[charIndex] === '\n') {
        typedLetter.textContent += '\n\n';
        charIndex += 1;
      } else {
        typedLetter.textContent += fullText[charIndex];
        charIndex += 1;
      }
    } else {
      clearInterval(typingInterval);
      typingInterval = null;
      isTyping = false;
      updateButtons();
    }
  }, 30);

  // Update counter
  counter.textContent = `${index + 1} / ${letters.length}`;
  updateButtons();
}

function updateButtons() {
  if (prevBtn) prevBtn.disabled = currentLetterIndex === 0 || isTyping;
  if (nextBtn) nextBtn.disabled = currentLetterIndex === letters.length - 1 || isTyping;
}

// Open envelope on click
envelope?.addEventListener('click', () => {
  if (!isEnvelopeOpen) {
    envelope.classList.add('open');
    isEnvelopeOpen = true;
    // Start typing the first letter
    typeLetter(0);
  }
});

// Next button
nextBtn?.addEventListener('click', () => {
  if (isTyping) return;
  if (currentLetterIndex < letters.length - 1) {
    currentLetterIndex++;
    typeLetter(currentLetterIndex);
  }
});

// Prev button
prevBtn?.addEventListener('click', () => {
  if (isTyping) return;
  if (currentLetterIndex > 0) {
    currentLetterIndex--;
    typeLetter(currentLetterIndex);
  }
});

// Initial state – buttons disabled until envelope opens
if (prevBtn) prevBtn.disabled = true;
if (nextBtn) nextBtn.disabled = true;
counter.textContent = `1 / ${letters.length}`;

// ============================================================
// 🎂 CAKE CUTTING – ORIGINAL LOGIC (INTACT)
// ============================================================
const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for my Bubu 🎉';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});

// ============================================================
// 🎈 BALLOONS (1.3x) + 🎵 BIRTHDAY SONG (LOOP) – CAKE PAGE ONLY
// ============================================================
// ============================================================
// 🎈 BALLOONS (1.3x) + 🎵 BIRTHDAY SONG (LOOP) – CAKE PAGE ONLY
// ============================================================
const isCakePage = document.getElementById('birthdayCake');
if (isCakePage) {

  // ----- balloons with click burst -----
  const container = document.getElementById('balloon-container');

  // List of cute short messages
  const cuteMessages = [
    '🌸 You are magical!',
    '💖 Love you so much!',
    '✨ You glow!',
    '🌷 Simply beautiful!',
    '💕 You make me smile!',
    '🌟 You are a star!',
    '🌺 So precious!',
    '💗 Pure heart!',
    '🌈 You colour my world!',
    '🌹 My favourite!',
    '💝 You are loved!',
    '🌻 Sunshine person!',
    '🌸 You are enough!',
    '💖 Keep shining!',
    '✨ You are rare!',
    '🌷 You are joy!',
    '💕 You are home!',
    '🌟 My whole world!',
    '🌺 You are perfect!',
    '💗 Endless love!',
    '🌈 You are my rainbow!',
    '🌹 You are my rose!',
    '💝 You are my everything!',
    '🌻 Happy birthday!',
    '🌸 You are beautiful!',
    '💖 You are adored!',
    '✨ You are a dream!',
    '🌷 Stay golden!',
    '💕 You are my heart!',
    '🌟 You are the best!',
    '🌺 I am so lucky!',
    '💖 I Love you so Lalli!',
    '💗 You are my peace!',
    '🌈 You make me happy!'
  ];

  function createBalloon() {
    const el = document.createElement('div');
    el.className = 'balloon';
    el.textContent = '🎈';

    // size = (1.8–4.0) * 1.3 = 2.34–5.2 rem
    const size = (1.8 + Math.random() * 2.2) * 1.3;
    el.style.fontSize = size + 'rem';
    el.style.left = Math.random() * 100 + '%';

    const duration = 8 + Math.random() * 10; // 8–18s
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = Math.random() * 6 + 's';

    const hue = Math.floor(Math.random() * 360);
    el.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 6px rgba(255,255,255,0.2))`;

    // ---- Click handler: burst + message ----
    el.addEventListener('click', function(e) {
      // 1) Burst effect with confetti
      const rect = this.getBoundingClientRect();
      const x = (rect.left + rect.width/2) / window.innerWidth;
      const y = (rect.top + rect.height/2) / window.innerHeight;

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { x: x, y: y },
          colors: ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6fb7', '#a29bfe']
        });
      }

      // 2) Floating message
      const msg = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
      const msgEl = document.createElement('div');
      msgEl.className = 'burst-message';
      msgEl.textContent = msg;
      document.body.appendChild(msgEl);

      // remove after animation
      setTimeout(() => {
        msgEl.remove();
      }, 2600);

      // 3) Remove the balloon with a small pop animation
      this.style.transition = 'transform 0.2s, opacity 0.3s';
      this.style.transform = 'scale(2) rotate(20deg)';
      this.style.opacity = '0';
      setTimeout(() => {
        this.remove();
      }, 300);
    });

    container.appendChild(el);

    // auto-remove after its natural float duration (if not popped)
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, (duration + parseFloat(el.style.animationDelay)) * 1000 + 200);
  }

  // initial batch – fixed from 2500 to 25
  for (let i = 0; i < 2500; i++) {
    setTimeout(() => createBalloon(), i * 300);
  }
  setInterval(createBalloon, 2500);

  // ----- birthday song from assets/bday.mp3 (looped) -----
  const audio = new Audio('assets/bday.mp3');  // change to 'asset/bday.mp3' if your folder is 'asset'
  audio.loop = true;
  audio.volume = 0.7;

  function playSong() {
    audio.play().catch(() => {
      // autoplay blocked → start on first click
      document.addEventListener('click', function startAudio() {
        audio.play();
        document.removeEventListener('click', startAudio);
      }, { once: true });
    });
  }

  setTimeout(playSong, 500);
}