import user from 'data/user';
import css from 'components/UserDescr/UserDescr.module.css';
export const UserDescr = ({ text }) => {
  return (
    <div className={css.description}>
      <img src={user.avatar} alt="" className={css.avatar} />
      <p className={css.username}>{user.username}</p>
      <p className={css.tag}>@{user.tag}</p>
      <p className={css.location}>{user.location}</p>
    </div>
  );
};
