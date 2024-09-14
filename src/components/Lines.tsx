import { LineProps } from '../utils/interface'
  const Line: React.FC<LineProps> = ({ x1, y1, x2, y2 }) => {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="0.2" />;
  };
  
  export default Line;
  