import generatePwd from './generators';

const generatedPwd = document.querySelector('.generated-pwd');
const qtdCharacters = document.querySelector('.qtd-characters');
const checkMaisc = document.querySelector('.check-maisc');
const checkMinisc = document.querySelector('.check-minisc');
const checkNum = document.querySelector('.check-num');
const checkSymbols = document.querySelector('.check-simb');
const generatePassword = document.querySelector('.generate-pwd');

export default () => {
  generatePassword.addEventListener('click', () => {
    generatedPwd.innerHTML = generate();
  });
};

function generate() {
  const pwd = generatePwd(
    qtdCharacters.value,
    checkMaisc.checked,
    checkMinisc.checked,
    checkNum.checked,
    checkSymbols.checked
  );
  return pwd || 'Nada Selecionado.';
}
