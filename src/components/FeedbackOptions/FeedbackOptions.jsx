import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <ul className={css.list}>
   
            {Object.keys(options).map(el => (

        <li key={el} className={css.item}>
            <button className={el} 
            type='button' 
            onClick={() => onLeaveFeedback (el)}>
                {el}
           
            </button>
            </li>))}
            </ul>
};
  





FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    
}