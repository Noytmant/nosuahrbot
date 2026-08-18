const cards = Array.from(document.querySelectorAll('.ranking-guide, .cmd'));
const langBtns = Array.from(document.querySelectorAll('[data-lang-btn]'));
const toast = document.getElementById('toast');

const translations = {
  "ru": {
    "heroTitle": "[N] | 4.5* - 6.3* | S1 | !nhelp",
    "heroLead": "Быстрая и удобная памятка по командам для игроков. Нажимай на команду, чтобы скопировать её в буфер обмена.",
    "heroMeta1": "Игровые команды",
    "heroMeta2": "RU / EN",
    "heroMeta3": "Нажми, чтобы скопировать",
    "heroCardLabel": "Как пользоваться",
    "heroCardValue": "1 клик = копия",
    "heroCardText": "Выбирай нужную команду, нажимай на неё и вставляй в чат лобби.",
    "rankingEyebrow": "Два независимых рейтинга",
    "rankingTitle": "Как начисляется ELO",
    "permanentType": "Без вайпов",
    "permanentTitle": "Постоянный рейтинг",
    "permanentSummary": "Это твоя долгосрочная история в лобби. Она не сбрасывается при смене сезона.",
    "permanentRule1Title": "Место по скору",
    "permanentRule1Text": "От +N за 1 место до +1 за последнее",
    "permanentRule2Title": "Бонусы ивентов",
    "permanentRule2Text": "+N от объявленного ивента",
    "permanentFooter": "Статистика: ELO, Last ELO, серии, матчи, Win Rate и средняя accuracy",
    "seasonType": "1 месяц",
    "seasonTitle": "Сезонный рейтинг",
    "seasonSummary": "Каждый матч даёт сумму пяти компонентов. Через месяц сезон архивируется, а новый начинается с нуля.",
    "seasonRule1Title": "Место по скору",
    "seasonRule1Text": "От +N за 1 место до +1 за последнее",
    "seasonRule2Title": "Бонусы ивентов",
    "seasonRule2Text": "+N от объявленного ивента",
    "seasonRule3Title": "Аккуратность",
    "seasonRule3Text": "От +N за высшую точность из игроков до +1 за низкую",
    "seasonRule4Title": "Позиция в матче",
    "seasonRule4Text": "Повышай свою позицию в матче, чтобы получить +2, в противном случае -2. Удержание позиции даёт +1",
    "seasonRule5Title": "Время в игре",
    "seasonRule5Text": "Получай +1 за каждые 5 минут проведенные в матчах этого лобби",
    "seasonPrizeTitle": "😎 Топ 5 получают osu!supporter",
    "seasonPrizeText": "По 1 месяцу в конце сезона.",
    "seasonEligibility": "Для допуска бот проверяет 2 лучших osu!standard результата. Результат на карте 6.70 или выше исключает вас только из сезона, ввиду баланса игроков по установленному максимальному ограничению SR. Постоянный рейтинг остаётся доступным.",
    "seasonFooter": "Статистика: Season Rank, ELO и Last ELO",
    "copied": "Скопировано: {cmd}",
    "sectionMain": "Основные команды",
    "cmdNhelpTitle": "!nhelp | !info",
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
    "cmdMirrorsTitle": "!mirrors | !mr",
    "cmdMirrorsDesc": "Показывает альтернативные ссылки для скачивания текущей карты.",
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
    "cmdNstatsDesc": "Показывает Rank, ELO, последний ELO, лучшую серию побед, матчи, Win Rate и среднюю точность.",
    "cmdNtopTitle": "!ntop | !nt",
    "cmdNtopDesc": "Показывает топ игроков в рейтинговой системе лобби.",
    "cmdNhowTitle": "!nhow | !nh",
    "cmdNhowDesc": "Показывает, как работает постоянная рейтинговая система лобби.",
    "sectionSeason": "Сезонный рейтинг S1",
    "cmdNsstatsTitle": "!nsstats | !nss",
    "cmdNsstatsDesc": "Показывает только твой Season rank, ELO и последний полученный ELO в текущем сезоне.",
    "cmdNstopTitle": "!nstop | !nst",
    "cmdNstopDesc": "Показывает пять лучших игроков текущего сезона.",
    "cmdNshowTitle": "!nshow | !nsh",
    "cmdNshowDesc": "Объясняет сезонные правила, призы топ-5 и проверку двух лучших результатов."
  },
  "en": {
    "heroTitle": "[N] | 4.5* - 6.3* | S1 | !nhelp",
    "heroLead": "A quick and clean command guide for players. Click any command to copy it to your clipboard.",
    "heroMeta1": "Player commands",
    "heroMeta2": "RU / EN",
    "heroMeta3": "Click to copy",
    "heroCardLabel": "How to use",
    "heroCardValue": "1 click = copy",
    "heroCardText": "Pick the command you need, click it, and paste it into lobby chat.",
    "rankingEyebrow": "Two independent rankings",
    "rankingTitle": "How ELO is awarded",
    "permanentType": "No wipes",
    "permanentTitle": "Permanent ranking",
    "permanentSummary": "This is your long-term lobby history. It is not reset when the season changes.",
    "permanentRule1Title": "Score placement",
    "permanentRule1Text": "From +N for 1st place down to +1 for last place",
    "permanentRule2Title": "Event bonuses",
    "permanentRule2Text": "+N from the announced event",
    "permanentFooter": "Stats: ELO, Last ELO, streaks, matches, Win Rate, and average accuracy",
    "seasonType": "1 month",
    "seasonTitle": "Season ranking",
    "seasonSummary": "Each match awards the sum of five components. After one month the season is archived and a new one starts from zero.",
    "seasonRule1Title": "Score placement",
    "seasonRule1Text": "From +N for 1st place down to +1 for last place",
    "seasonRule2Title": "Event bonuses",
    "seasonRule2Text": "+N from the announced event",
    "seasonRule3Title": "Accuracy",
    "seasonRule3Text": "From +N for the highest accuracy among players down to +1 for the lowest",
    "seasonRule4Title": "Match position",
    "seasonRule4Text": "Improve your match position to earn +2; getting worse gives -2. Holding your position gives +1",
    "seasonRule5Title": "Time played",
    "seasonRule5Text": "Earn +1 for every 5 minutes spent in matches in this lobby",
    "seasonPrizeTitle": "😎 Top 5 receive osu!supporter",
    "seasonPrizeText": "One month each at the end of the season.",
    "seasonEligibility": "To qualify, the bot checks your 2 best osu!standard scores. A result on a 6.70 or harder map excludes you only from the season to preserve balance around the lobby's maximum SR limit. The permanent ranking remains available.",
    "seasonFooter": "Stats: Season Rank, ELO, and Last ELO",
    "copied": "Copied: {cmd}",
    "sectionMain": "Main commands",
    "cmdNhelpTitle": "!nhelp | !info",
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
    "cmdMirrorsTitle": "!mirrors | !mr",
    "cmdMirrorsDesc": "Shows alternative download links for the current map.",
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
    "cmdNstatsDesc": "Shows Rank, ELO, Last ELO, longest win streak, matches, win rate, and average accuracy.",
    "cmdNtopTitle": "!ntop | !nt",
    "cmdNtopDesc": "Shows the top players in the lobby ranking system.",
    "cmdNhowTitle": "!nhow | !nh",
    "cmdNhowDesc": "Explains how the permanent lobby ranking works.",
    "sectionSeason": "Season ranking S1",
    "cmdNsstatsTitle": "!nsstats | !nss",
    "cmdNsstatsDesc": "Shows only your Season rank, ELO, and Last ELO for the current season.",
    "cmdNstopTitle": "!nstop | !nst",
    "cmdNstopDesc": "Shows the current season's top five players.",
    "cmdNshowTitle": "!nshow | !nsh",
    "cmdNshowDesc": "Explains the season rules, top-five prizes, and two-best-score profile check."
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
