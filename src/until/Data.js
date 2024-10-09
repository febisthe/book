import PropTypes from 'prop-types';

const Data = ({ title, image, author }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <br />
      <strong>{title}</strong>
      <p>{author}</p>
    </div>
  );
};

// 타입 검사
Data.propTypes = {
  title: PropTypes.string.isRequired, 
  author: PropTypes.string,           
  image: PropTypes.string.isRequired,
};

export default Data;