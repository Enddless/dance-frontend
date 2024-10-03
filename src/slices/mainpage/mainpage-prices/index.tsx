import TitleSection from '../../../components/title';
import CardPrice from '../../../components/card-price';
import classNames from 'classnames';
import { useAppSelector } from '../../../services/type-service';
import { LoadingStatus } from '../../../const/const';
import Spinner from '../../../components/spinner';
import { Guide } from '../../../components/guide';

export const PricesSlice = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const pricesData = main?.Price;

  const lengthMoreDefault = pricesData && pricesData?.length > 4;
  const classNameList = classNames('main-prices__list card-prices__list grid grid--4', {
    'main-prices__tile': lengthMoreDefault
  });

  const statusPrice = useAppSelector((state) => state.main.isPriceLoading);

  return (
    <section className='section main-prices container' id='pricesBlock'>
      <TitleSection title='Услуги и цены' cls='main-prices__title' />
      {statusPrice === LoadingStatus.Pending ? (
        <div className='main-prices__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={classNameList}>
            {pricesData ? (
              <>
                {pricesData.map((price) => {
                  return (
                    <CardPrice
                      key={price.idPrice}
                      price={price}
                      isMainPage={lengthMoreDefault ? lengthMoreDefault : false}
                    />
                  );
                })}
              </>
            ) : (
              <Guide link='price' />
            )}
          </div>
        </>
      )}
    </section>
  );
};
