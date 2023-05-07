import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { getSearchString, searchCard } from '../../redux/searchStringRedux';
import { useDispatch, useSelector,  } from 'react-redux';

const SearchForm = () => {

    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);
    

    const [title, setTitle] = useState(searchString);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(searchCard(title));
        setTitle('');
    }
    
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;