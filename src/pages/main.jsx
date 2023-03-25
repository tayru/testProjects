import { Link } from 'react-router-dom';

export const MainPage = () => (
    <>
        <h3>Ссылки на проекты</h3>
        <nav>
            <ul>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/two">Page Two</Link>
                </li>
            </ul>
        </nav>
    </>
);
