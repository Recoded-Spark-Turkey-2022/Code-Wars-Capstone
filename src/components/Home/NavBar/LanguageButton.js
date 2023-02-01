import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../../../i18next/i18next';

const LanguageButton = () => {
  const { t } = useTranslation();

  const [locale, setLocale] = useState('en');
  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18next.changeLanguage(lan);
  };

  return (
    <div>
      <select
        id="languages"
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="en">{t('English')}</option>
        <option value="tr">{t('Turkish')}</option>
        <option value="tr">{t('Arabic')}</option>
      </select>
    </div>
  );
}

export default LanguageButton;