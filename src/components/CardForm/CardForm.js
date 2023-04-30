import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addCard } from '../../redux/store';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addCard({ columnId: props.columnId ,title }));
        setTitle('');
    }

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button>
        </form>
    );
};

export default CardForm;