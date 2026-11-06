const copy = {
  ru: {
    eyebrow: 'osu! AHR · игровое лобби', heroTitle: '[N] | 4.5★ – 6.6★ | AHR',
    heroLead: 'Всё нужное для игры: очередь, рейтинги и команды в одном месте. Сейчас лобби работает между сезонами.',
    exploreCommands: 'Найти команду', howItWorks: 'Как начисляются очки', navStatus: 'Сезоны', navRules: 'Рейтинг', navCommands: 'Команды',
    seasonEyebrow: 'СЕЗОНЫ · ПАУЗА', seasonTitle: 'Первый сезон завершён. Скоро S2.',
    seasonText: 'Спасибо всем, кто участвовал! Результаты S1 сохранены. Второй сезон скоро начнётся. Пока играем без сезонного ELO; обычный рейтинг и анализ навыков продолжают работать.',
    seasonNext: 'S2 · скоро', rulesEyebrow: 'РЕЙТИНГ', rulesTitle: 'За что начисляются очки',
    rulesIntro: 'Обычный рейтинг работает сейчас. Сезонные очки вернутся вместе с S2.',
    regularType: 'ПОСТОЯННЫЙ', regularState: 'РАБОТАЕТ СЕЙЧАС', regularTitle: 'Обычный рейтинг',
    regularIntro: 'ELO начисляется по месту в матче и не сбрасывается между сезонами.',
    regularPlaceTitle: 'Место по score', regularPlaceText: 'Если играли 5 человек: первое место получает +5 ELO, последнее +1.',
    regularStatsTitle: 'Личная статистика', regularStatsText: 'Матчи, средняя accuracy и win rate меняются с каждой игрой.',
    regularNote: 'Для начисления ELO нужны минимум 2 игрока в матче. Свой рейтинг — !ns, топ-5 — !nt.',
    seasonType: 'СЕЗОННЫЙ', seasonState: 'S2 СКОРО', seasonRatingTitle: 'Сезонный рейтинг',
    seasonRatingIntro: 'Второй сезон продлится 30 дней. Очки будут складываться из четырёх частей:',
    seasonScore: 'От +N за первое место до +1 за последнее.',
    seasonAcc: 'От +N за лучшую accuracy до +1 за последнюю.',
    seasonCombo: 'От +N за лучший combo до +1 за последний.',
    seasonPositionTitle: 'Удержание места', seasonPosition: 'Улучшил место: +10; удержал: +5; опустился: −20.',
    seasonNote: 'Для допуска карта лучшего результата игрока должна быть ниже 6.8★. ELO начисляется при 2+ игроках в матче. Когда сезон начнётся: !nss и !nst.',
    seasonPrize: 'Топ-5 сезонного рейтинга получат по месяцу osu!supporter.',
    commandsEyebrow: 'ШПАРГАЛКА', commandsTitle: 'Команды лобби', commandsIntro: 'Найди нужную команду и нажми, чтобы скопировать её.',
    searchLabel: 'Поиск команд', searchPlaceholder: 'Поиск команды или действия…', nothingFound: 'Ничего не нашлось. Попробуй другой запрос.',
    footerText: 'Удачной игры и хороших карт', backToTop: 'Наверх',
    all: 'Все', match: 'Матч', maps: 'Карты', scores: 'Результаты', ranking: 'Рейтинг', skills: 'Навыки',
    commandCount: n => `${n} команд`, copyLabel: cmd => `Скопировать ${cmd}`, copied: cmd => `Скопировано: ${cmd}`, copyError: 'Не удалось скопировать. Выдели команду вручную.'
  },
  en: {
    eyebrow: 'osu! AHR · multiplayer lobby', heroTitle: '[N] | 4.5★ – 6.6★ | AHR',
    heroLead: 'Queue, rankings and commands in one place. The lobby is currently between seasons.',
    exploreCommands: 'Browse commands', howItWorks: 'How points work', navStatus: 'Seasons', navRules: 'Ranking', navCommands: 'Commands',
    seasonEyebrow: 'SEASONS · BREAK', seasonTitle: 'Season 1 is complete. S2 is next.',
    seasonText: 'Thanks to everyone who played! S1 results are archived. Season 2 is coming soon. Until then, seasonal ELO is paused; permanent ranking and skill analysis continue.',
    seasonNext: 'S2 · soon', rulesEyebrow: 'RANKING', rulesTitle: 'How points are earned',
    rulesIntro: 'The permanent ranking is active now. Seasonal points return with S2.',
    regularType: 'PERMANENT', regularState: 'ACTIVE NOW', regularTitle: 'Permanent ranking',
    regularIntro: 'ELO is awarded by match placement and never resets between seasons.',
    regularPlaceTitle: 'Score placement', regularPlaceText: 'With 5 players: first place gets +5 ELO, last place gets +1.',
    regularStatsTitle: 'Your statistics', regularStatsText: 'Matches, average accuracy and win rate update with every game.',
    regularNote: 'At least 2 players must take part to earn ELO. Your stats: !ns; top 5: !nt.',
    seasonType: 'SEASONAL', seasonState: 'S2 COMING SOON', seasonRatingTitle: 'Seasonal ranking',
    seasonRatingIntro: 'Season 2 will last 30 days. Points come from four parts:',
    seasonScore: 'From +N for first place to +1 for last.',
    seasonAcc: 'From +N for best accuracy to +1 for lowest.',
    seasonCombo: 'From +N for best combo to +1 for lowest.',
    seasonPositionTitle: 'Holding your place', seasonPosition: 'Improve: +10; hold: +5; drop: −20.',
    seasonNote: 'Eligibility: the map of your best performance must be below 6.8★. ELO requires 2+ match players. Once S2 begins: !nss and !nst.',
    seasonPrize: 'The seasonal top 5 each receive one month of osu!supporter.',
    commandsEyebrow: 'QUICK REFERENCE', commandsTitle: 'Lobby commands', commandsIntro: 'Find a command and tap it to copy.',
    searchLabel: 'Search commands', searchPlaceholder: 'Search commands or actions…', nothingFound: 'No matches. Try a different search.',
    footerText: 'Have fun and find good maps', backToTop: 'Back to top',
    all: 'All', match: 'Match', maps: 'Maps', scores: 'Scores', ranking: 'Ranking', skills: 'Skills',
    commandCount: n => `${n} commands`, copyLabel: cmd => `Copy ${cmd}`, copied: cmd => `Copied: ${cmd}`, copyError: 'Could not copy. Select the command manually.'
  }
};

const commands = [
  { cat: 'match', cmds: ['!start', '!start 30'], ru: 'Host: начать матч сейчас или через указанное число секунд.', en: 'Host: start now or after the specified seconds.' },
  { cat: 'match', cmds: ['!stop'], ru: 'Host: приостановить таймер автоматического старта.', en: 'Host: pause the automatic start timer.' },
  { cat: 'match', cmds: ['!skip', '!s'], ru: 'Host: добровольно передать очередь следующему игроку.', en: 'Host: voluntarily pass the turn to the next player.' },
  { cat: 'match', cmds: ['!autoskip', '!as'], ru: 'Выйти из host-очереди или вернуться в неё.', en: 'Leave or rejoin the host queue.' },
  { cat: 'match', cmds: ['!queue', '!q'], ru: 'Посмотреть очередь на выбор карты.', en: 'See the map-pick queue.' },
  { cat: 'match', cmds: ['!timeleft', '!tl'], ru: 'Узнать оставшееся время текущего матча.', en: 'Check the remaining time in the current match.' },
  { cat: 'match', cmds: ['!abort'], ru: 'Узнать статус автоматического завершения матча.', en: 'Check the automatic match-abort status.' },
  { cat: 'maps', cmds: ['!r'], ru: 'Проверить текущие лимиты карт.', en: 'Check the current map limits.' },
  { cat: 'maps', cmds: ['!usertags', '!ut'], ru: 'Посмотреть теги выбранной карты.', en: 'See the selected map’s tags.' },
  { cat: 'maps', cmds: ['!mirrors', '!mr'], ru: 'Получить ссылки для загрузки карты.', en: 'Get alternative map download links.' },
  { cat: 'scores', cmds: ['!latestscore', '!ls'], ru: 'Твой последний результат в этом лобби.', en: 'Your latest result in this lobby.' },
  { cat: 'scores', cmds: ['!bestscore', '!bs'], ru: 'Твой лучший результат на выбранной карте.', en: 'Your best result on the selected map.' },
  { cat: 'scores', cmds: ['!playtime', '!pt'], ru: 'Сколько ты играешь сейчас и всего.', en: 'Your current and total time played here.' },
  { cat: 'ranking', cmds: ['!ns'], ru: 'Твоя статистика постоянного рейтинга.', en: 'Your permanent ranking statistics.' },
  { cat: 'ranking', cmds: ['!nt'], ru: 'Топ-5 постоянного рейтинга.', en: 'Permanent ranking top 5.' },
  { cat: 'ranking', cmds: ['!nss'], ru: 'Твоя статистика активного сезона (когда S2 начнётся).', en: 'Your active-season stats (when S2 begins).' },
  { cat: 'ranking', cmds: ['!nst'], ru: 'Топ-5 активного сезона (когда S2 начнётся).', en: 'Active-season top 5 (when S2 begins).' },
  { cat: 'skills', cmds: ['!skill', '!sk'], ru: 'Общий профиль механики и стиль игры.', en: 'Your overall mechanics profile and playstyle.' },
  { cat: 'skills', cmds: ['!skill last', '!skl'], ru: 'Анализ последнего доступного реплея.', en: 'Analysis of your latest available replay.' },
  { cat: 'skills', cmds: ['!skill trend', '!skt'], ru: 'Как менялись твои навыки в последних играх.', en: 'How your skills have changed across recent plays.' }
];

const cats = ['all', 'match', 'maps', 'scores', 'ranking', 'skills'];
const grid = document.getElementById('command-grid');
const filters = document.getElementById('command-filters');
const search = document.getElementById('command-search');
const toast = document.getElementById('toast');
let lang = 'ru';
let activeCat = 'all';
let toastTimer;

function renderCommands() {
  const query = search.value.trim().toLocaleLowerCase();
  const shown = commands.filter(item => (activeCat === 'all' || item.cat === activeCat) &&
    (!query || [...item.cmds, item.ru, item.en, copy.ru[item.cat], copy.en[item.cat]].join(' ').toLocaleLowerCase().includes(query)));
  grid.replaceChildren();
  for (const item of shown) {
    const card = document.createElement('article');
    card.className = 'command-card';
    const category = document.createElement('span'); category.className = 'command-card__cat'; category.textContent = copy[lang][item.cat];
    const name = document.createElement('h3'); name.textContent = item.cmds.join('  ·  ');
    const desc = document.createElement('p'); desc.textContent = item[lang];
    const buttons = document.createElement('div');
    buttons.className = item.cmds.length === 1 ? 'command-card__buttons is-single' : 'command-card__buttons';
    for (const cmd of item.cmds) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'copy-command';
      button.dataset.copy = cmd; button.textContent = cmd;
      button.setAttribute('aria-label', copy[lang].copyLabel(cmd));
      buttons.append(button);
    }
    card.append(category, name, desc, buttons); grid.append(card);
  }
  document.getElementById('empty-state').hidden = shown.length !== 0;
  document.getElementById('command-count').textContent = copy[lang].commandCount(shown.length);
}
function renderFilters() {
  filters.replaceChildren();
  for (const cat of cats) {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = copy[lang][cat];
    button.className = cat === activeCat ? 'filter is-active' : 'filter'; button.setAttribute('aria-pressed', String(cat === activeCat));
    button.addEventListener('click', () => { activeCat = cat; renderFilters(); renderCommands(); });
    filters.append(button);
  }
}
function setLanguage(next) {
  lang = next === 'en' ? 'en' : 'ru';
  document.documentElement.lang = lang;
  for (const element of document.querySelectorAll('[data-i18n]')) {
    const value = copy[lang][element.dataset.i18n];
    if (value === undefined) continue;
    element.textContent = value;
  }
  for (const element of document.querySelectorAll('[data-i18n-placeholder]')) element.placeholder = copy[lang][element.dataset.i18nPlaceholder];
  for (const button of document.querySelectorAll('[data-lang]')) button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  try { localStorage.setItem('ahr-language', lang); } catch { /* private mode */ }
  renderFilters(); renderCommands();
}
async function copyCommand(value) {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
    else {
      const input = document.createElement('textarea'); input.value = value; input.style.position = 'fixed'; input.style.opacity = '0';
      document.body.append(input); input.select();
      if (!document.execCommand('copy')) throw new Error('copy failed');
      input.remove();
    }
    toast.textContent = copy[lang].copied(value);
  } catch { toast.textContent = copy[lang].copyError; }
  toast.classList.add('is-visible'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1900);
}
for (const button of document.querySelectorAll('[data-lang]')) button.addEventListener('click', () => setLanguage(button.dataset.lang));
search.addEventListener('input', renderCommands);
grid.addEventListener('click', event => {
  const button = event.target.closest('[data-copy]');
  if (button) copyCommand(button.dataset.copy);
});
let saved = 'ru';
try { saved = localStorage.getItem('ahr-language') || 'ru'; } catch { /* private mode */ }
setLanguage(saved);
