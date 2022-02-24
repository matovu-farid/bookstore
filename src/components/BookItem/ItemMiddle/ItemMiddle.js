import { CircularProgressbar } from 'react-circular-progressbar';
import './ItemMiddle.css';

const ItemMiddle = () => {
  const number = Math.floor(Math.random() * 100);

  return (
    <div className="item-middle">
      <div className="progress-bar">
        <CircularProgressbar value={number} />
      </div>
      <p>
        <span className="pecent-text">

          {number}
          %
        </span>

        <br />
        <span className="grey completed">

          Completed
        </span>
      </p>
    </div>
  );
};
export default ItemMiddle;
