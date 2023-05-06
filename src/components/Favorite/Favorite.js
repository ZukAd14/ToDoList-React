import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { getIsFavorite } from '../../redux/store';

const Favorite = () => {


    const favouriteCards = useSelector(getIsFavorite);
    if(favouriteCards.length === 0) {
        return (
            <div className={styles.favorite}>
                <PageTitle>You have 0 favorite cards, get back add some</PageTitle>
            </div>
        );
    }

    
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.column}>
                <ul className={styles.cards}>
                    {favouriteCards.map(card =>
                        <Card
                            key={card.id}
                            {...card} />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Favorite;