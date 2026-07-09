const cards = Array.from(document.querySelectorAll('.cmd'));
const langBtns = Array.from(document.querySelectorAll('[data-lang-btn]'));
const toast = document.getElementById('toast');

const translations = {
  "ru": {
    "heroTitle": "[N] | 4.5*-5.8* | Auto Host Rotate",
    "heroLead": "Быстрая и удобная памятка по командам для игроков. Нажимай на команду, чтобы скопировать её в буфер обмена.",
    "heroMeta1": "Игровые команды",
    "heroMeta2": "RU / EN",
    "heroMeta3": "Нажми, чтобы скопировать",
    "heroCardLabel": "Как пользоваться",
    "heroCardValue": "1 клик = копия",
    "heroCardText": "Выбирай нужную команду, нажимай на неё и вставляй в чат лобби.",
    "copied": "Скопировано: {cmd}",
    "sectionMain": "Основные команды",
    "cmdNhelpTitle": "!nhelp",
    "cmdNhelpDesc": "Показывает ссылку на сайт с описанием всех команд.",
    "cmdQueueTitle": "!queue | !q",
    "cmdQueueDesc": "Показывает текущую очередь хоста.",
    "cmdQueuePositionTitle": "!queueposition | !qp",
    "cmdQueuePositionDesc": "Показывает твою позицию в очереди.",
    "cmdStartTitle": "!start | !start 10",
    "cmdStartDesc": "Запуск матча. Можно указать секунды для таймера или проголосовать за старт.",
    "cmdStopTitle": "!stop",
    "cmdStopDesc": "Останавливает таймер автоматического запуска матча.",
    "cmdAbortTitle": "!abort",
    "cmdAbortDesc": "Принудительно прекращает матч, если он завис или не запускается.",
    "cmdSkipTitle": "!skip",
    "cmdSkipDesc": "Пропускает твою очередь или голосует за передачу хоста следующему игроку.",
    "cmdAutoskipTitle": "!autoskip",
    "cmdAutoskipDesc": "Включает или выключает автоматический пропуск твоей очереди.",
    "sectionInfo": "Информация",
    "cmdPlaytimeTitle": "!playtime | !pt",
    "cmdPlaytimeDesc": "Показывает текущее и общее время нахождения в лобби.",
    "cmdTimeleftTitle": "!timeleft | !tl",
    "cmdTimeleftDesc": "Показывает, сколько времени осталось до завершения матча.",
    "cmdMaptagsTitle": "!maptags | !mt",
    "cmdMaptagsDesc": "Показывает user / skill теги карты.",
    "sectionScores": "Результаты",
    "cmdLastscoreTitle": "!lastscore | !ls",
    "cmdLastscoreDesc": "Показывает последний сыгранный результат внутри лобби.",
    "cmdBestscoreTitle": "!bestscore | !bs",
    "cmdBestscoreDesc": "Показывает лучший скор на текущей карте.",
    "sectionRank": "Рейтинговая система",
    "cmdNstatsTitle": "!nstats | !ns",
    "cmdNstatsDesc": "Показывает твою статистику: Rank, ELO, LWS, Matches и Win Rate.",
    "cmdNtopTitle": "!ntop | !nt",
    "cmdNtopDesc": "Показывает топ игроков в рейтинговой системе лобби.",
    "cmdNhowTitle": "!nhow | !nh",
    "cmdNhowDesc": "Показывает, как работает рейтинговая система лобби."
  },
  "en": {
    "heroTitle": "[N] | 4.5*-5.8* | Auto Host Rotate",
    "heroLead": "A quick and clean command guide for players. Click any command to copy it to your clipboard.",
    "heroMeta1": "Player commands",
    "heroMeta2": "RU / EN",
    "heroMeta3": "Click to copy",
    "heroCardLabel": "How to use",
    "heroCardValue": "1 click = copy",
    "heroCardText": "Pick the command you need, click it, and paste it into lobby chat.",
    "copied": "Copied: {cmd}",
    "sectionMain": "Main commands",
    "cmdNhelpTitle": "!nhelp",
    "cmdNhelpDesc": "Shows the website link with all available commands.",
    "cmdQueueTitle": "!queue | !q",
    "cmdQueueDesc": "Shows the current host queue.",
    "cmdQueuePositionTitle": "!queueposition | !qp",
    "cmdQueuePositionDesc": "Shows your position in the queue.",
    "cmdStartTitle": "!start | !start 10",
    "cmdStartDesc": "Starts the match. You can set a countdown in seconds or vote for the start.",
    "cmdStopTitle": "!stop",
    "cmdStopDesc": "Stops the automatic match start timer.",
    "cmdAbortTitle": "!abort",
    "cmdAbortDesc": "Forces the match to stop if it is frozen or not starting.",
    "cmdSkipTitle": "!skip",
    "cmdSkipDesc": "Skips your turn or votes to pass host to the next player.",
    "cmdAutoskipTitle": "!autoskip",
    "cmdAutoskipDesc": "Turns automatic skipping of your host turn on or off.",
    "sectionInfo": "Information",
    "cmdPlaytimeTitle": "!playtime | !pt",
    "cmdPlaytimeDesc": "Shows your current and total time spent in the lobby.",
    "cmdTimeleftTitle": "!timeleft | !tl",
    "cmdTimeleftDesc": "Shows how much time is left until the match ends.",
    "cmdMaptagsTitle": "!maptags | !mt",
    "cmdMaptagsDesc": "Shows user / skill tags for the map.",
    "sectionScores": "Results",
    "cmdLastscoreTitle": "!lastscore | !ls",
    "cmdLastscoreDesc": "Shows the last played result inside the lobby.",
    "cmdBestscoreTitle": "!bestscore | !bs",
    "cmdBestscoreDesc": "Shows your best score on the current map.",
    "sectionRank": "Ranking system",
    "cmdNstatsTitle": "!nstats | !ns",
    "cmdNstatsDesc": "Shows your stats: Rank, ELO, LWS, Matches and Win Rate.",
    "cmdNtopTitle": "!ntop | !nt",
    "cmdNtopDesc": "Shows the top players in the lobby ranking system.",
    "cmdNhowTitle": "!nhow | !nh",
    "cmdNhowDesc": "Explains how the lobby ranking system works."
  }
};

let currentLang = 'ru';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  langBtns.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('is-show'), 1400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(translations[currentLang].copied.replace('{cmd}', text));
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast(translations[currentLang].copied.replace('{cmd}', text));
  }
}

function applyStagger() {
  cards.forEach((card, index) => {
    card.style.animation = `fadeUp .42s ease ${index * 20}ms both`;
  });
}

langBtns.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn));
});

document.addEventListener('click', (event) => {
  const copyTarget = event.target.closest('[data-copy]');
  if (!copyTarget) return;
  copyText(copyTarget.dataset.copy);
});

applyLanguage('ru');
applyStagger();
