import PageTitle from '../PageTitle/PageTitle';
import styles from './WrongRoute.module.scss';

const WrongRoute = () => {

    return (
        <div className={styles.main}>
            <PageTitle>Error! Type correct adress!</PageTitle>
            <a href="/">
                <i className="fa fa-rotate-left"></i>
            </a>
            <PageTitle>Turn Back</PageTitle>
        </div>
    );
};

export default WrongRoute;