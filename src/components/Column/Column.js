import styles from  './Column.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';


const Column = props => {

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title} title={props.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => 
                    <Card 
                        key={card.id} 
                        {...card} />
                )}
            </ul>
            <CardForm columnId={props.id}/>
        </article>
    );
};

export default Column;