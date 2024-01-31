import className from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
const cx = className.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/405274836_122116165610090411_6251687289730396683_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_ohc=c-XzeYBcMvgAX_BfrsH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCSdtsl0p8_8wt3jggYRqNWKwVo1MvHEX98tSmv6YmGFg&oe=65A42FD9"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {' '}
                    <span>Thuy Quyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>PhamThaiNguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
