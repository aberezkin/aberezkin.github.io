export const HELLO_MESSAGE = 'hello-message';
export const TYPIST_SKILLS = 'typist-skills';
export const FULL_NAME = 'full-name';
export const ABOUT = 'about';

export const languages = ['en', 'ru'];
const languageToIndex = { en: 0, ru: 1 };

const texts = {
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
      'TODO: implement description',
    ],
    [
      'ТУДУ: реализовать описание',
    ],
  ],
};

const getText = (label, language) => texts[label][languageToIndex[language]];

export default getText;
