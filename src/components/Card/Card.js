import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard, toggleFavorite } from '../../redux/cardsRedux';

const Card = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleFavorite(props.id));
    };
    
    const cardRemover = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }
    return (
        <li className={styles.card}>
            {props.title} 
            <div>
                <button  className={clsx(styles.button, props.isFavorite && styles.isActive)} onClick={handleSubmit}>
                    <i className='fa fa-star-o'></i>
                </button>
                <button onClick={cardRemover}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </li>
    );
};

export default Card;