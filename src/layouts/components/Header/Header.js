import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAmerica,
    faEllipsisVertical,
    faGear,
    faInbox,
    faKeyboard,
    faMessage,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';
import Search from '../Search';
const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                {/* components search  */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
