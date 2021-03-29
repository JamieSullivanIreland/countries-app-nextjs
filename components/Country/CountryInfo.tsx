import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import countryStyles from '../../styles/Country.module.scss';

import Link from 'next/link';
import CountryHeader from './CountryHeader';
import BorderCountry from './BorderCountry';

import type { Country } from './CountryItem';

type Props = {
  country: Country;
};

const CountryInfo = ({ country }: Props) => {
  const { name, flag, capital, population, currencies, languages, borders } = country;
  const countryCurrencies = currencies.map(currency => currency.code);
  const countryLanguages = Object.keys(languages)
      .map(key => languages[key].name)
      .join(", ");

  return (
    <>
      <div>
        <img
          src={flag}
          alt={name}
          className={countryStyles.flag}
        />
      </div>
      <section className={`${countryStyles.card} width-full`}>
        <h2>{ name }</h2>
        <div className={countryStyles.listItem__container}>
          <div className={countryStyles.listItem__info}>
            <CountryHeader
              heading="Capital"
              value={capital}
              icon={<LocationCityIcon />}
            />
            <CountryHeader
              heading="Population"
              value={population.toLocaleString()}
              icon={<PersonIcon />}
            />
            <CountryHeader
              heading="Currency"
              value={countryCurrencies}
              icon={<AttachMoneyIcon />}
            />
            <CountryHeader
              heading={languages.length > 1 ? 'Languages' : 'Language'}
              value={countryLanguages}
              icon={<LanguageIcon />}
            />
          </div>
        </div>
      </section>
      <section className={countryStyles.borderCountries}>
        {
          borders.length > 1
            ? (
              <>
                <h2>Bordering Countries</h2>
                <div className={countryStyles.borderCountries__container}>
                  {
                    borders.map((countryCode, i) => (
                      <BorderCountry key={i} countryCode={countryCode} />
                    ))
                  }
                </div>
              </>
            )
            : ''
        }
      </section>
    </>
  );
};

export default CountryInfo;
