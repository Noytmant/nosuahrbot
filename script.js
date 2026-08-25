const cards = Array.from(document.querySelectorAll('.ranking-guide, .notice-card, .cmd'));
const langBtns = Array.from(document.querySelectorAll('[data-lang-btn]'));
const toast = document.getElementById('toast');

const translations = {
  "ru": {
    "heroTitle": "[N] | 4.5* - 6.3* | AHR",
    "heroLead": "Актуальные команды лобби, правила постоянного и сезонного ELO и награды. Нажми на команду, чтобы скопировать её.",
    "heroMeta1": "Host rotation",
    "heroMeta2": "Permanent + Seasonal ELO",
    "heroMeta3": "Top 5 rewards",
    "heroCardLabel": "Главный приз сезона",
    "heroCardText": "Топ-5 сезонного рейтинга получают по 1 месяцу osu!supporter в конце сезона.",
    "rankingEyebrow": "Актуальная формула из бота",
    "rankingTitle": "Как начисляется ELO",
    "permanentType": "Постоянный",
    "permanentTitle": "Обычный рейтинг",
    "permanentSummary": "Начисляется после матчей минимум с двумя игроками и не сбрасывается между сезонами.",
    "permanentRule1Title": "Место по score",
    "permanentRule1Text": "При N игроках: 1 место +N ELO, 2 место +(N−1), последнее +1.",
    "permanentRule2Title": "Только результат матча",
    "permanentRule2Text": "Accuracy и combo сохраняются в статистике, но не добавляют отдельные очки в постоянный ELO.",
    "permanentFooter": "Команды: !ns — твоя статистика, !nt — топ-5 постоянного рейтинга.",
    "seasonType": "30 дней",
    "seasonTitle": "Сезонный рейтинг",
    "seasonSummary": "Сезон идёт 30 дней. После завершения таблица архивируется, а новый сезон начинается с нуля.",
    "seasonRule1Title": "Score",
    "seasonRule1Text": "От +N за 1 место до +1 за последнее.",
    "seasonRule2Title": "Accuracy",
    "seasonRule2Text": "От +N за лучшую accuracy до +1 за худшую.",
    "seasonRule3Title": "Combo",
    "seasonRule3Text": "От +N за лучший combo до +1 за худший.",
    "seasonRule4Title": "Динамика места",
    "seasonRule4Text": "Первый сезонный матч +5; улучшил прошлое место +10; сохранил +5; ухудшил −20.",
    "seasonPrizeTitle": "✉ Top 5 → osu!supporter",
    "seasonPrizeText": "Каждый игрок из топ-5 получает 1 месяц osu!supporter.",
    "seasonEligibility": "Для сезонного рейтинга лучший osu!standard performance игрока должен быть на карте ниже 6.8★. Если лучший performance — 6.8★ или выше, постоянный рейтинг всё равно остаётся доступным.",
    "seasonFooter": "Команды: !nss — твой сезон, !nst — топ-5 сезона.",
    "hostOnlyTitle": "Команды только для текущего host",
    "hostOnlyText": "!start и !stop принимает только бот от игрока, у которого сейчас host-права.",
    "skipInfoTitle": "!skip для обычного игрока",
    "skipInfoText": "Обычный игрок не передаёт host: бот один раз показывает оставшееся время AFK. Сам host использует !skip, чтобы добровольно передать очередь.",
    "abortInfoTitle": "!abort — только информация",
    "abortInfoText": "Во время 30-секундного окна загрузки первый !abort показывает, сколько осталось до автоматического abort. Команда сама матч не завершает.",
    "sectionHost": "Host и очередь",
    "cmdStartDesc": "Только host. Запускает матч сразу или ставит таймер от 1 до 3600 секунд.",
    "cmdStopDesc": "Только host. Останавливает автоматический старт и не даёт AFK-таймеру перезапуститься от входа других игроков.",
    "cmdSkipDesc": "Host добровольно передаёт очередь. Обычный игрок получает одно AFK-уведомление с реальным остатком времени.",
    "cmdAutoskipDesc": "Убирает тебя из host-очереди; повторная команда возвращает обратно.",
    "cmdQueueDesc": "Показывает текущую очередь host.",
    "cmdAbortDesc": "Доступна всем только во время 30-секундного loading-window. Первый вызов сообщает реальный остаток времени; сам матч не останавливает.",
    "sectionMap": "Карта и матч",
    "cmdLimitsDesc": "Показывает текущие ограничения лобби на карту.",
    "cmdTagsDesc": "Показывает user/skill tags текущей карты.",
    "cmdMirrorsDesc": "Показывает BeatConnect, Nerinyan и Hinamizawa для текущей карты.",
    "cmdTimeleftDesc": "Показывает расчётное время до конца активного матча.",
    "sectionScores": "Результаты и профиль",
    "cmdLatestDesc": "Показывает твой последний score из этого лобби: score, combo, accuracy, misses, PP и mods.",
    "cmdBestDesc": "Показывает твой лучший osu!standard score на выбранной карте.",
    "cmdPlaytimeDesc": "Показывает время текущего захода и суммарное время в лобби.",
    "sectionRanking": "Рейтинги",
    "cmdNsDesc": "Постоянный Rank, ELO, последнее изменение, матчи, Win Rate и средняя accuracy.",
    "cmdNtDesc": "Показывает топ-5 постоянного рейтинга.",
    "cmdNssDesc": "Проверяет сезонный допуск и показывает твой сезонный Rank/ELO.",
    "cmdNstDesc": "Показывает топ-5 текущего сезона — это места, которые получают osu!supporter.",
    "copied": "Скопировано: {cmd}"
  },
  "en": {
    "heroTitle": "[N] | 4.5* - 6.3* | AHR",
    "heroLead": "Current lobby commands, permanent and seasonal ELO rules, and rewards. Click a command to copy it.",
    "heroMeta1": "Host rotation",
    "heroMeta2": "Permanent + Seasonal ELO",
    "heroMeta3": "Top 5 rewards",
    "heroCardLabel": "Season reward",
    "heroCardText": "The seasonal top 5 each receive 1 month of osu!supporter at the end of the season.",
    "rankingEyebrow": "Current formula used by the bot",
    "rankingTitle": "How ELO is awarded",
    "permanentType": "Permanent",
    "permanentTitle": "Permanent ranking",
    "permanentSummary": "Awarded after matches with at least two players and never reset between seasons.",
    "permanentRule1Title": "Score placement",
    "permanentRule1Text": "With N players: 1st gets +N ELO, 2nd +(N−1), last gets +1.",
    "permanentRule2Title": "Match result only",
    "permanentRule2Text": "Accuracy and combo are kept in statistics but do not add separate permanent ELO points.",
    "permanentFooter": "Commands: !ns — your stats, !nt — permanent top 5.",
    "seasonType": "30 days",
    "seasonTitle": "Season ranking",
    "seasonSummary": "A season lasts 30 days. When it ends, the table is archived and the next season starts from zero.",
    "seasonRule1Title": "Score",
    "seasonRule1Text": "From +N for 1st place down to +1 for last.",
    "seasonRule2Title": "Accuracy",
    "seasonRule2Text": "From +N for the best accuracy down to +1 for the lowest.",
    "seasonRule3Title": "Combo",
    "seasonRule3Text": "From +N for the best combo down to +1 for the lowest.",
    "seasonRule4Title": "Placement trend",
    "seasonRule4Text": "First seasonal match +5; improve previous placement +10; keep it +5; worsen it −20.",
    "seasonPrizeTitle": "✉ Top 5 → osu!supporter",
    "seasonPrizeText": "Every player in the top 5 receives 1 month of osu!supporter.",
    "seasonEligibility": "To enter the seasonal ranking, the player's best osu!standard performance must be on a map below 6.8★. A best performance at 6.8★ or above does not affect the permanent ranking.",
    "seasonFooter": "Commands: !nss — your season stats, !nst — seasonal top 5.",
    "hostOnlyTitle": "Current host only",
    "hostOnlyText": "!start and !stop are accepted only from the player who currently has host privileges.",
    "skipInfoTitle": "!skip for a non-host player",
    "skipInfoText": "A non-host player does not move the queue: the bot shows the remaining AFK time once. The host can use !skip to pass the turn voluntarily.",
    "abortInfoTitle": "!abort is informational",
    "abortInfoText": "During the 30-second loading window, the first !abort shows the real time left before automatic abort. The command itself never aborts the match.",
    "sectionHost": "Host & queue",
    "cmdStartDesc": "Host only. Starts immediately or sets a countdown from 1 to 3600 seconds.",
    "cmdStopDesc": "Host only. Stops the automatic start and keeps the AFK pause from being restarted by other players joining.",
    "cmdSkipDesc": "The host passes the turn voluntarily. A non-host gets one AFK notice with the real remaining time.",
    "cmdAutoskipDesc": "Removes you from the host queue; use it again to rejoin.",
    "cmdQueueDesc": "Shows the current host queue.",
    "cmdAbortDesc": "Available to everyone only during the 30-second loading window. The first call reports the real remaining time and never aborts by itself.",
    "sectionMap": "Map & match",
    "cmdLimitsDesc": "Shows the current lobby map limits.",
    "cmdTagsDesc": "Shows user/skill tags for the selected map.",
    "cmdMirrorsDesc": "Shows BeatConnect, Nerinyan and Hinamizawa links for the selected map.",
    "cmdTimeleftDesc": "Shows the estimated remaining time of the active match.",
    "sectionScores": "Scores & profile",
    "cmdLatestDesc": "Shows your latest score from this lobby: score, combo, accuracy, misses, PP and mods.",
    "cmdBestDesc": "Shows your best osu!standard score on the selected map.",
    "cmdPlaytimeDesc": "Shows time in the current visit and total time spent in the lobby.",
    "sectionRanking": "Rankings",
    "cmdNsDesc": "Permanent Rank, ELO, last change, matches, Win Rate and average accuracy.",
    "cmdNtDesc": "Shows the permanent top 5.",
    "cmdNssDesc": "Checks seasonal eligibility and shows your seasonal Rank/ELO.",
    "cmdNstDesc": "Shows the current seasonal top 5 — these are the rewarded positions.",
    "copied": "Copied: {cmd}"
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
  langBtns.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.langBtn === lang));
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
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast(translations[currentLang].copied.replace('{cmd}', text));
}

function applyStagger() {
  cards.forEach((card, index) => {
    card.style.animation = `fadeUp .42s ease ${index * 20}ms both`;
  });
}

langBtns.forEach((btn) => btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn)));
document.addEventListener('click', (event) => {
  const copyTarget = event.target.closest('[data-copy]');
  if (copyTarget) copyText(copyTarget.dataset.copy);
});

applyLanguage('ru');
applyStagger();
