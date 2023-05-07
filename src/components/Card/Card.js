import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/cardsRedux';

const Card = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleFavorite(props.id));
    };
    
    return (
        <li className={styles.card}>
            {props.title} 
            <button  className={clsx(styles.button, props.isFavorite && styles.isActive)} onClick={handleSubmit}>
                <i className='fa fa-star-o'></i>
            </button>
            </li>
    );
};

export default Card;