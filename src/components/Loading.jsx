import '../App.css'
const Loading = ({foto}) => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <img src={foto} alt="" />
      </div>
    </div>
  );
};

export default Loading;