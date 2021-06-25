const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateMaisc = () => String.fromCharCode(rand(65, 91));

const generateMinisc = () => String.fromCharCode(rand(97, 123));

const generateNum = () => String.fromCharCode(rand(48, 58));

const symbol = ',.;^[]{}!@#$%*()_+=-';

const generateSymbol = () => symbol[rand(0, symbol.length)];

export default function generatePwd(qtd, maisc, minisc, num, symbols) {
  const pwdArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maisc && pwdArray.push(generateMaisc());
    minisc && pwdArray.push(generateMinisc());
    num && pwdArray.push(generateNum());
    symbols && pwdArray.push(generateSymbol());
  }

  return pwdArray.join('').slice(0, qtd);
}
