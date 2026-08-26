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
    "rankingTitle": "Как начисляется ELO",
    "permanentType": "Постоянный",
    "permanentTitle": "Обычный рейтинг",
    "permanentSummary": "Постоянный рейтинг, он не сбрасывается между сезонами.",
    "permanentRule1Title": "Score",
    "permanentRule1Text": "От +N за 1 место до +1 за последнее.",
    "permanentFooter": "Rank, ELO, Matches, Win Rate, Avg Acc. Команда !ns - посмотреть свою статистику, !nt - посмотреть топ 5 игроков.",
    "seasonType": "30 дней",
    "seasonTitle": "Сезонный рейтинг",
    "seasonSummary": "Сезон идёт 30 дней. После завершения таблица архивируется, а новый сезон начинается с нуля.",
    "seasonRule1Title": "Score",
    "seasonRule1Text": "От +N за 1 место до +1 за последнее.",
    "seasonRule2Title": "Accuracy",
    "seasonRule2Text": "От +N за лучшую accuracy до +1 за худшую.",
    "seasonRule3Title": "Combo",
    "seasonRule3Text": "От +N за лучший combo до +1 за худший.",
    "seasonRule4Title": "Position",
    "seasonRule4Text": "Улучшение позиции +10; Удержание +5; Ухудшение −20.",
    "seasonPrizeTitle": "✉ Top 5 → osu!supporter",
    "seasonPrizeText": "Каждый игрок из топ-5 получает 1 месяц osu!supporter.",
    "seasonEligibility": "Для сезонного рейтинга лучший osu!standard performance игрока должен быть на карте ниже 6.8★. Если лучший performance — 6.8★ или выше, постоянный рейтинг всё равно остаётся доступным.",
    "seasonFooter": "Rank, ELO. Команда !nss - посмотреть свою статистику, !nst - посмотреть топ 5 игроков.",
    "hostOnlyTitle": "Информация",
    "hostOnlyText": "Команды !start и !stop может использовать только игрок с правами host.",
    "skipInfoTitle": "Информация",
    "skipInfoText": "Игрок без host прав может использовать эту команду, чтобы получить информацию о текущем host. Его нельзя пропустить, это будет сделано автоматически по истечению определённого времени. Сам host использует !skip, чтобы добровольно передать очередь.",
    "abortInfoTitle": "Информация",
    "abortInfoText": "Во время 30-секундного окна загрузки !abort показывает, сколько осталось до автоматического принудительного завершения матча.",
    "sectionHost": "Основные команды",
    "cmdStartDesc": "Запустить матч сразу или указать время в секундах. Например !start 10, матч будет запущен по истечению 10 секунд.",
    "cmdStopDesc": "Останавливает автоматический старт матча.",
    "cmdSkipDesc": "Host может добровольно передать свою очередь. Обычный игрок может получить информацию о том, когда host будет пропущен автоматически.",
    "cmdAutoskipDesc": "Убирает тебя из host очереди. Повторная команда возвращает обратно.",
    "cmdQueueDesc": "Показывает текущую очередь host.",
    "cmdAbortDesc": "Вы получите информацию о том, когда матч будет завершён автоматически, если кому-то не удалось загрузится в течении 30 секунд после старта.",
    "sectionMap": "Матч",
    "cmdLimitsDesc": "Показывает текущие ограничения лобби на карту.",
    "cmdTagsDesc": "Показывает user/skill tags текущей карты.",
    "cmdMirrorsDesc": "Показывает список сайтов, чтобы загрузить карту, если обычные методы не эффективны.",
    "cmdTimeleftDesc": "Показывает расчётное время до конца активного матча.",
    "sectionScores": "Результаты",
    "cmdLatestDesc": "Показывает твой последний score в этом лобби.",
    "cmdBestDesc": "Показывает твой лучший score на выбранной карте.",
    "cmdPlaytimeDesc": "Показывает твоё текущее и общее игровое время в этом лобби.",
    "sectionRanking": "Рейтинг",
    "cmdNsDesc": "Показывает твою постоянную статистику в этом лобби.",
    "cmdNtDesc": "Показывает топ 5 игроков постоянного рейтинга.",
    "cmdNssDesc": "Проверяет сезонный допуск и показывает твой сезонный рейтинг.",
    "cmdNstDesc": "Показывает топ 5 игроков сезонного рейтинга. Все игроки из топ 5 получают по 1 месяцу osu!supporter в конце сезона.",
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
    "rankingTitle": "How ELO is awarded",
    "permanentType": "Permanent",
    "permanentTitle": "Permanent ranking",
    "permanentSummary": "A permanent ranking that does not reset between seasons.",
    "permanentRule1Title": "Score",
    "permanentRule1Text": "From +N for 1st place down to +1 for last place.",
    "permanentFooter": "Rank, ELO, Matches, Win Rate, Avg Acc. Use !ns to view your statistics and !nt to view the top 5 players.",
    "seasonType": "30 days",
    "seasonTitle": "Season ranking",
    "seasonSummary": "A season lasts 30 days. When it ends, the table is archived and the next season starts from zero.",
    "seasonRule1Title": "Score",
    "seasonRule1Text": "From +N for 1st place down to +1 for last.",
    "seasonRule2Title": "Accuracy",
    "seasonRule2Text": "From +N for the best accuracy down to +1 for the lowest.",
    "seasonRule3Title": "Combo",
    "seasonRule3Text": "From +N for the best combo down to +1 for the lowest.",
    "seasonRule4Title": "Position",
    "seasonRule4Text": "Improve your position +10; keep your position +5; drop in position −20.",
    "seasonPrizeTitle": "✉ Top 5 → osu!supporter",
    "seasonPrizeText": "Every player in the top 5 receives 1 month of osu!supporter.",
    "seasonEligibility": "To enter the seasonal ranking, the player's best osu!standard performance must be on a map below 6.8★. A best performance at 6.8★ or above does not affect the permanent ranking.",
    "seasonFooter": "Rank, ELO. Use !nss to view your statistics and !nst to view the top 5 players.",
    "hostOnlyTitle": "Information",
    "hostOnlyText": "The !start and !stop commands can only be used by the player with host privileges.",
    "skipInfoTitle": "Information",
    "skipInfoText": "A player without host privileges can use this command to get information about the current host. They cannot skip the host manually; this happens automatically after a certain amount of time. The host can use !skip to pass their turn voluntarily.",
    "abortInfoTitle": "Information",
    "abortInfoText": "During the 30-second loading window, !abort shows how much time remains before the match is automatically force-ended.",
    "sectionHost": "Main commands",
    "cmdStartDesc": "Start the match immediately or specify a time in seconds. For example, !start 10 starts the match after 10 seconds.",
    "cmdStopDesc": "Stops the automatic match start.",
    "cmdSkipDesc": "The host can voluntarily pass their turn. A non-host player can get information about when the host will be skipped automatically.",
    "cmdAutoskipDesc": "Removes you from the host queue. Use the command again to rejoin it.",
    "cmdQueueDesc": "Shows the current host queue.",
    "cmdAbortDesc": "Shows when the match will be ended automatically if someone fails to load within 30 seconds after the match starts.",
    "sectionMap": "Match",
    "cmdLimitsDesc": "Shows the current lobby map limits.",
    "cmdTagsDesc": "Shows user/skill tags for the selected map.",
    "cmdMirrorsDesc": "Shows a list of websites where you can download the map if the usual methods are not effective.",
    "cmdTimeleftDesc": "Shows the estimated remaining time of the active match.",
    "sectionScores": "Results",
    "cmdLatestDesc": "Shows your latest score in this lobby.",
    "cmdBestDesc": "Shows your best score on the selected map.",
    "cmdPlaytimeDesc": "Shows your current and total playtime in this lobby.",
    "sectionRanking": "Ranking",
    "cmdNsDesc": "Shows your permanent statistics in this lobby.",
    "cmdNtDesc": "Shows the top 5 players in the permanent ranking.",
    "cmdNssDesc": "Checks seasonal eligibility and shows your seasonal ranking.",
    "cmdNstDesc": "Shows the top 5 players in the seasonal ranking. Every player in the top 5 receives 1 month of osu!supporter at the end of the season.",
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
