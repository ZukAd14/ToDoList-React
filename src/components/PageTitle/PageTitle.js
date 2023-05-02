import styles from './PageTitle.module.scss';
import PropTypes from 'prop-types';

const PageTitle = props => {

    return (
        <div className={styles.pageTitle}>
            <h2 className={styles.title}>
                {props.children}
            </h2>
        </div>
    );
};

PageTitle.propTypes = {
    children: PropTypes.string.isRequired,
};
export default PageTitle;