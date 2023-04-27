import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import shortid from 'shortid';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { id: shortid(), columnId: props.columnId ,title } });
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