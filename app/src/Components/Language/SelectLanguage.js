import i18n from 'i18n-js';
import './SelectLanguage.css'
const  SelectLanguage = () => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // i18n.locale = selectedLanguage;
  };

  return (
    <select className='select' onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Fr</option>
      <option value="nl">Nl</option>
      <option value="fa">فارسی</option>
    </select>
  );
}


export default SelectLanguage