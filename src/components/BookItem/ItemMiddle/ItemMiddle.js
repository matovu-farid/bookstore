import { CircularProgressbar } from 'react-circular-progressbar';
import './ItemMiddle.css';

const ItemMiddle = () => (
  <div className="item-middle">
    <CircularProgressbar value={66} text={`${66}%`} />
  </div>
);
export default ItemMiddle;
