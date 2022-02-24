import { CircularProgressbar } from 'react-circular-progressbar';
import './ItemMiddle.css';

const ItemMiddle = () => (
  <div className="item-middle">
    <div className="progress-bar">
      <CircularProgressbar value={66} text={`${66}%`} />
    </div>
    <p className="grey">Completed</p>
  </div>
);
export default ItemMiddle;
