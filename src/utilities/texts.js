export const HELLO_MESSAGE = 'hello-message';
export const TYPIST_SKILLS = 'typist-skills';
export const FIRST_NAME = 'first-name';
export const FULL_NAME = 'full-name';
export const GREETINGS = 'greetings';
export const ABOUT = 'about';
export const DROP_A_LINE = 'drop-a-line';

export const languages = ['en', 'ru'];
const languageToIndex = { en: 0, ru: 1 };

const texts = {
  [GREETINGS]: ['Hello, I\'m ', 'Привет, я '],
  [FIRST_NAME]: ['Arkadii', 'Аркадий'],
  [FULL_NAME]: ['Arkadii Berezkin', 'Аркадий Березкин'],
  [HELLO_MESSAGE]: ['Hi, I\'m Ark and I build', 'Привет, я Арк и я делаю'],
  [TYPIST_SKILLS]: [
    [
      'landing pages.',
      'corporate websites.',
      'web apps.',
      'mobile apps.',
      'backend servers.',
      'with ❤️.',
    ],
    [
      'landing страницы.',
      'корпоративные сайты.',
      'web приложения.',
      'мобильные приложения.',
      'backend для приложений.',
      'это все с ❤️.',
    ],
  ],
  [ABOUT]: [
    [
      `
        And I develop mobile/web applications for various purposes. 
        I mainly use JavaScript frameworks for both backend and frontend but not limited by 
        these and can learn any tech stack if necessary.
      `,
      'When I\'m not hacking you can find me playing a guitar or... well... hacking.',
      'Now I\'m freelancing for a living but also don\'t mind to land a full time job.',
    ],
    [
      `
        И я разрабатываю мобильные/веб приложения различных целей. 
        В основном я использую JavaScript фреймворки для написания приложений, но не ограничен ими
        и могу освоить любой технологический стек, если необходимо.
      `,
      'Когда я не программирую, я люблю играть на гитаре и... программировать.',
      'Сейчас я в основном занимаюсь фрилансом.',
    ],
  ],
  [DROP_A_LINE]: [
    'Want to work together? Drop me a line to ',
    'Хотите работать вместе? Напишите мне пару строк на ',
  ],
};

const getText = (label, language) => texts[label][languageToIndex[language]];

export default getText;
